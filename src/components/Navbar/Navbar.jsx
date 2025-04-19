import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
export default function Navbar() {
    let { userToken, setUserToken } = useContext(UserContext)
    const [allMenu, setAllMenu] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setAllMenu(window.innerWidth < 768); // 768px is your breakpoint
        };
    
        handleResize(); // Set on mount
        window.addEventListener('resize', handleResize); // Update on resize
    
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup
        };
      }, []);

    function logout() {
        localStorage.removeItem('userToken');
        setUserToken(null);
        navigate("/login");
    }
    function menuHandler() { 
        
            
            document.getElementById('menu1').classList.toggle('hidden');
        
        
    
    }



    return <>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-200">
            <div className=" max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-5 md:p-2">
                <div className=" flex flex-wrap items-center justify-center">
                    {userToken !== null ? <Link to={"/"} className= " absolute top-2 left-4 md:static md:mx-2 flex items-center space-x-2 rtl:space-x-reverse">
                        <i className=" text-lg fa-sharp fa-solid fa-cart-shopping text-green-500" ></i>
                        <span className=" text-xl font-bold whitespace-nowrap dark:text-black">FreshCart</span>
                    </Link> : <Link to={"#"} className="absolute top-2 left-4 md:static flex items-center space-x-2 rtl:space-x-reverse">
                        <i className=" text-lg fa-sharp fa-solid fa-cart-shopping text-green-500" ></i>
                        <span className=" self-center text-xl  font-bold whitespace-nowrap dark:text-black">FreshCart</span>
                    </Link>}

                    {userToken !== null ? <>
                        <ul id='menu1' className={`${allMenu ? 'hidden ' : ''} text-center  font-semibold flex flex-col  p-4 md:p-0 mt-4 ms-0 md:ms-0  rounded-lg bg-gray-200 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-gray-200 dark:border-gray-700`}>
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
                            {allMenu?<>
                                <ul className="font-semibold  flex flex-col   rounded-lg bg-gray-200 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-gray-200 dark:border-gray-700">
                        {userToken == null ? <>

                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5" to="register">SignUp</NavLink>
                            </li></> : <>
                            <li>
                                <Link to="whashlist"><span className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:px-1 dark:rounded-md dark:py-0.5"> Favorite</span></Link>
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
                    </ul></> :null}
                           
                        </ul></> : null}
                       
                        <i onClick={menuHandler} id='toggle' style={{ display: allMenu ? 'block' : 'none' }} className={` absolute top-3 right-5 fa-solid fa-bars text-xl `}></i>



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
