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
            console.log(resultado.data);
          })
          .catch(error => {
            console.log(error);
          });

      }, []);

      if(productos.usuario){
        console.log(productos.usuario);
        
        let valor = { usuario: productos.usuario };
        axios.post("http://localhost/Cratos-backend/Usuario_Mostrar.php", valor)
          .then(resultado2 => {
            console.log(resultado2.data);
          });

      }
      else{
      }

    return(
        <div>{productos.usuario}</div>
    );
};

export default Usuario;
