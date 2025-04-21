import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
export default function Cart() {


    const [productCart, setProductCart] = useState(null)
    let { clearCart, getLogedCart, removeProductFromCart, updateProductCount } = useContext(CartContext);
    const [currentId, setCurrentId] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [numOfCart, setNumOfCart] = useState(0)
    const [loading, setLoading] = useState(false)

    async function getLogedUserCart() {
        setLoading(true);
        let loged = await getLogedCart();
        console.log(loged);
        setLoading(false)
        setProductCart(loged.data.data);
        setNumOfCart(loged.data?.numOfCartItems)
    }
    async function removeProduct(productId) {
        setCurrentId(productId)
        setIsLoading(true);
        let loged = await removeProductFromCart(productId);
        toast("Product removed successfully", { position: "bottom-center", duration: 2000, className: "bg-red-500" });
        setIsLoading(false);

        setNumOfCart(loged.data?.numOfCartItems)
        setProductCart(loged.data.data);
    }
    async function updateProduct(productId, count) {
        setCurrentId(productId)
        let loged = await updateProductCount(productId, count);
        setNumOfCart(loged.data?.numOfCartItems)
        setProductCart(loged.data.data);
    }
    async function clearAllCart() {
        setLoading(true);
        let loged = await clearCart();
        setLoading(false)
        setProductCart(loged.data.data);
        setNumOfCart(loged.data?.numOfCartItems)
    }

    useEffect(() => { getLogedUserCart() }, [])

    return <>

        {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className="mt-20 fa-solid fa-spinner fa-spin text-green-500 text-6xl"> </i> </div>
            : <>
                {numOfCart > 0 ? <><h2 className='w-full text-center py-4 text-xl font-semibold' >Total Cart Price <span className='font-bold text-green-800'> ${productCart?.totalCartPrice}</span> </h2>
                    <div className=" w-[98%] md:w-full lg:w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productCart?.products.map((product) => <> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 text-center">
                                        <img src={product?.product?.imageCover} className="h-[100px] md:h-[174.5px] w-16 md:w-32 max-w-full max-h-full" alt={product?.product?.title} />

                                    </td>
                                    <td className="px-6 py-4 font-medium md:font-semibold text-gray-900 dark:text-white text-center">
                                        {product?.product?.title.split(" ").splice(0, 4).join(" ")}
                                    </td>
                                    <td className="px-6 py-4   font-medium md:font-semibold text-center">
                                        <div className="flex items-center">
                                            <button onClick={() => updateProduct(product?.product.id, product?.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div>
                                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product?.count} required />
                                            </div>
                                            <button onClick={() => updateProduct(product?.product.id, product?.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-2 py-4  font-medium md:font-semibold text-gray-900 dark:text-white text-center">
                                        {`${product?.price} $`}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span onClick={() => removeProduct(product?.product.id)} className=" font-medium md:font-semibold text-red-600 dark:text-red-500 hover:underline cursor-pointer" >{isLoading && currentId === product.product.id ? <i className="fa-solid fa-spinner fa-spin"></i> : "Remove"}</span>
                                    </td>
                                </tr>
                                </>)}

                            </tbody>
                        </table>


                    </div>
                    <div className='w-full text-center mt-2 flex justify-around'>
                        <button onClick={clearAllCart} className='w-[120px] h-[60px]  md:w-[200px] text-lg md:text-xl font-semibold px-0   md:px-6 py-0  md:py-5 bg-red-500 rounded-lg'>Clear Cart <i className="fa-solid fa-trash-can" ></i> </button>
                        <Link className='w-[150px] h-[60px]  md:w-[200px]  text-xl font-semibold  px-0 md:px-6 pt-4  md:py-5 bg-green-500 rounded-lg' to={`/onlinepay`}> <button className='w-full'>Online Pay </button> </Link>
                    </div></> : <p className="text-center pt-24 text-2xl font-semibold"> Your Cart is Empty....</p>}
            </>}


    </>
}
