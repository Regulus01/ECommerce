import Card from "../../components/Card"
import styles from "./Home.module.css"

class Produto {

  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
    this. classificacao = 5
  }
}

const Home = () => {
  const produto = new Produto("https://arquivosprojetomarketplace.s3.us-east-2.amazonaws.com/Produto/caixa-1.png", "Playstation 5", 2500);
  var lista = [produto]
  return (
    <div>

      <div>

        { lista.map((produto) => (<Card product={produto} />)) }
      </div>

    </div>

  )
}

export default Home