import Carrosel from "../../components/SlideCarrosel";

//CSS
import styles from "./Home.module.css"

//temporario 
import pink from "../../assets/pink.png"
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import ProductCarrosel from "../../components/ProductCarrosel";

const Home = () => {
  const slides = [photo1, photo2, pink]

  return (
    <div className={styles.home}>
      <div >
        <Carrosel slides={slides}></Carrosel>
      </div>

      <h1>Novidades</h1>
      <div className={styles.divStyles}>
        <ProductCarrosel route={'produto/Grid?tipoDaListagemViewModel=1'}> </ProductCarrosel>
      </div>

      <h1> Os Melhores Descontos </h1>
      <div className={styles.divStyles}>
        <ProductCarrosel route={'produto/Grid?tipoDaListagemViewModel=2'}> </ProductCarrosel>
      </div>

      <h1> Mais visualizados </h1>
      <div className={styles.divStyles}>
        <ProductCarrosel route={'produto/Grid?tipoDaListagemViewModel=3'}> </ProductCarrosel>
      </div>

      <h1> Os mais vendidos </h1>
      <div className={styles.divStyles}>
        <ProductCarrosel route={'produto/Grid?tipoDaListagemViewModel=4'}> </ProductCarrosel>
      </div>
    </div>

  )
}

export default Home