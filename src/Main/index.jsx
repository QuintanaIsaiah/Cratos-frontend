import React from "react";
import Productos from "./componentes/Productos";

const Main = () => {
    return (
        <div>
            <div className="m-banner">Banner</div>
            <div className="m-ofertas">Ofertas</div>
            <div className="m-productos"><Productos/></div>
        </div>
    );
}

export default Main;