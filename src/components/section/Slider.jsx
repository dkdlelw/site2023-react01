import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const slider = (props) => {
    return (
        <section id="sliderSection" className={props.attr}>
            <div className="slider__inner">
                <h2 className="blind">이미지 슬라이드</h2>
                <div className="slider__img">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Navigation, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="slider s1 container">
                                <div className="text">
                                    <div className="slider">
                                        <h3>
                                            sience
                                            <br />
                                            fiction
                                        </h3>
                                        <p>
                                            상상력과 과학의 발전을 통해 미래를
                                            탐구하고
                                            <br />
                                            경험과 사회적, 윤리적 질문을
                                            제기하는 공상과학에 대하여
                                        </p>
                                        <Link
                                            to="/"
                                            className="more button-blue "
                                        >
                                            더보기
                                        </Link>
                                    </div>
                                </div>
                                <div className="img" aria-label="hidden">
                                    <img
                                        src="./assets/images/slider/sliderIcon1.png"
                                        alt="이미지1"
                                    />
                                    <img
                                        src="./assets/images/slider/sliderIcon2.png"
                                        alt="이미지2"
                                    />
                                    <img
                                        src="./assets/images/slider/sliderIcon3.png"
                                        alt="이미지3"
                                    />
                                </div>
                                <div className="circle" aria-label="hidden">
                                    <span className="circle c1"></span>
                                    <span className="circle c2"></span>
                                    <span className="circle c3"></span>
                                    <span className="circle c4"></span>
                                    <span className="circle c5"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider s1 container">
                                <div className="text">
                                    <div className="slider">
                                        <h3>
                                            sience
                                            <br />
                                            fiction
                                        </h3>
                                        <p>
                                            상상력과 과학의 발전을 통해 미래를
                                            탐구하고
                                            <br />
                                            경험과 사회적, 윤리적 질문을
                                            제기하는 공상과학에 대하여
                                        </p>
                                        <Link
                                            to="/"
                                            className="more button-blue "
                                        >
                                            더보기
                                        </Link>
                                    </div>
                                </div>
                                <div className="img" aria-label="hidden">
                                    <img
                                        src="./assets/images/slider/sliderIcon1.png"
                                        alt="이미지1"
                                    />
                                    <img
                                        src="./assets/images/slider/sliderIcon2.png"
                                        alt="이미지2"
                                    />
                                    <img
                                        src="./assets/images/slider/sliderIcon3.png"
                                        alt="이미지3"
                                    />
                                </div>
                                <div className="circle" aria-label="hidden">
                                    <span className="circle c1"></span>
                                    <span className="circle c2"></span>
                                    <span className="circle c3"></span>
                                    <span className="circle c4"></span>
                                    <span className="circle c5"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider s1 container">
                                <div className="text">
                                    <div className="slider">
                                        <h3>
                                            sience
                                            <br />
                                            fiction
                                        </h3>
                                        <p>
                                            상상력과 과학의 발전을 통해 미래를
                                            탐구하고
                                            <br />
                                            경험과 사회적, 윤리적 질문을
                                            제기하는 공상과학에 대하여
                                        </p>
                                        <Link
                                            to="/"
                                            className="more button-blue "
                                        >
                                            더보기
                                        </Link>
                                    </div>
                                </div>
                                <div className="img" aria-label="hidden">
                                    <img
                                        src="./assets/images/slider/sliderIcon1.png"
                                        alt="이미지1"
                                    />
                                    <img
                                        src="./assets/images/slider/sliderIcon2.png"
                                        alt="이미지2"
                                    />
                                    <img
                                        src="./assets/images/slider/sliderIcon3.png"
                                        alt="이미지3"
                                    />
                                </div>
                                <div className="circle" aria-label="hidden">
                                    <span className="circle c1"></span>
                                    <span className="circle c2"></span>
                                    <span className="circle c3"></span>
                                    <span className="circle c4"></span>
                                    <span className="circle c5"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default slider;
