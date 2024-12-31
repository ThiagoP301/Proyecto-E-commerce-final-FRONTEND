import React from 'react'
import { useParams } from 'react-router-dom';

const ProductsSearch = ({products}) => {
    const {name} = useParams()
    
    const [filteredProducts, setFilteredProducts] = useState(products);

  
    const handleSearch = (search) => {
      if (search === "") {
        setFilteredProducts(products)
      } else {
        const filtered = products.filter(product =>
          product.name?.includes(search)
        )
        setFilteredProducts(filtered)}}

        
  return (
    <div className='list-products'>
       <div className='container-products'>
        {filteredProducts.map(producto => (
          <ProductCard key={producto.id} product={producto} />
        ))}
         </div>
    </div>
  )
}

export default ProductsSearch
