import './style.css'


export default function Footer() {
    return(
      <footer>
        <div className='limitar-secao container-logo-informacoes'>
          <img src='assets/midoces.png' alt='logomarca'/>
          <div>
             <h3>ENDEREÇO</h3>
             <p>Rua João Peres Calhamares n° 557</p>
             <p>Jardim Sapopemba - São Paulo - SP</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>midoces88@gmail.com</p>
                <p>Tel: (11)934455833 (Micheli)</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO DE SEGUNDA Á SÁBADO</p>
                <p>08:00hs ás 20:00hs</p>
            </div>
        </div>
        <div className='limitar-secao direito-autoral'>
            <p>© 2024 Mi Doces e Salgados - Todos os direitos reservados.</p>
        </div>
    </footer>

  )

}
