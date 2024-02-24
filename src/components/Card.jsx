import { FaStar } from 'react-icons/fa'
import styles from './Card.module.css'


const Card = ({ product }) => {

    function limitarPalavras(texto, limite) {
        const palavras = texto.split(' ');
        if (palavras.length > limite) {
          return palavras.slice(0, limite).join(' ') + '...';
        }
        return texto;
      }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.fotoDeCapa} />
            </div>
            <div className={styles.infos}>
                {[...Array(product.classificacao)].map((_, index) => (
                    <FaStar key={index} color='#f2c832' />
                ))}
                <h3>{limitarPalavras(product.nome, 3)}</h3>
                <h2>R$ {product.preco}</h2>
            </div>
        </div>
    )
}

export default Card