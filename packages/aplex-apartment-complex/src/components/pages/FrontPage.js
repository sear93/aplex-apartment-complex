import React from 'react';
import {connect} from "frontity";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

const FrontPage = (props) => {

    const data = props.state.source.get(props.state.router.link);

    return (
        <>
            <h1>It's Custom Front Page</h1>

            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
};

export default connect(FrontPage)
