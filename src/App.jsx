import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Categories from "./components/Categories/Categories";
import Layout from "./components/Layout/Layout";
import UserContextProvider from "./components/Context/UserContext";
import CartContextProvider from "./components/CartContext/CartContext";
import { Toaster } from 'react-hot-toast';
import WhashList from "./components/WhashList/WhashList";
import CategoryDetails from "./components/CategoryDetails/CategoryDetails";
import ProtectSite from "./components/ProtectSite/ProtectSite";
import OnlinePay from "./components/OnlinePay/OnlinePay";
import Allorders from "./components/Allorders/Allorders";
 import Brands from "./components/Brands/Brands";
import SpecificBrand from "./components/SpecificBrand/SpecificBrand";


let routing = createBrowserRouter([{
  path: "", element: <Layout />, children: [
    { index: true, element: <ProtectSite><Home /></ProtectSite> },
    { path: "cart", element: <ProtectSite><Cart /> </ProtectSite> },
    { path: "products", element: <ProtectSite><Products /> </ProtectSite> },
    { path: "productdetails/:id/:category", element: <ProtectSite><ProductDetails /></ProtectSite> },
    { path: "categories", element: <ProtectSite> <Categories /> </ProtectSite> },
    { path: "whashlist", element: <ProtectSite><WhashList /></ProtectSite> },
    { path: "categorydetails/:id", element: <ProtectSite> <CategoryDetails /> </ProtectSite> },
     { path: "brands", element: <ProtectSite> <Brands /> </ProtectSite> },
     { path: "specificbrands/:id", element: <ProtectSite> <SpecificBrand /> </ProtectSite> },
    { path: "onlinepay", element: <ProtectSite> <OnlinePay /> </ProtectSite> },
    { path: "allorders", element: <ProtectSite> <Allorders /> </ProtectSite> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
    { path: "*", element: <Notfound /> },
  ]
}])



function App() {

  return <CartContextProvider>
    <UserContextProvider>
      <RouterProvider router={routing}></RouterProvider>
      <Toaster />
    </UserContextProvider>
  </CartContextProvider>


}

export default App
