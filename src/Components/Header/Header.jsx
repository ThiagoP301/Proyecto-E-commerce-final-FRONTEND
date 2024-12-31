import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import ProductSearch from "../ProductSearch/ProductSearch"
import IconUser from '../IconUser/IconUser'

const Header = ({products}) => {

const [user, setUser]= useState(null)
const [isModalOpen, setIsModalOpen] = useState(false)
const [clicked, setClicked] = useState(false)

const handleClick = () =>{
  if (clicked) {
    document.body.classList.remove('modal-open'); 
} else {
    document.body.classList.add('modal-open');
}
setClicked(!clicked)
}

const openModal = () =>{
  document.body.classList.add('modal-open')
  setIsModalOpen(true)
} 
const closeModal = () =>{
   document.body.classList.remove('modal-open')
  setIsModalOpen(false)
} 


useEffect(() => {

  const token = sessionStorage.getItem('access-token');
  const username = sessionStorage.getItem('user-name');

  if (token && username) {
    setUser({ username });  
  } else {
    setUser(null);  
  }
}, []);






  return (
    <div className='navbar'>
      <Link to={"/"} >
      <div className='logo' >
          <h1 style={{color : "red"}}>            
            TC
          </h1> 
          <h2 style={{color : "white"}}>
            COMPETICION
          </h2>
      </div>
      </Link>
      <div className='products-search'>
          <ProductSearch products={products} isOpen={isModalOpen} onClose={closeModal}/>
        </div>

      <div className='container-nav'>
      <button className="button-search enlace " onClick={openModal}><i class="bi bi-search"></i></button>

      <a href="/cart" className='enlace' >
      <i class="bi bi-cart2" style={{fontSize : "25px", color : "white"}}></i></a>

      {user ? (
    <IconUser/>
) : (
  <>
  <div className={`nav-toggle ${clicked ? "active" : ""}`}>
  <button onClick={handleClick}>
      <i className="bi bi-list"></i>
  </button>
</div>
    <div className={`nav-items ${clicked ? "active" : ""}`}>
        <div>
            <a className='enlace' href="/login">Iniciar Sesión</a>
        </div>
        <div>
            <a className='enlace' href="/register">Registrarse</a>
        </div>
    </div>
    </>
)}


      
        </div>
    </div>
 )
}

export default Header

 