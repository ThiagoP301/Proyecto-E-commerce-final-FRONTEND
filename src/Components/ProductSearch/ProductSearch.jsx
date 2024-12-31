import React, { useEffect, useState } from 'react'
import "./ProductSearch.css"
import {useNavigate } from 'react-router-dom'

const ProductSearch = ({products, isOpen, onClose}) => {
    const [search, setSearch] = useState("")
    const [resultados, setResultados] = useState([])
    const navigate = useNavigate([])

    const handleSearchChange = (e) =>{
       const busqueda = e.target.value || ""
       setSearch(busqueda)

       if(busqueda.trim() === ""){
        setSearch("")
        setResultados([])
       }else{
        const resultFilter = products.filter(product =>{
         return product.name.toLowerCase().includes(busqueda.toLowerCase())
        
        }) 
      setResultados(resultFilter)    
      console.log(resultFilter)}  
   
    }

    const handleClick = (id) =>{
      navigate(`/product-detail/${id}`)
      setSearch("")
      setResultados([])
      onClose()
    }


    if(!isOpen) return null

    return (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <button className='close-button' onClick={onClose}><i class="bi bi-x"></i></button>
        <div className="search">
          <h2>¿Qué estás buscando?</h2>
          <div className="form-search">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={search}
              onChange={handleSearchChange}
            />
            {search && typeof search === "string" && search.trim() !== "" && resultados.length > 0 && (
              <ul className="resultados">
                {resultados.map((producto) => (
                  <li
                    key={producto.id}
                    onClick={() => handleClick(producto.id)}
                    className="resultado-item"
                  >
                    <div className="item">
                      <div className='image-product-search'>
                        <img src={producto.image} alt={producto.name} />
                      </div>
                      <div className="item-description">
                        <div className='name-product-search'>
                          <span>{producto.name}</span>
                        </div>
                        <div className='price-product-search'>
                          <span className="price">$ {producto.price}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {search.trim() !== "" && resultados.length === 0 && (
              <div className="resultados">
                <p className="no-resultados">No se encontró el producto</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      );
  }    

export default ProductSearch
