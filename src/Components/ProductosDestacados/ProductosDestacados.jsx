import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import "./ProductosDestacados.css"

const ProductosDestacados = ({products}) => {
 console.log(products)

    const productosDestacados = products.filter(product => product.rating > 4.6)

  return (
    <div className='container-productos-destacados'>
        <h3>
            NUESTROS PRODUCTOS DESTACADOS
        </h3>
    <div className='productos-destacados'> 
      <Swiper className='productos'
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              spaceBetween={45} 
              loop={true} 
              breakpoints={{
                600 : {
                  slidesPerView : 2
                },
                900 : {
                  slidesPerView: 3
                },
                1260 : {
                  slidesPerView: 4
                },
                1400: {
                  slidesPerView: 5,
                }
              }}
      >
      {
            productosDestacados.map(producto =>{
                return(
                    <div >
                    <SwiperSlide key={producto.id} >
                        <ProductCard   product={producto}/>
                    </SwiperSlide>
                    </div>
                )})}
      </Swiper>
    </div>
    </div>
  )
}

export default ProductosDestacados
