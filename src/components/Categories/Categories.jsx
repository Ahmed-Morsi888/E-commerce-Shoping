import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Categories() {
    const [allCategories, setAllCategories] = useState(null)
    const [loading, setLoading] = useState(false)

    function getAllCategories() {
        setLoading(true);
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`).then((response) => {
            setLoading(false);
            setAllCategories(response.data.data)


        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }
    useEffect(() => { getAllCategories() }, [])
    return <>
        {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className=" mt-20 fa-solid fa-spinner fa-spin text-green-500 text-6xl"> </i> </div>
            : <>
                <div className=' flex flex-wrap justify-center py-4'>
                    {allCategories?.map((product) => <div key={product?._id} className='w-[90%]  lg:w-[24%] mt-4 ms-2 shadow-lg border-2 border-gray-200  p-2 text-center flex flex-col justify-center'  >
                        <Link to={`/categorydetails/${product?._id}`}>
                            <img className='w-full h-80' src={product?.image} alt={product?.name} />
                            <div className='text-center mt-2'>
                                <h2 className='text-green-600 font-semibold'>{product?.name}</h2>
                            </div>
                        </Link>

                    </div>
                    )}
                </div>
            </>}

    </>
}
