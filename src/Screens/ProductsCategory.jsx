import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard/ProductCard.jsx';

import "./ProductsCategory.css"
import "./ProductsScreen.css"


const ProductsCategory = ({products, categories }) => {
const {category} = useParams()
console.log("Categoría seleccionada:", category);

const filterProducts = products.filter(product => product.category === category)

console.log(filterProducts)


  return (
<>
    <div className='container-category'>
      <div className='container-tittle-category'>
         <span>Categoria:</span>
    <h2 className='tittle-category'>{category.toLocaleUpperCase()}</h2>
      </div>
   </div>
    <div className='lista-productos-container '>
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
  filterProducts.map(producto =>{
    return(
     
    <div>
  <ProductCard  product={producto}/>
    </div>
    
  )})}
  </div>
  </div>
</div>
    </>
  )
}

export default ProductsCategory
