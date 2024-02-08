import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return(
    <header>
      <div className="limitar-secao">
        <img src="assets/midoces.png" alt="logomarca" />
        <nav>
          <Link className="link-topo" to="/">Home</Link>
          <Link className="link-topo" to="/servicos">Doces</Link>
          <Link className="link-topo" to="/sobre">Salgados</Link>
        </nav>
      </div>
    </header>
  )
}