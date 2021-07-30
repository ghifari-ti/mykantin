import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation,Pagination,Scrollbar,A11y} from "swiper/core"
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const ListPromo = ()=>{
    return (
        <>
            <div className="bg-blue-500">
                <Swiper
                    slidesPerView={3}
                    navigation
                    pagination={{
                        dynamicBullets: true
                    }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="m-3">
                            <img className="rounded" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="m-3">
                            <img className="rounded" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="m-3">
                            <img className="rounded" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="text-right mx-2 text-white pb-2">
                    Cek promo lainnya..
                </div>
            </div>
        </>
    )
}

export default ListPromo
