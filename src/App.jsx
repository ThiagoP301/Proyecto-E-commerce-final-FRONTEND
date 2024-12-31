
import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import CartScreen from "./Screens/CartScreen"
import Header from "./Components/Header/Header"
import 'bootstrap-icons/font/bootstrap-icons.css'
import ProductsScreen from "./Screens/ProductsScreen"
import ProductsCategory from "./Screens/ProductsCategory"
import ProductIDScreen from "./Screens/ProductIDScreen"
import Footer from "./Components/Footer/Footer"
import Whatsapp from "./Components/Whatsapp/Whatsapp"
import "./App.css"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import axios from "axios"
import ValidationWait from "./Screens/ValidationWait"
import ENVIROMENT from "./config/enviroment"



function App() {

  const [products, setProductos] = useState([]);

  useEffect(() =>{
    const fetchProducts = async() =>{
      try {
        const response = await axios.get(ENVIROMENT.URL_VITE +"/api/products",)
        console.log("Este es el listado de productos", response.data)
        return setProductos(response.data)
      } catch (error) {
        console.log("No se ha podido obtener la lista de produtos",error)
      }
    }
    fetchProducts()
  }, [])

  
 
  const [categories, setCategories] = useState([])

  useEffect( () => {
      fetch("/Categories.json")
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  },[])


  return (

 <>
        <div className="app-container">
  <Header products={products}/>
            <ScrollToTop/>
            <Routes>
                <Route path = "/" element={<HomeScreen products={products} categories ={categories} />}/>
                <Route  path = "/login" element={<LoginScreen/>}/>
                <Route  path = "/register" element={<RegisterScreen/>}/>
                <Route  path = "/cart" element={<CartScreen categories={categories} product={products}/>}/>
                <Route path="/products" element={<ProductsScreen products={products} categories={categories}/>}/>
                <Route path="/products/:category" element={<ProductsCategory products={products} categories={categories}/>}/>
                <Route path="/product-detail/:productId" element={<ProductIDScreen products={products} categories={categories}/>}/>
                <Route path="/register/validate-email" element={<ValidationWait/>}/>
            </Routes>
      <Footer categories={categories}/>
      <Whatsapp></Whatsapp>
       </div>
      
    
   </>
) }

export default App
