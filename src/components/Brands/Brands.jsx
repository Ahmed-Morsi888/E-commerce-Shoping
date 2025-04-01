import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Brands() {
    const [allBrands, setAllBrands] = useState(null)
    const [loading, setLoading] = useState(false)


function getAllBrands(){
    setLoading(true)
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    .then((response)=>{
        setLoading(false)
        setAllBrands(response.data.data)
        console.log(response);
      
    }).catch((error)=>{
        setLoading(false)
        console.log(error);   
    })
}

    useEffect(() => {getAllBrands()}, [])


    return <>
      {loading ? <div className=" w-full h-full  flex justify-center items-center"><i className=" mt-20 fa-solid fa-spinner fa-spin text-green-500 text-6xl"> </i> </div>
            : <>
                <div className=' flex flex-wrap justify-center  md:justify-normal py-4'>
                    {allBrands?.map((product) => <div key={product?._id} className='w-[90%]  lg:w-[16%] mt-4 ms-2 shadow-lg border-2 border-gray-200  p-2 text-center flex flex-col justify-center'  >
                        <Link to={`/specificbrands/${product?._id}`}>
                            <img className='w-full h-[127.99px]' src={product?.image} alt={product?.name} />
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
