import React from "react";
import axios from "axios";
import { useState } from "react";

const Productos = () => {

    //Creamos un array donde se guarden variables con los estados
    const [body,setState] = useState({
        listado: []
      })

    axios.get("http://localhost/Cratos-backend/productos.php")
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            
            body.listado = datosRespuesta;
            
        });

        console.log(body.listado);


    return (
        <div>
            Productos
            {body.listado[0]} 
            
        </div>
    );
}

export default Productos;