import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { addToCart, getCart, removeFromCart } from '../../api/cart'

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);

  // Sincroniza el estado `inCart` al montar el componente
  useEffect(() => {
    const checkCart = async () => {
      try {
        const cart = await getCart()
        const productInCart = cart.some((item) => item.productId === product._id)
        setInCart(productInCart)
      } catch (error) {
        console.error('Error al verificar el carrito', error);
      }
    };

    checkCart();
  }, [product._id]);

  const toggleCart = async () => {
    try {
      if (inCart) {
        await removeFromCart(product._id)
        setInCart(false)
      } else {
        await addToCart(product._id, 1)
        setInCart(true)
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