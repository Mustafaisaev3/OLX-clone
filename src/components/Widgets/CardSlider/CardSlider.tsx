import React, { useRef } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Card from '../../UI/Card/Card'
import { CardSliderContainer, CardSliderTitle, CardsContainer, CardCont, SliderButtons } from './CradSlider.elements'

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Colors from '../../../utils/css_variables/colors'
import ProductCard from '../../ProductCard/ProductCard'

interface CardSliderIterface { 
    title: string,
    data: any[]
}

const CardSlider = ({title, data}: CardSliderIterface) => {
  const swiperRef = useRef<any>();

  console.log(swiperRef.current)

  return (
    <CardSliderContainer>
        <CardSliderTitle>{title}</CardSliderTitle>
        <CardsContainer>
            <Swiper
                slidesPerView={5} 
                spaceBetween={20} 
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                {data && data.map((item) => {
                    return(
                        <SwiperSlide>
                            <ProductCard data={item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </CardsContainer>
        <SliderButtons>
            <SlArrowLeft size={30} color={Colors.text_main} onClick={() => swiperRef.current.slidePrev()} />
            <SlArrowRight size={30} color={Colors.text_main} onClick={() => swiperRef.current.slideNext()} />
        </SliderButtons>
    </CardSliderContainer>
  )
}

export default CardSlider