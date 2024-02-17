import Card from "../../components/Card"
import Carrosel from "../../components/SlideCarrosel";
import styles from "./Home.module.css"

//temporario 
import pink from "../../assets/pink.png"
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"

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
  var lista = [produto]
  
  const slides = [photo1, photo2, pink]

  return (
    <div>
      <div >
        <Carrosel slides={ slides }></Carrosel>
      </div>
      
      <div className={styles.divStyles}>
        {lista.map((produto) => (<Card product={produto} />))}
      </div>



    </div>

  )
}

export default Home