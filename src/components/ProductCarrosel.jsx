import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './ProductCarrosel.module.css'
import Card from './Card'
import { Link } from 'react-router-dom'

const ProductCarrosel = ({ produtos }) => {
    return (
        <>
            <Swiper className={styles.swiperContainer}
                modules={[Navigation, Pagination]}
                slidesPerView={5}
                navigation
                pagination>
                {produtos.map(produto => (
                    <SwiperSlide className={styles.swiperBase} key={produto.id}>
                        <div className={styles.swiperSlide}>  
                            <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${produto.id}`}>
                                <Card product={produto} />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ProductCarrosel