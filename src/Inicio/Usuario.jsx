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

      useEffect(() => {

        var valor = [];
        valor[0] = productos.usuario;

        axios.get("http://localhost/Cratos-backend/Mostrar_Carro.php",valor)
          .then(resultado => {
            console.log(productos.usuario)
          })
          .catch(error => {
            console.log(error);
          });
      }, [productos.usuario]);

    return(
        <div>{"Usuario : "+productos.usuario}</div>
    );
};

export default Usuario;
