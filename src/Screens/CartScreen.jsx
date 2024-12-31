import React, { useEffect, useState } from 'react'
import "./CartScreen.css"
import { Link, useNavigate } from 'react-router-dom'
import {deleteCart, getCart, removeFromCart, updateQuantity } from '../api/cart'


const CartScreen = () => {

  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);

  const handleGetCart = async () => {
    try {
    const response = await getCart()
    console.log("Carrito de productos", response)
    setCartItems(response.items)


    } catch (error) {
      console.log("Error al obtener el carrito", error)
    }}

    useEffect(() => {
      handleGetCart()
    }, [])
    
    const handleUpdateQuantity = async (productId, newQuantity)=>{

      try {
        await updateQuantity(productId, newQuantity)
        console.log("Se ha actualizado la cantidad del producto:", productId)
        setCartItems((prevItems) =>   
          prevItems.map((item) => 
          item.productId === productId 
            ? { ...item, quantity: newQuantity } 
            : item 
        ))
        handleGetCart()
      } catch (error) {
        console.log("No se ha podido actualizar la cantidad del producto", error)
      }
       
    }

    const handleRemove = async (productId) =>{
      try {
       const response = await removeFromCart(productId)

       if (response.cart) {
        setCartItems(response.cart.items)}
      } catch (error) {
        console.log("No se ha podido eliminar el producto", error)
      }
    }

    const handleBuy = async () =>{
      
      try {
            if (cartItems.length > 0 ){
        alert("Compra realizada con exito")
        await deleteCart()
        navigate("/")
      }else
      alert("Debes tener productos en tu carrito para realizar una compra")
    }catch (error) {
        console.log("No se ha podido realizar la compra", error)
    }}
  

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const totalProducts = (cartItems || []).reduce((total, item) => total + (item.quantity || 0), 0)

  const calculatedTotal = (cartItems || []).reduce(
    (acc, item) => acc + (item.productId?.price || 0) * (item.quantity || 0),
    0
  );

  return (
  <div className='container-view-cart'>
    <div className='container-cart'>
      <h1>Tu carrito</h1>
      <div className='container-carrito'>
        <div className='carrito'>
          <ul className='items'>
       {cartItems && cartItems.length > 0?(cartItems.map((product) =>{
              return( 
                  <div className="item-carrito" key={product._id}>
                     <img src={product.productId.image} alt="" />
                    <div className='name'>
                      <span>{product.productId.name}</span> 
                    </div>
                    <div className='item-price'>
                      <span>{formatter.format(product.productId.price)}</span>
                    </div>
                    <div className='quantity'>
                      <div>
                         <button onClick={() => handleUpdateQuantity(product.productId._id, product.quantity - 1)} disabled={product.quantity <= 1}>-</button>
                      <span>{product.quantity}</span>
                      <button  onClick={() => handleUpdateQuantity(product.productId._id, product.quantity + 1)} >+</button>
                      </div>
                     <div>
                      <button className='delete' onClick={() => handleRemove(product.productId._id)}><i class="bi bi-trash"></i></button>
                     </div>
                      
                    </div>
              </div>
              )
            })
) : (<div className='no-products'>
  <p>No hay productos en tu carrito.</p>
        <Link to="/products"><button>VER PRODUCTOS</button></Link>
  </div>)}

           
          </ul>
        </div>
        <div className='resumen'>
          <div className='h3-resumen'>
          <h3>
            Resumen de compra
          </h3>
          </div>
          <div className='total-products'> 
            <span>Productos({totalProducts})</span>
          </div>
          <div className='total-price'>
            <div><span>Total:</span></div>
            <div><span>{formatter.format(calculatedTotal)}</span>
            </div>
          </div>

            <button onClick ={handleBuy} className='comprar'>Comprar Productos</button>
          
        </div>
      </div>
    </div>
  </div>
    
  )
}
export default CartScreen
