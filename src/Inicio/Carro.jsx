import React from "react";
import { useState,useEffect} from "react";
import axios from "axios";

const Carro = () => {

    const [productos,setProductos] = useState({
        lista: []
    });

    //Indicamos que ejecute getProductos una vez
    useEffect(() =>{
        getProductos();
    },[]);

    //Creamos una funcion para recoger la info desde el php y lo guardamos en lista []
    function getProductos(){
        axios.get('http://localhost/Cratos-backend/mostrar_carro.php')
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
        <h2 onClick={actualizarProductos}>Listado de Carro</h2>
    
            <div className="c-caja">
                
                {
                    productos.lista.map((listado,key) =>
                        <div className="c-conetendor" key={key}>
                            <div className="c-lista">
                                <div>{listado[1]}</div>
                                <div>{listado[2]}</div>
                                <div>{listado[3]}</div>
                                <div>{listado[4]}</div>
                                <div>{listado[5]}</div>
                            </div>
                        </div>
                    )
                }

            </div>
    </div>
    );
  };
  
  export default Carro;