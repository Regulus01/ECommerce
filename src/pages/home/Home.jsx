import Carrosel from "../../components/SlideCarrosel";

//CSS
import styles from "./Home.module.css"

//temporario 
import pink from "../../assets/pink.png"
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import ProductCarrosel from "../../components/ProductCarrosel";

class Produto {

  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.classificacao = 5
  }
}

const Home = () => {
  const produto = new Produto("https://arquivosprojetomarketplace.s3.us-east-2.amazonaws.com/Produto/caixa-1.png", "Playstation 5", 2500);
  const listaProd = [produto, produto, produto, produto, produto, produto, produto, produto]

  const slides = [photo1, photo2, pink]

  return (
    <div className={styles.home}>
      <div >
        <Carrosel slides={slides}></Carrosel>
      </div>

      <h1>Ofertas do dia</h1>

      <div className={styles.divStyles}>
        <ProductCarrosel produtos={listaProd}> </ProductCarrosel>
      </div>

      <h1> As melhores promoções </h1>

      <div className={styles.divStyles}>
        <ProductCarrosel produtos={listaProd}> </ProductCarrosel>
      </div>

      <h1> Produtos mais visualizados </h1>
      <div className={styles.divStyles}>
        <ProductCarrosel produtos={listaProd}> </ProductCarrosel>
      </div>

      <h1> Os mais vendidos </h1>
      <div className={styles.divStyles}>
        <ProductCarrosel produtos={listaProd}> </ProductCarrosel>
      </div>

      <h1> Melhores descontos </h1>
      <div className={styles.divStyles}>
        <ProductCarrosel produtos={listaProd}> </ProductCarrosel>
      </div>

    </div>

  )
}

export default Home