import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './SlideCarrosel.module.css'


const Carrosel = ({ slides }) => {
    return (
        <>
            <Swiper className={styles.swiperContainer}
            modules={[Navigation, Pagination, Autoplay]}
            loop
            navigation
            pagination
            autoplay= {{delay: 5000}}>
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt="" />
                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    );
}

export default Carrosel