import React from 'react'
import ProductsScreen from './ProductsScreen'
import NavBar from '../Components/Header/Header'
import CategorySlider from '../Components/CategorySlider/CategorySlider'
import "./HomeScreen.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import Footer from '../Components/Footer/Footer'
import InfoComponents from '../Components/InfoComponents/InfoComponents'
import ProductosDestacados from '../Components/ProductosDestacados/ProductosDestacados'
import { Link } from 'react-router-dom'

const HomeScreen = ({categories, products}) => {
  return (
  <>
      <div className='img-page'>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 10000 }}
        slidesPerView={1}
        pagination={{ clickable: true }} 
      >
          <SwiperSlide>
          <img src="src\assets\images\portada1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="src\assets\images\portada2.jpg" alt="" />
          </SwiperSlide>
      </Swiper>
      </div>
      <div className='container-home'>
     <CategorySlider categories={categories}/>
     <ProductosDestacados products ={products}/>
      <div className='presentacion'>
        <h2>¿QUIENES SOMOS?</h2>
        <span>Nos especializamos en ofrecer repuestos de competición de alta calidad para vehículos. Con una pasión por la velocidad y la ingeniería de precisión, nuestra misión es proporcionar a nuestros clientes los mejores componentes para maximizar el rendimiento y la fiabilidad de sus coches en la pista.</span>
      </div>
      <div className='container-redes'>
          <h3>CONOCE MAS DE NOSOTROS EN NUESTRAS REDES</h3>
          <div className='redes'>
          <div className='red'>
          <a href="https://www.facebook.com/?locale=es_LA" target="_blank"
  rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
          </div>
          <div className='red'>
         <a href="https://www.instagram.com/" target="_blank"
  rel="noopener noreferrer"> <i class="bi bi-instagram"></i></a>
          </div>
          </div>
      </div>
      <div className='view-products'>
        <h3>DESCUBRI NUESTRA LINEA DE PRODUCTOS</h3>
        <Link to="/products"><button >Ver Productos</button></Link>
      </div>
      <InfoComponents/>
    </div>
    </>

  )
}

export default HomeScreen
