import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import toast from 'react-hot-toast';
export default function Products() {
    let { addProductToCart, addProductToWashlist, removeProductFromwhashlist  } = useContext(CartContext)
    const [allProduct, setAllProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentId, setCurrentId] = useState(0)
    const [loading, setLoading] = useState(false)
    const [productAddedToWhishlist, setProductAddedToWhishlist] = useState([])
    const arr = [];
    let headers = { token: localStorage.getItem('userToken'), }
    
    function getAllProduct() {
        setLoading(true);
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((response) => {
            setLoading(false)
            setAllProduct(response.data.data) 
        })
        .catch((error) => {
            setLoading(false)
            console.log(error);
        })
                    
    }
    function getWhashlist() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers })
            .then((response) => {
                response.data.data.map((data) => {
                    arr.push(data.id);
                })
                setProductAddedToWhishlist(arr)              
            }).then(() => {
                getAllProduct();
            })
            .catch((error) => {
                console.log(error )
            });
    }
    async function addProduct(productId) {
        setCurrentId(productId)
        setIsLoading(true);
        let add = await addProductToCart(productId);
        setIsLoading(false);
        toast(add.data.message, { position: "bottom-center", duration: 2000, className: "bg-green-500" })
    }

    async function AddProductTowhashlist(productId) {
        setCurrentId(productId)
        let loged = await addProductToWashlist(productId);
        document.getElementById(productId).classList.add("whashListStyle")
        toast(loged.data.message, { position: "bottom-center", duration: 2000, className: "bg-green-500" })
    }

    async function RemoveProductFromWhashlist(productId) {
        setCurrentId(productId)
        await removeProductFromwhashlist(productId);
       document.getElementById(productId).classList.remove("whashListStyle")
       toast("product removed succesfully from wishlist", { position: "bottom-center", duration: 2000, className: "bg-red-500" })
        
    }
   
    async function addOrremove(productId) {
        try {
          // احصل على المنتجات الموجودة حاليًا في المفضلة
          const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers });
          const wishlistIds = response.data.data.map((item) => item.id);
      
          if (wishlistIds.includes(productId)) {
            await RemoveProductFromWhashlist(productId);
          } else {
            await AddProductTowhashlist(productId);
          }
        } catch (error) {
          console.log("Error in add or remove product:", error);
        }
      }

    useEffect(() => { getWhashlist() }, [])
    return <>
        {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className=" mt-20 fa-solid fa-spinner fa-spin whashListStyle text-6xl"> </i> </div>
            : <>
                <div className=' flex flex-wrap justify-center  lg:justify-normal  py-4 '>
                    {allProduct?.map((product) => <div key={product?.id} className=' w-[80%] md:w-[24%] md:ms-2 mt-2 lg:mt-2 border-2 border-gray-200 relative lg:w-[16%] p-2 text-center'  >
                        <Link to={`/ProductDetails/${product?.id}/${product?.category.name}`}>
                            <img className='w-full h-[276.5px] ' src={product?.imageCover} alt={product?.title} />
                            <div className='text-center mt-2'>
                                <h2 className='text-green-600 font-semibold'>{product?.category.name}</h2>
                                <p>{product?.title.split(" ").splice(0, 2).join(" ")}</p>
                                <div className='flex justify-between px-2 py-2'>
                                    <span>{product?.price} $ </span>
                                    <span>{product?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                                </div>
                            </div>
                        </Link>
                        <div className='absolute top-3 right-6 '>
                            {
                                    productAddedToWhishlist.includes(product?.id)? <i onClick={() => addOrremove(product?.id)} id={product?.id} className='fa-solid fa-bookmark text-green-500 cursor-pointer '></i>
                                    : <i onClick={() => addOrremove(product?.id)} id={product?.id} className='fa-solid fa-bookmark cursor-pointer '></i>
                            }

                        </div>
                        <button onClick={() => addProduct(product?.id)} className="w-3/4 text-center rounded-lg py-2 bg-green-600 text-white ">{isLoading && currentId === product.id ? <i className="fa-solid fa-spinner fa-spin"></i> : "add to cart"}</button>
                    </div>
                    )}

                </div>
            </>}











    </>
}
