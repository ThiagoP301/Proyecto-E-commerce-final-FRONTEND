import React, { useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../api/cart'

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = async () => {
    try {
      const isLoggedIn = sessionStorage.getItem("access-token") ? true : false
      if (!isLoggedIn) {
        alert("¡Debes iniciar sesión para agregar productos al carrito!");
        navigate("/login");
        return;
      }
      if (!inCart) {  
        await addToCart(product._id)
        setInCart(true)
      } else {
        await removeFromCart(product._id)
        setInCart(false)
      }
    } catch (error) {
      console.error('Error al agregar o eliminar el producto del carrito', error)
    }
  };

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  return (
    <div className='product-card'>
      <Link to={`/product-detail/${product._id}`}>
        <img src={product.image || '/default-image.jpg'} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <div className='product-price'>
        <span>{formatter.format(product.price)}</span>
      </div>
      <button className='button-cart' onClick={toggleCart}>
        <i className={`bi ${inCart ? 'bi-cart-check' : 'bi-cart-plus'} icon-change`}></i>
      </button>
      <p className='product-description'>{product.description}</p>
    </div>
  )
}

export default ProductCard;
