import React from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

const UnsplashImg = ({ image }) => {
    return (
        <a href={`https://unsplash.com/photos/${image.id}`}>
            <img src={image.urls.regular} alt={image.alt_description} />
        </a>
    );
};

const UnsplashSlider = ({ images }) => {
    return (
        <div className="unsplash__slider">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // coverflowEffect={}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {images.map((image, index) => (
                    <SwiperSlide>
                        <UnsplashImg key={index} image={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UnsplashSlider;
