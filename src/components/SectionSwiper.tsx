import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProductStore } from '../store/useProductStore';
import { Link } from 'react-router-dom';
import "swiper/css"
import { ProductItem } from './ProductItem';

interface Props {
    category: string;
    count: number;
}
export const SectionSwiper = ({ category, count }: Props) => {
    const { onItemCategory } = useProductStore();
    const cateItems = onItemCategory(category);
    return (
        <div>
            <Swiper
                spaceBetween={40}
                slidesPerView={count}>

                {cateItems.map((cate, id) => (
                    <SwiperSlide>
                        <Link to={``}>
                            <ProductItem sendItem={cate} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
