import React from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

const MovieImg = ({ movie }) => {
    return (
        <a href={`http://www.themoviedb.org/movie/${movie.id}`}>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
            />
        </a>
    );
};

const MovieSlider = ({ movies }) => {
    return (
        <div className="movie__slider">
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
                {movies.map((movie, index) => (
                    <SwiperSlide>
                        <MovieImg key={index} movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSlider;
