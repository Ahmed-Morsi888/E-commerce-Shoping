import { useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
export default function Navbar() {
    let { userToken, setUserToken } = useContext(UserContext)
    let navigate = useNavigate();
    useEffect(() => { }, [])

    function logout() {
        localStorage.removeItem('userToken');
        setUserToken(null);
        navigate("/login");
    }
    return <>

        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">


                <div className=" flex flex-wrap items-center justify-center">
                    {userToken !== null ? <Link to={"/"} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <i className=" text-lg fa-sharp fa-solid fa-cart-shopping text-green-500" ></i>
                        <span className=" self-center text-xl font-medium whitespace-nowrap dark:text-black">FreshCart</span>
                    </Link> : <Link to={"#"} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <i className=" text-lg fa-sharp fa-solid fa-cart-shopping text-green-500" ></i>
                        <span className=" self-center  font-bold whitespace-nowrap dark:text-black">FreshCart</span>
                    </Link>}


                    {userToken !== null ? <>
                        <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 ms-4  rounded-lg bg-gray-200 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-gray-200 dark:border-gray-700">
                            <li>
                                <NavLink className="  block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="cart">Cart</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="brands">Brands</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="categories">Categories</NavLink>
                            </li>
                        </ul></> : null}

                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-semibold  flex flex-col p-4 md:p-0 mt-4 ms-4  rounded-lg bg-gray-200 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-gray-200 dark:border-gray-700">
                        {userToken == null ? <>

                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="register">SignUp</NavLink>
                            </li></> : <>
                            <li>
                                <Link to="whashlist"><i className="fa-solid fa-bookmark text-green-500"></i></Link>
                            </li>
                            <li>
                                <span onClick={() => logout()} className="cursor-pointer block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Logout</span>
                            </li></>}
                        <li>
                            <i className='fab fa-facebook mx-2  cursor-pointer text-blue-800'></i>
                            <i className='fab fa-instagram mx-2 cursor-pointer  text-red-800'></i>
                            <i className='fab fa-twitter mx-2 cursor-pointer  text-blue-400'></i>
                            <i className='fab fa-youtube mx-2 cursor-pointer  text-red-800'></i>
                            <i className='fab fa-linkedin mx-2 cursor-pointer  text-blue-800'></i>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>


    </>
}
