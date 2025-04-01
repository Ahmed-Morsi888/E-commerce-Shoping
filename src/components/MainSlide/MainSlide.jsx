import pic1 from "../../assets/main-slider-1.jpeg"
import pic2 from "../../assets/main-slider-2.jpeg"
import pic3 from "../../assets/main-slider-3.jpeg"

export default function MainSlide() {

    return <>

        <div className='flex flex-wrap px-4 p-2'>

            <div className='w-3/4 '>
                <img className='w-full  h-[300px] lg:h-[400px]' src={pic1} />
            </div>
            <div className='w-1/4 flex flex-col'>
                <img src={pic2} className='w-full h-[150px] lg:h-[200px]' />
                <img src={pic3} className='w-full h-[150px] lg:h-[200px]' />
            </div>
        </div>
    </>
}
