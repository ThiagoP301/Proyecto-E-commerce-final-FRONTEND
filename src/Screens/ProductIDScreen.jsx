import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductIDScreen.css"
import axios from 'axios'
import { addToCart } from '../api/cart'
import ENVIROMENT from '../config/enviroment'

const ProductIDScreen = () => {
    const {productId}  = useParams()

    console.log(productId)

    const [product, setProduct] = useState([])

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get( ENVIROMENT.URL_VITE + `/api/products/${productId}`);
          console.log("este es", response.data)
          setProduct(response.data);
        } catch (error) {
          console.error('Error al obtener el producto:', error);
        }
      }
      fetchProduct();
    }, [productId]);


      const handleAddToCart = async () => {
        try {

          const isLoggedIn = sessionStorage.getItem("access-token") ? true : false
          if (!isLoggedIn) {
            alert("¡Debes iniciar sesión para agregar productos al carrito!");
            navigate("/login");
            return;
          }

            const updatedCart = await addToCart(product._id, 1); 
            console.log("Producto agregado al carrito:", updatedCart);
          } catch (error) {
            if (error.response) {
    
                console.error("Error al agregar el producto al carrito:", error.response.data.message);
            } else {
    
                console.error("Error inesperado:", error.message);
            }
        }
    }

       if (!product) {
      return <p>Cargando producto...</p>;
    }

  return (
    <>
    <div className='product'>
      <div className='image-container'>
        <img src={product.image} alt="" />
      </div>
      <div className='detail'>
      <h1>{product.name}</h1>
      <h2>$ {product.price}</h2>
      <button className="button-add-cart" onClick={handleAddToCart} >AGREGAR AL CARRITO</button>
      <div className='description'>
        <span>DESCRIPCION</span>
        <h1>- TC COMPETICION -</h1> 
          <h2>{product.name}</h2>
          {product.description}
           <p>  Somos TC Competicion ! - Repuestos, partes y accesorios para tu proyecto.</p>
           <p>- De donde somos ? - De Entre Rios y realizamos envios a todo el país por encomienda o Correo.</p> 
            <p>- Como abonar ? - Podes abonar mediante tarjeta de credito, debito, efectivo y/o transferencia.</p>
           <p>- Tenes preguntas respecto al producto ? - No dudes en consultarnos !  Envianos un mensaje al 34541 23456 y habla con nosotros.</p> 

      </div>
      </div>
    </div>
    </>
  )
}

export default ProductIDScreen
