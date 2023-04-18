import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Productos = () => {

    const [productos,setProductos] = useState({
        lista: []
    });

    //Indicamos que ejecute getProductos una vez
    useEffect(() =>{
        getProductos();
    },[]);

    //Creamos una funcion para recoger la info desde el php y lo guardamos en lista []
    function getProductos(){
        axios.get('http://localhost/Cratos-backend/productos.php')
            .then(function(resultado){
                console.log(resultado);
                setProductos({lista:resultado.data});
            })
    }

    //Creamos una funcion para que actualizar los datos , llamando de nuevo a getProductos
    function actualizarProductos(){
        getProductos();
    }
    
    return (
        <div>
            <h2 onClick={actualizarProductos}>Todos los productos</h2>
        
                <div className="contenedor_producto">
                    
                    {
                        productos.lista.map((listado,key) =>
                            <div className="div_producto" key={key}>
                                <div className="p_titulo"><h3>{listado[1]}</h3></div>
                                <div className="p_img">{listado[1]+".png"}</div>
                                <div className="p_descripcion">{listado[3]}</div>
                                <ul className="p_botones">
                                    <li>cat: {listado[2]}</li>
                                    <li><input type="button" id="añadir" name="añadir" value="AÑADIR AL CARRO"></input></li>
                                    <li><input type="button" id="ver" name="ver" value="VER"></input></li>
                                </ul>
                            </div>
                        )
                    }

                </div>
        </div>
    )
}

export default Productos;