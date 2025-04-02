import React, { useEffect, useState } from 'react'
import Style from "./Register.module.css"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const [loading, setLoading] = useState(false)
    useEffect(() => { }, [])
    let navigate = useNavigate();
    let myValidate = yup.object().shape({
        name: yup.string().min(3, "The minimum character is 3").max(15, "The maximum character is 15").required("Name is required"),
        email: yup.string().email("Email is invalid").required("Email is required"),
        phone: yup.string().matches(/^01[0125][0-9]{8}$/, "Phone must be egyption number").required("phone is required"),
        password: yup.string().matches(/^[A-Z][0-9]{5,9}$/, "Password is invalid").required("Password is required"),
        rePassword: yup.string().oneOf([yup.ref("password")], "repassword is bot match with password").required("rePassword is required")
    })

    function signup(formvalues) {
        setLoading(true)
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formvalues).then((response) => {
            setLoading(false)
            navigate("/");
        }).catch((error) => {
            setLoading(false)
            console.log(error);

        })

    }


    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            rePassword: ""

        },
        validationSchema: myValidate,
        onSubmit: signup

    })


    return <>

        <form onSubmit={formik.handleSubmit} className="w-3/4 max-w-md mx-auto mt-10">
            <h1 className="font-bold text-3xl  text-green-700">Signup</h1>
            <hr className='mt-2 bg-gray-700 h-0.5' />
            <div className="relative z-0 w-full mb-5  mt-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name </label>
            </div>
            {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-500 dark:text-white" role="alert">
                {formik.errors.name}
            </div> : null}

            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-500 dark:text-white" role="alert">
                {formik.errors.email}
            </div> : null}
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone</label>
            </div>
            {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-500 dark:text-white" role="alert">
                {formik.errors.phone}
            </div> : null}
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Password</label>
            </div>
            {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-500 dark:text-white" role="alert">
                {formik.errors.password}
            </div> : null}
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Repassword</label>
            </div>
            {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-500 dark:text-white" role="alert">
                {formik.errors.rePassword}
            </div> : null}

            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                {loading ? <i className="fas fa-spinner fa-spin"></i> : "Submit"}</button>

        </form>
    </>
}
