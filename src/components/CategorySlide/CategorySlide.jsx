import axios from 'axios'
import Slider from "react-slick";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function CategorySlide() {
    const [categorySlide, setCategorySlide] = useState(null)
    function getCategoryProduct() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`).then((response) => {
            setCategorySlide(response.data.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => { getCategoryProduct() }, [])
    var setting = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true
    };
    return <>
        <div className='hidden md:block w-full m-auto px-4 overflow-hidden' >
            <h2 className=' text-green-600  font-semibold text-xl py-2'>Popular Category</h2>
            <Slider className=' flex flex-wrap ' {...setting}>
                {categorySlide?.map((src) => <Link className='w-1/4' key={src?.id} to={`/categorydetails/${src?._id}`}>
                    <div >

                        <img className=' w-full h-[200px]' src={src.image} alt={src?.name} />

                    </div>
                </Link>
                )}


            </Slider>
        </div>
    </>
}
