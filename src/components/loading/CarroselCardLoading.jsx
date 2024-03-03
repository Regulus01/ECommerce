import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './CarroselCardLoading.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CarroselCardLoading = () => {
    return (
        <>
            <Swiper className={styles.swiperContainer}
                modules={[Navigation, Pagination]}
                slidesPerView={5}
                navigation
                pagination>
                <div className={styles.swiperSlide}>
                    <SwiperSlide><Skeleton height={300} width={220} borderRadius={10} /> </SwiperSlide>
                    <SwiperSlide><Skeleton height={300} width={220} borderRadius={10} /> </SwiperSlide>
                    <SwiperSlide><Skeleton height={300} width={220} borderRadius={10} /> </SwiperSlide>
                    <SwiperSlide><Skeleton height={300} width={220} borderRadius={10} /> </SwiperSlide>
                    <SwiperSlide><Skeleton height={300} width={220} borderRadius={10} /> </SwiperSlide>
                    <SwiperSlide><Skeleton height={300} width={220} borderRadius={10} /> </SwiperSlide>
                </div>
            </Swiper>
        </>)
}

export default CarroselCardLoading