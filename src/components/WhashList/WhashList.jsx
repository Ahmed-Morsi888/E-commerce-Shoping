import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CartContext } from '../CartContext/CartContext'

export default function WhashList() {
    const [currentId, setCurrentId] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    let { removeProductFromwhashlist,addProductToCart } = useContext(CartContext)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [loadingAdd, setLoadingAdd] = useState(false)

    const headers = {
        token: localStorage.getItem("userToken")
    }
    const [whashlistProduct, setWhashlistProduct] = useState(null)
    function getWhashlist() {
        setLoading(true);
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers })
            .then((response) => {
                setLoading(false);
                setWhashlistProduct(response.data.data)
                setCount(response.data.count)
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            });
    }
    async function RemoveProductFromWhashlist(productId) {
        setCurrentId(productId)
        setIsLoading(true);
        await removeProductFromwhashlist(productId);
        setIsLoading(false);
        getWhashlist();
    }
    async function addProduct(productId) {
        setCurrentId(productId)
        setLoadingAdd(true);
        let add = await addProductToCart(productId);
        setLoadingAdd(false);
        toast(add.data.message, { position: "bottom-center", duration: 2000, className: "bg-green-500" })
        
    }


    useEffect(() => { getWhashlist() }, [])
    return <>
        {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className=" mt-20 fa-solid fa-spinner fa-spin text-green-500 text-6xl"> </i> </div>
            : <>
                {count > 0 ? <div className="mt-4 w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Add To Cart
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {whashlistProduct?.map((product) => <> <tr className= " bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ">
                                <td className="p-4 ">
                                    <img src={product?.imageCover} className="h-[174.5px] w-16 md:w-32 max-w-full max-h-full" alt={product?.title} />

                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {product?.title}
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {` ${product?.price} $`}
                                </td>
                                <td className="px-6 py-4">
                                    <span onClick={() => RemoveProductFromWhashlist(product?.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" >{isLoading && currentId === product?.id ? <i className="fa-solid fa-spinner fa-spin"></i> : "Remove"}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span>{loadingAdd  && currentId === product?.id?<i className="fa-solid fa-spinner fa-spin"></i>   :<span onClick={() => addProduct(product?.id)} id={product?.id} className='cursor-pointer  text-md font-medium text-green-500 hover:underline'>add to cart</span>
                            }</span>
                                
                                </td>
                            </tr>
                            </>)}

                        </tbody>
                    </table>


                </div> : <p className="text-center pt-24 text-2xl font-semibold"> Your Wishlist Is Empty....</p>}
            </>
        }


    </>

}
