import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import "./CategorySlider.css"
import { Link } from 'react-router-dom'

const CategorySlider = ({categories}) => {

  return (

<div className='container-category-slider'>
<h2 className = "text-categories"style={{color: 'black'}}>Categorias</h2>
    <div className='container-swiper active'>
       <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={30} 
        slidesPerView={2}
        loop={true}
        breakpoints={{
          760: {
            slidesPerView : 5
          },
          470 : {
            slidesPerView : 3
          }

        }}

      >
        {
            categories.map(category =>{
                return(
                <SwiperSlide key={category.id}>
                    <Link to= {`/products/${category.name.toLowerCase()}`}>
                    <div className= "categories">
                        <img src={`/src/assets/images/${category.image}`} alt="" />
                        <h3>{category.name}</h3>
                    </div> </Link>
                </SwiperSlide>
            )})}
      </Swiper>
    </div>
    </div>
  )
}

export default CategorySlider
