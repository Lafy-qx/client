import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../../styles/currentSwiper.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



type Props = {
    complexSwiper: String[]

}
export default function App({ complexSwiper }: Props) {


    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {complexSwiper?.map((item: any) => {
                    return (
                        <>
                        <p>{item}</p>
                            <SwiperSlide>
                                <img src={item} />
                            </SwiperSlide>
                        </>

                    )

                })}
            </Swiper>
        </>
    );
}
