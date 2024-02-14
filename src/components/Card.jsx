import { FaStar } from 'react-icons/fa'
import styles from './Card.module.css'


const Card = ({ product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.image} />
            </div>
            <div className={styles.infos}>
                {[...Array(product.classificacao)].map((_, index) => (
                    <FaStar key={index} color='#f2c832' />
                ))}
                <h2>{product.name}</h2>
                <h2>R$ {product.price}</h2>
            </div>
        </div>
    )
}

export default Card