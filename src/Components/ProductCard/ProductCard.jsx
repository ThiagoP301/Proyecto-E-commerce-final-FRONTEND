import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import { addToCart, getCart, removeFromCart } from '../../api/cart'

const ProductCard = ({product}) => {
  const [inCart, setInCart] = useState(false)

  const handleAdd = async (productId) => {
    try {
      await addToCart(productId, 1);
    } catch (error) {
      console.error("Error al agregar o eliminar el producto del carrito", error);
    }
  };

  const formatter = new  Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  

  return (
    <>
        {
            <div className='product-card'>
            <Link to = {`/product-detail/${product._id}`} >
            <img src={product.image} alt=""/>
            <h3>{product.name}</h3>
            </Link>
            <div className='product-price'>
            <span>{formatter.format(product.price)}</span>
            </div>
            <button className='button-cart' onClick={() => handleAdd(product._id)}> <i className={`bi ${inCart ? "bi bi-cart-check" : "bi-cart-plus"} icon-change`}></i></button>
            <p className='product-description'>{product.description}</p>
            </div>
            
           
          }

          </>
  )
}
export default ProductCard
