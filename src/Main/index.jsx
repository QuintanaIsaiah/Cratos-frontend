import React from "react";
import axios from "axios";
import { CONNECTION_URL } from "../shared/routes.js";
import Productos from "./componentes/Productos";

const Main = () => {

    // Llamo a connection.php para crear la db al cargar la web
    axios.post(CONNECTION_URL)
      .catch(error => {
        // console.log(error);
      });

    return (
        <div>
            <div className="m-banner">Banner</div>
            <div className="m-ofertas">Ofertas</div>
            <div className="m-productos"><Productos/></div>
        </div>
    );
}

export default Main;