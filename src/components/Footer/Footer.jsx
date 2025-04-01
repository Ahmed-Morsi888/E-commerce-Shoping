export default function Footer() {
    return <>
        <div className='mt-auto'>
            <div className='text-center md:px-10 md:text-left lg:text-left pt-10 px-2 lg:px-10 bg-slate-200 mt-4 '>
                <h2 className='text-2xl md:text-4xl font-medium '>Get The FreshCart App</h2><br />
                <p className='text-2xl  pb-4 font-light'> We Well Send You a Link</p>
                <div className=' w-full lg:w-3/4 m-auto pb-4'>
                <div className='flex items-center md:justify-center lg:static '>
                <input className='w-[70%] lg:w-3/4 h-12 px-2 shadow-lg border-2 border-gray-300 rounded-md  focus:border-green-400 focus:shadow-green-200  outline-none ' placeholder='Email...'></input>
                <button className='bg-green-500 py-2 px-3 md:w-32 w-1/4 h-10 lg:h-12 text-sm lg:px-3 lg:py-2 rounded-lg mx-2 lg:text-lg'>Share Link</button>
                </div>                   
                    <hr className=' h-0.5 bg-slate-300 mt-3' />
                    <p className='py-2 w-full text-center text-lg md:text-xl '>© 2025 Ahmed Morsi All Rights Reserved</p>
                </div>
            </div>
        </div>

    </>
}
