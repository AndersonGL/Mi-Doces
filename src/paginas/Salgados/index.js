import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import './style.css';

export default function Salgados() {

  return (
    <div>

      <Header />

      <main>
        <section className="secao-banner-servicos">
          <div className="titulo-banner-servicos">
            <h1>NOSSOS SALGADOS</h1>
          </div>
        </section>

        <section className="limitar-secao secao-servicos">



          <div className="container-servicos">

            <div className="box-servico">
              <img src="assets/torta-frango.png" alt="torta de frango" />
              <h3>Torta de Frango</h3>
              <p>R$ 7,00 pedaço</p>
            </div>
            <div className="box-servico">
              <img src="assets/torta-carne.png" alt="torta de carne" />
              <h3>Torta de Carne</h3>
              <p>R$ 7,00 pedaço</p>
            </div>
            <div className="box-servico">
              <img src="assets/natural-atum.png" alt=" sanduiche de atum" />
              <h3>Sanduiche Natural de Atum</h3>
              <p>R$ 7,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/natural-frango.png" alt="sanduiche de frango" />
              <h3>Sanduiche Natural de Frango</h3>
              <p>R$ 7,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/mandioquinha.png" alt="caldo de mandioquinha" />
              <h3>Caldo de madioquinha com carne seca </h3>
              <p>15,00 (250ml)</p>
            </div>
            <div className="box-servico">
              <img src="assets/abobora.png" alt="caldo de abóbora" />
              <h3>Caldo de abóbora com carne seca</h3>
              <p>15,00 (250ml)</p>
            </div>
            <div className="box-servico">
              <img src="assets/caldo-verde.png" alt="caldo verde" />
              <h3>Caldo Verde com Bancon e Linguiça</h3>
              <p>15,00 (250ml)</p>
            </div>
            <div className="box-servico">
              <img src="assets/frango.png" alt="pastel de frango" />
              <h3>Pastel Frango</h3>
              <p>R$ 8,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/carne.png" alt="pastel de carne" />
              <h3>Pastel de Carne </h3>
              <p>8,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/queijo.png" alt="pastel queijo" />
              <h3>Pastel de Queijo</h3>
              <p>8,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/bauru.png" alt="pastel bauru" />
              <h3>Pastel de Bauru</h3>
              <p>8,00 unid</p>
            </div>
            <div className="box-servico">
              <img src="assets/coxinha.png" alt="coxinha" />
              <h3>Coxinha</h3>
              <p>65,00 cento</p>
            </div>
            <div className="box-servico">
              <img src="assets/bolinho.png" alt="bolinho de queijo" />
              <h3>Bolinho de Queijo</h3>
              <p>65,00 cento</p>
            </div>

          </div>
        </section>

        <section>
          <a href='https://wa.me/5511934455833?><button className="whatsapp"></button></a>
        </section>

      </main>


      <Footer />

    </div>
  )

}