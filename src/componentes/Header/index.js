import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return(
    <header>
      <div className="limitar-secao">
        <img src="assets/midoces.png" alt="logomarca" />
        <nav>
          <Link className="link-topo" to="/">Home</Link>
          <Link className="link-topo" to="/doces">Doces</Link>
          <Link className="link-topo" to="/salgados">Salgados</Link>
        </nav>
      </div>
    </header>
  )
}