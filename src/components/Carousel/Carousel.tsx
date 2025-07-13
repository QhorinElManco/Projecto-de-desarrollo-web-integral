import type {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from 'swiper/modules';

import './Carousel.css';

interface CarouselProps {
    images: string[]
}

export const Carousel: FC<CarouselProps> = ({images}) => {
    return (
        <div className={"carousel__root"}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    type: 'fraction'
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {images.map(img => (
                    <SwiperSlide key={img}>
                        <img alt={img} src={`/products/${img}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}