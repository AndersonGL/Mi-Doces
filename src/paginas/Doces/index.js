import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import './style.css';

export default function Doces() {

  return (
    <div>

      <Header />

      <main>
        <section className="secao-banner-servicos">
          <div className="titulo-banner-servicos">
            <h1>NOSSOS DOCES</h1>
          </div>
        </section>

        <section className="limitar-secao secao-servicos">



          <div className="container-servicos">
            <div className="box-servico">
              <img src="assets/bolinho-de-chuva.png" alt="bolinho" />
              <h3>Bolinho de chuva com canela ou leite ninho</h3>
              <p>R$ 25,00 Cento</p>
            </div>
            <div className="box-servico">
              <img src="assets/brigadeiro.png" alt="lorem ipsun" />
              <h3>Brigaderio de chocolate meio-amargo e granulado</h3>
              <p>R$ 5,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/beijinho.png" alt="lorem ipsun" />
              <h3>beijinho com coco ralado</h3>
              <p>R$ 5,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/brigadeiro-beijinho.png" alt="Brigadeiro e Beijinho" />
              <h3>Brigadeiro + Beijinho</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-café.png" alt= "trufa de café" />
              <h3>Trufa de Café</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-limão.png" alt="trufa de limão" />
              <h3>Trufa de Limão</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-maracujá.png" alt="trufa de maracujá" />
              <h3>Trufa de Maracujá</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-oreo.png" alt="Trufa de Oreo" />
              <h3>Trufa de Oreo</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-paçoca.png" alt="Trufa de Paçoca" />
              <h3>Trufa de Paçoca</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-prestigio.png" alt="lorem ipsun" />
              <h3>Trufa de Préstigio</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-de-sensação.png" alt="lorem ipsun" />
              <h3>Trufa de Sensação</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-doce-leite.png" alt="lorem ipsun" />
              <h3>Trufa Doce de Leite</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/trufa-floresta-negra.png" alt="lorem ipsun" />
              <h3>Trufa Floresta Negra</h3>
              <p>R$ 3,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-coco.png" alt="Geladinho de coco" />
              <h3>Geladinho de Coco Gourmet</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-chocolate.png" alt="Geladinho de Chocolate" />
              <h3>Geladinho de Chocolate Gourmet</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-manga.png" alt="lorem ipsun" />
              <h3>Geladinho de Manga Goumert</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-maracuja.png" alt="Geladinho de Maracujá" />
              <h3>Geladinho de Maracujá Goumert</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-morango.png" alt="Geladinho de Morango" />
              <h3>Geladinho de Morango Goumert</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-limao.png" alt="Geladinho de Limão" />
              <h3>Geladinho de Limão Gourmet</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-goiaba.png" alt="Geladinho de Goiaba" />
              <h3>Geladinho de Goiaba Gourmet</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-ninho.png" alt="Geladinho de ninho com nutella" />
              <h3>Geladinho de ninho com nutella Gourmet</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/geladinho-paçoca.png" alt="Geladinho Paçoca" />
              <h3>Geladinho de paçoca Gourmet</h3>
              <p>R$ 4,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/mousse-morango.png" alt="Geladinho de ninho com nutella" />
              <h3>Mousse de Morango</h3>
              <p>R$ 5,00</p>
            </div>
            <div className="box-servico">
              <img src="assets/mousse-maracuja.png" alt="Geladinho Paçoca" />
              <h3>Mousse de Maracujá</h3>
              <p>R$ 5,00</p>
            </div>
          </div>
        </section>

      </main>


      <Footer />
      
    </div>
  )

}
