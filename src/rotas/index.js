import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../paginas/Home";
import Doces from "../paginas/Doces";
import Salgados from "../paginas/Salgados";

export default function Rotas() {

return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='doces' element={<Doces />} />
            <Route path='salgados' element={<Salgados />} />
        </Routes>
    </BrowserRouter>

)

}






