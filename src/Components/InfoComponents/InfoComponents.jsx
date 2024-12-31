import React from 'react';
import './InfoComponents.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const InfoComponents = () => {
  return (
    <div className="info-container">
      <div className="informacion">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 10000 }}
          slidesPerView={1}
          spaceBetween={20} 
          loop={true}
          breakpoints={{
            800:{
              slidesPerView : 2
            },
            1000:{
              slidesPerView : 3
            }
          }}
        >
          <SwiperSlide>
            <div className="info">
              <div className="icon-info">
                <i className="bi bi-mailbox-flag"></i>
              </div>
              <p>
                <h3>ENVIAMOS TU PEDIDO</h3>
                Envios a todo el país
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="info">
              <div className="icon-info">
                <i className="bi bi-credit-card"></i>
              </div>
              <p>
                <h3>MEDIOS DE PAGO</h3>
                Efectivo - Transferencia - Tarjetas
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="info">
              <div className="icon-info">
                <i className="bi bi-whatsapp"></i>
              </div>
              <p>
                <h3>¿CONSULTAS?</h3>
                Comunicate con nosotros
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default InfoComponents;