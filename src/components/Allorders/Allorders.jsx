import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Allorders() {
    const [userOreders, setUserOreders] = useState(0)

    function getUserOrder(cartId) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`)
            .then((response) =>{
                setUserOreders(response.data)
                console.log(response)} 
            ).catch((error) => console.log(error))
    }
    useEffect(() => { getUserOrder("67d992adab0c1bac03397db1") }, [])
    return <>
    
    
    </>
}
