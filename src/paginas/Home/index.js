import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

import './style.css'


export default function Home() {

    return (
        <div>


            < Header />



            <main>
                <section className="secao-banner">
                    <div className="texto-banner">
                        <h1> MI DOCES E SALGADOS </h1>
                    </div>
                </section>

                <section className="secao-nossos-servicos">
                    <img src="assets/bolinho-de-chuva.png" alt="bolinho de chuva" />
                    <div className="texto-secao-nossos-servicos">
                        <h2>Bolinho de Chuva</h2>
                        <p>
                            “Receita de vó sem igual”        </p>

                    </div>
                </section>

                <section className="secao-nossos-clientes">
                    <div className="texto-secao-nossos-clientes">
                        <h2>Torta de Frango com catupiry</h2>
                        <span></span>
                        <p>
                            " Aquela Torta delicosa feita com amor e carinho, Bem recheada hum... já deu aguá na boca."
                        </p>
                    </div>
                    <img src="assets/torta-frango.png" alt="torta" />
                </section>


                <section className="secao-sobre-nos">
                    <img src="assets/brigadeiro.png" alt="brigadeiro" />
                    <div className="texto-secao-sobre-nos">
                        <h2>Brigadeiros</h2>
                        <span></span>
                        <p>
                            “Delicioso Choclocate meio-amargo e granulados gourmet”
                        </p>
                    </div>
                </section>
                <section>
          <a href='https://wa.me/5511934455833?text=Ol%C3%A1,%20Fa%C3%A7a%20seu%20pedido%20!!!'><button className="whatsapp"></button></a>
        </section>
            </main>

            < Footer />


        </div>

    )

}


