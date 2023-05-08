import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link} from "react-router-dom";

const Ofertas = () => {
    const [nombreUsuario, setNombreUsuario] = useState("");

    const [idUser, setidUser] = useState("");
  
    useEffect(() => {
      const usuarioAlmacenado = localStorage.getItem("usuario");
      if (usuarioAlmacenado) {
        setNombreUsuario(usuarioAlmacenado);
      }
    }, []);
  
    useEffect(() => {
      if (nombreUsuario) {
        axios
          .post("http://localhost/Cratos-backend/Usuario_Mostrar.php", {
            usuario: nombreUsuario
          })
          .then((response) => {
            console.log("IDE DEL USUARIO: " + response.data);
            setidUser(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [nombreUsuario]);
  
    const [productos, setProductos] = useState({
      lista: []
    });
  
    useEffect(() => {
      getProductos();
    }, []);
  
    function getProductos() {
      axios
        .get("http://localhost/Cratos-backend/Ofertas.php")
        .then((resultado) => {
          console.log(resultado);
          setProductos({ lista: resultado.data });
        });
    }
  
    function actualizarProductos() {
      getProductos();
    }
  
    function añadirProducto(id) {
      if (nombreUsuario) {
        let valor = [];
        valor[0] = idUser;
        valor[1] = id;
        axios
          .post("http://localhost/Cratos-backend/AnyadirAcarro.php", valor)
          .then((resultado2) => {
            console.log("El añadir carro devuelbe : "+resultado2.data);
  
            if (resultado2.data === 1) {
              alert("Producto añadido al carro");
            } else {
              alert("No se ha podido añadir el producto al carro");
            }
          });
      } else {
        alert("No se puede añadir al carro, no tiene usuario");
      }
    }
    //Creamos constante donde almacene la imagenes en una variable 
    const productosImg = require.context("../img",true);
    
    return (
        <div>
            <h2 onClick={actualizarProductos}>Ofertas</h2>
        
                <div className="contenedor_ofertas">
                    
                    {
                        productos.lista.map((listado,key) =>
                            <div className="div_ofertas" key={key}>
                                <div className="o_cont1">
                                    <div className="o_titulo_img">
                                        <h3>{listado[1]}</h3>    
                                    </div>
                                    <div className="o_img">      
                                        {listado[1] && productosImg.keys().includes(`./${listado[1]}.jpg`) ? (
                                            <img className="o_img" src={productosImg(`./${listado[1]}.jpg`)} alt={listado[1]} />
                                        ) : (
                                            <p>Imagen no encontrada</p>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="o_cont2">
                                    <div className="o_titulo_descripcion"><h5>Descripción</h5></div>
                                    <div id="prueba" className="o_descripcion">{listado[3]}</div>
                                    <div className="o_precio">Precio : {listado[4]+"€"}</div>
                                    <div className="o_porcentaje">OFERTA! {listado[5]+"% de descuento"}</div>
                                    <div className="o_total">Precio Final : {listado[4]-(listado[4]*listado[5]/100)+"€"}</div>
                                    <ul className="o_botones">
                                        <li>cat: {listado[2]}</li>
                                        <li><input type="button" id="añadir" name="añadir" value="AÑADIR AL CARRO" onClick={()=> añadirProducto(listado[0])}></input></li>
                                        <li><Link to={`/Detalle/${listado[0]}`} className="ver-btn"><button type="button" id="ver" name="ver">VER</button></Link></li>
                                    </ul>
                                </div>
                                
                            </div>
                        )
                    }

                </div>
        </div>
    )
}

export default Ofertas;