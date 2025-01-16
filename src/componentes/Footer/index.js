import './style.css'


export default function Footer() {
    return(
      <footer>
        <div className='limitar-secao container-logo-informacoes'>
          <img src='assets/midoces.png' alt='logomarca'/>
          <div>
             <h3>ENDEREÇO</h3>
             <p>Rua Tejó n° 172</p>
             <p>Pilar Velho - Ribeirão Pires- SP</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>midoces88@gmail.com</p>
                <p>Tel: (11)93445-5833 (pix)</p>
                <p>Micheli Aparecida de Souza</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO DE SEGUNDA Á SÁBADO</p>
                <p>10:00hs ás 22:00hs</p>
            </div>
        </div>
        <div className='limitar-secao direito-autoral'>
            <p>© 2025 Mi Doces e Salgados - Todos os direitos reservados.</p>
        </div>
    </footer>

  )

}
