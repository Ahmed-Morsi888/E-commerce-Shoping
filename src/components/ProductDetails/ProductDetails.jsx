import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import axios from "axios"
import { CartContext } from '../CartContext/CartContext';
import toast from 'react-hot-toast';
export default function ProductDetails() {
    let { setNumOfCartItem, addProductToCart } = useContext(CartContext)

    let { id, category } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [currentId, setCurrentId] = useState(0);
    const [loading, setLoading] = useState(false)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };
    const [specialProduct, setSpecialProduct] = useState(null)
    const [relatedProduct, setRelatedProduct] = useState(null)
    function getProductDetails(id) {
        setLoading(true);
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then(({ data }) => {
            setLoading(false);
            setSpecialProduct(data.data);

        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }
    function getRelatedProduct(category) {
        setLoading(true);
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then(({ data }) => {
            const relatedProducts = data.data.filter((product) => product.category.name === category)
            setLoading(false);
            setRelatedProduct(relatedProducts);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }
    async function addProduct(productId) {
        setCurrentId(productId)
        setIsLoading(true);
        let add = await addProductToCart(productId);
        setIsLoading(false);
        toast(add.data.message, { position: "bottom-center", duration: 2000, className: "bg-green-500" })
    }
    useEffect(() => { getProductDetails(id); getRelatedProduct(category) }, [id, category])

    return <>
        {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className="mt-20 fa-solid fa-spinner fa-spin text-green-500 text-6xl"> </i > </div >
            : <>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-center md:p-10 items-center mx-auto'  >

                    <div className='w-3/4 lg:w-1/4 shadow-lg '>
                        <Slider {...settings}>
                            {specialProduct?.images.map((src) => <img key={specialProduct?.id} className='w-full' src={src} alt={specialProduct?.title} />
                            )}
                        </Slider>
                    </div>


                    <div className=' w-full text-center lg:text-left mt-6 lg:mt-0 lg:w-3/4 px-6'>
                        <h2 className='font-semibold text-lg py-2'> {specialProduct?.title}</h2>
                        <p className='w-full lg:w-3/4 '>{specialProduct?.description}</p>
                        <div className='w-[90%] mx-auto lg:mx-0 lg:w-3/4 flex justify-between px-2 py-2'>
                            <span className='font-semibold'>{specialProduct?.price} EGP </span>
                            <span className='font-semibold'> {specialProduct?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                        </div>
                        <button onClick={() => addProduct(specialProduct?.id)} className="w-[90%] lg:w-3/4 text-center rounded-lg py-2 bg-green-600 text-white ">{isLoading && currentId === specialProduct?.id ? <i className="fa-solid fa-spinner fa-spin"></i> : "add to cart"}</button>            
                    </div>
                </div>

                <div className='w-full mx-auto lg:mx-0 lg:w-3/4 m-auto' >
                    <h2 className='mt-4 lg:mt-0 text-center text-green-600  font-semibold text-lg lg:text-xl py-2'>Related Products</h2>
                    <Slider className=' flex flex-wrap ' {...setting}>
                        {relatedProduct?.map((src) => <div key={src?.id} className=' w-1/4 px-1 shadow-lg '>
                            <Link to={`/ProductDetails/${src?.id}/${src?.category?.name}`}>
                                <img className=' w-full' src={src.imageCover} alt={src?.title} />
                            </Link>
                        </div>
                        )}


                    </Slider>
                </div>
            </>}










    </>
}
