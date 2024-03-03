import Carrosel from "../../components/SlideCarrosel";

//CSS
import styles from "./Home.module.css"

//temporario 
import pink from "../../assets/pink.png"
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import ProductCarrosel from "../../components/ProductCarrosel";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import CardLoading from "../../components/loading/CarroselCardLoading";

const Home = () => {
  const { GetRequest } = useFetch();
  const [loadingGrid, setLoadingGrid] = useState(true);
  const [novidadesList, SetNovidadesList] = useState(null);
  const [maisVisualizadosList, SetMaisVisualizadosList] = useState(null);
  const [maisVendidos, SetMaisVendidosList] = useState(null);
  const [melhoresDescontosList, SetMelhoresDescontosList] = useState(null);

  useEffect(() => {

    const Grid = async () => {

      //Novidades
      var response = await GetRequest('produto/Grid?tipoDaListagemViewModel=1');
      SetNovidadesList(response.data)

      //MaisVisualizados
      response = await GetRequest('produto/Grid?tipoDaListagemViewModel=2');
      SetMaisVisualizadosList(response.data)

      //MaisVendidos
      response = await GetRequest('produto/Grid?tipoDaListagemViewModel=3');
      SetMaisVendidosList(response.data)

      //MelhoresDescontos
      response = await GetRequest('produto/Grid?tipoDaListagemViewModel=4');
      SetMelhoresDescontosList(response.data)

      setLoadingGrid(false)
    };

    Grid();

  }, []);

  const slides = [photo1, photo2, pink]

  return (
    <div className={styles.home}>
      <div >
        <Carrosel slides={slides}></Carrosel>
      </div>

      <h1>Novidades</h1>

      {loadingGrid ? (
        <div className={styles.divStyles}>
          <CardLoading > </CardLoading>
        </div>
      ) : (
        <div className={styles.divStyles}>
          <ProductCarrosel produtos={novidadesList}> </ProductCarrosel>
        </div>
      )}

      <h1> Os Melhores Descontos </h1>

      {loadingGrid ? (
        <div className={styles.divStyles}>
          <CardLoading > </CardLoading>
        </div>
      ) : (
        <div className={styles.divStyles}>
          <ProductCarrosel produtos={melhoresDescontosList}> </ProductCarrosel>
        </div>
      )}

      <h1> Mais visualizados </h1>
      {loadingGrid ? (
        <div className={styles.divStyles}>
          <CardLoading > </CardLoading>
        </div>
      ) : (
        <div className={styles.divStyles}>
          <ProductCarrosel produtos={maisVisualizadosList}> </ProductCarrosel>
        </div>
      )}

      <h1> Os mais vendidos </h1>

      {loadingGrid ? (
        <div className={styles.divStyles}>
          <CardLoading > </CardLoading>
        </div>
      ) : (
        <div className={styles.divStyles}>
          <ProductCarrosel produtos={maisVendidos}> </ProductCarrosel>
        </div>
      )}

    </div>

  )
}

export default Home