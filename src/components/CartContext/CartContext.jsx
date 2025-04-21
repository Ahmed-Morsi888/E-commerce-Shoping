import axios from 'axios';
import { createContext, useState } from 'react'
import toast from 'react-hot-toast';
export let CartContext = createContext();
export default function CartContextProvider(props) {

    const [cartId, setCartId] = useState(0)
    let headers = {
        token: localStorage.getItem("userToken")
    }

    function getLogedCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
            { headers })
            .then((response) => {
                setCartId(response.data.cartId)
                return response
            })
            .catch((error) => console.log(error)
            )
    }
    function addProductToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            { productId },
            { headers })
            .then((response) => response)
            .catch((error) => console.log(error)
            )
    }
    function removeProductFromCart(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            { headers })
            .then((response) => response)
            .catch((error) => console.log(error)
            )
    }
    function removeProductFromwhashlist(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
            { headers })
            .then((response) => {
                response;
              
            }
            )
            .catch((error) => console.log(error)
            )
    }
    function clearCart() {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
            { headers })
            .then((response) => response)
            .catch((error) => console.log(error)
            )
    }
    function updateProductCount(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            { count: count },
            { headers })
            .then((response) => response)
            .catch((error) => console.log(error)
            )
    }
    function addProductToWashlist(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
            { productId },
            { headers })
            .then((response) => response)
            .catch((error) => console.log(error)
            )
    }
    function onlinePay(url, formvalues) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
            { shippingAddress: formvalues }
            , { headers })
    }


    return <CartContext.Provider value={{ onlinePay, removeProductFromwhashlist, addProductToWashlist, clearCart, getLogedCart, addProductToCart, removeProductFromCart, updateProductCount }} >
        {props.children}
    </CartContext.Provider>
}
