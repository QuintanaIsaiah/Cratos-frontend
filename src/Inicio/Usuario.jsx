import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const Usuario = () => {

    const [productos, setProductos] = useState({
        usuario : ""
    });


    useEffect(() => {
        axios.get("http://localhost/Cratos-backend/Usuario.php")
          .then(resultado => {
            setProductos({ usuario: resultado.data});
            console.log("EL NOMBRE ES : "+resultado.data);
          })
          .catch(error => {
            console.log(error);
          });

      }, []);

      if(productos.usuario){
        console.log("SI EL USER : "+productos.usuario);
        
        let valor = { usuario: productos.usuario };
        axios.post("http://localhost/Cratos-backend/Usuario_Mostrar.php", valor)
          .then(resultado2 => {
            console.log("SI QUE HAY NOMBRE "+resultado2.data);
          });

      }
      else{
        console.log("NO HAY NADA EN NOMBRE");        
      }

    return(
        <div>{productos.usuario}</div>
    );
};

export default Usuario;
