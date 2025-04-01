import { useEffect, useState } from 'react'
import Products from '../Products/Products'
import MainSlide from '../MainSlide/MainSlide'
import CategorySlide from '../CategorySlide/CategorySlide'
export default function Home() {

    useEffect(() => { }, [])
    return <>
        <div>
            <MainSlide />
            <CategorySlide />
            <Products />

        </div>
    </>
}
