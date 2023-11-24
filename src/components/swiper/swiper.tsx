import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


let swiper = () => {

    let slides: string[] = ["slide1", "slide2", "slide3", "slide4", "slide5", "slide6"];

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
            >
                {
                    slides.map((slide, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <img src={`./../src/assets/${slide}.jpg`}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default swiper;