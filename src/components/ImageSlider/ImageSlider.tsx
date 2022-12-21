import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { ImageItem, ImagesContainer } from './ImageSlider.elements';

interface PhotoCardInterface {
    images: string[]
}

const ImageSlider = ({images}: PhotoCardInterface) => {
  return (
    <ImagesContainer>
        <Swiper 
            slidesPerView={1} 
            spaceBetween={5} 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            pagination={{ clickable: true }}
        >
            {images.map((img) => {
                return(
                    <SwiperSlide>
                        <ImageItem src={img} alt='image' />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </ImagesContainer>
  )
}

export default ImageSlider