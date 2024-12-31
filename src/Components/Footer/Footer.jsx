import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = ({categories}) =>{
  const whatsappNumber = "5491112345678"
  const message = "Hola, estoy interesado en tus productos"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
  <footer>
    <div className='container-footer'>
      <div className='elements-footer'> 
    <div className='categories-footer'>
      <h3>CATEGORIAS</h3>
      {
       categories.map(category =>{
                return(
                    <Link to= {`/products/${category.name.toLowerCase()}`} >
                      <span>{category.name}</span>
                      </Link>
        )})}
        
</div>
<div className='contact-footer'>
    <h3>CONTACTÁNOS</h3>
    <p>
    <span><a href={whatsappLink}> Whatsapp</a></span>
    +1543454012465
    </p>
    <p>
      <span>Email</span>
      Tc.competicion@tccompeticion.com
    </p>
    <p>
      <span>Telefono</span>
      0800-123-4567
    </p>
    </div>
    </div>
</div>
    <div className='logo-footer'>
    <h2>Tc <span>Competicion</span></h2>
    <p>2024 ©</p>
  </div>
 </footer>
)}

export default Footer
