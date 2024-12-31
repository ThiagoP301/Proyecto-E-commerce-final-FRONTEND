import React from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'
import "./ProductsScreen.css"
import { Link } from 'react-router-dom'



const ProductsScreen = ({products, categories}) => {

  return (
    <>
    <div className='lista-productos-container'>
      <div className='list-category'>
    <h3>CATEGORIAS</h3>
      <div className='categorias'>{
       categories.map(category =>{
                return(
                    <Link key={category.id} to= {`/products/${category.name.toLowerCase()}`}>
                      <span>{category.name}</span>
                      </Link>
        )})}
        </div>
        </div>
        <div className='list-products'>
          <div className='container-products'>
        {
       products.map(product =>{
                return(
       <ProductCard product={product} />
        )})}
           </div>
      </div>
    </div>
    </>
  )
}

export default ProductsScreen
