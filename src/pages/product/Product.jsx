import { useParams } from 'react-router-dom'
import styles from './Product.module.css'
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';

const Product = () => {
    const { GetRequest } = useFetch();
    const { id } = useParams(); // rota dinamica

    useEffect(() => {
        const produto = async () => {
            var response = await GetRequest(`produto/${id}`);
            console.log(response)
        };

        produto();

    }, []);


    return (
        <div className={styles.ProductContainer}>
            Product, {id}
        </div>
    )
}

export default Product