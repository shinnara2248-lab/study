import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"

export const HeroSwiper = () => {
    // 슬라이더 정보를 저장할 배열
    const slides = [
        { imgSrc: "/images/main_slider_01.jpg", imgAlt: "slider1" },
        { imgSrc: "/images/main_slider_02.jpg", imgAlt: "slider2" },
        { imgSrc: "/images/main_slider_03.jpg", imgAlt: "slider3" },
        { imgSrc: "/images/main_slider_04.jpg", imgAlt: "slider4" },
        { imgSrc: "/images/main_slider_05.jpg", imgAlt: "slider5" }
    ]
    return (
        <div className='hero-wrap'>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 3000
                }}
                navigation
                loop={true}
            >
                {slides.map((slide, id) => (
                    <SwiperSlide key={id}>
                        <img src={slide.imgSrc} alt={slide.imgAlt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}