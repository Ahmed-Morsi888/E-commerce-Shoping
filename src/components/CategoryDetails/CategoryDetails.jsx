import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
export default function CategoryDetails() {
    const [specificCategory, setSpecificCategory] = useState(null)
    const [loading, setLoading] = useState(false)
    let { id } = useParams();
    function getSpecificCategory(id) {
        setLoading(true);
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`).then((response) => {
            setLoading(false);
            setSpecificCategory(response.data.data);
        }).catch((error) => {
            setLoading(false);
            console.log(error);

        })
    }
    useEffect(() => { getSpecificCategory(id) }, [id])
    return <>
        {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className=" mt-20 fa-solid fa-spinner fa-spin text-green-500 text-6xl"> </i> </div>
            : <>
                <div className=' flex flex-wrap justify-center items-center py-4'>
                    <div key={specificCategory?._id} className='mt-4 ms-2 shadow-lg border-2 border-gray-200  w-50 p-2 text-center flex flex-col justify-center'  >
                        <Link >
                            <img className='w-full h-[500px]' src={specificCategory?.image} alt={specificCategory?.name} />
                            <div className='text-center mt-2'>
                                <h2 className='text-green-600 font-semibold'>{specificCategory?.name}</h2>
                            </div>
                        </Link>

                    </div>

                </div>
            </>}
    </>
}
