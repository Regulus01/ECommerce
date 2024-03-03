import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './ProductCarrosel.module.css'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import CarroselCardLoading from './loading/CarroselCardLoading'

const ProductCarrosel = ({ route }) => {
    const [produtos, SetProdutos] = useState(null);
    const { GetRequest, error, loading } = useFetch();

    useEffect(() => {
        const Grid = async () => {
            var response = await GetRequest(route);
            SetProdutos(response.data)
        };

        Grid();

    }, []);


    return (
        <>
            <Swiper className={styles.swiperContainer}
                modules={[Navigation, Pagination]}
                slidesPerView={5}
                navigation
                pagination>

                {loading && <div className={styles.divStyles}>
                    <CarroselCardLoading />
                </div>}

                {(!loading && !error) && <div className={styles.divStyles}>
                    {produtos.map(produto => (
                        <SwiperSlide className={styles.swiperBase} key={produto.id}>
                            <div className={styles.swiperSlide}>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product/${produto.id}`}>
                                    <Card product={produto} />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>}

                {error &&
                    <div>
                        <h1>
                            Produtos não encontrados
                        </h1>
                    </div>}

            </Swiper >
        </>
    );
}

export default ProductCarrosel