import { useContext, useEffect, useState } from 'react'
import { useFormik } from "formik"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    useEffect(() => { }, [])
    let navigate = useNavigate();
    let { setUserToken } = useContext(UserContext)
    function login(formvalues) {
        setLoading(true)
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formvalues).then((response) => {
            setLoading(false);
            localStorage.setItem('userToken', response.data.token);
            setUserToken(response.data.token);
            navigate("/")
        }).catch((error) => {
            setLoading(false)
            setApiError(error.response.data.message);
        })
    }
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: login
    })
    return <>
        <form onSubmit={formik.handleSubmit} className="w-3/4   max-w-md mx-auto mt-10">
            {apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-500 dark:text-white" role="alert">
                {apiError}
            </div> : null}
            <h1 className="font-bold text-3xl  text-green-700">Login</h1>
            <hr className='mt-2 bg-gray-700 h-0.5' />

            <div className="relative z-0 w-full mb-5 mt-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Password</label>
            </div>

            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}</button>

        </form>
    </>
}
