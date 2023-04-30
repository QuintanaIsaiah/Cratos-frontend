import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Carro = () => {
  const [productos, setProductos] = useState({
    lista: [],
  });

  //Indicamos que ejecute getProductos una vez
  useEffect(() => {
    getProductos();
  }, []);

  //Creamos una funcion para recoger la info desde el php y lo guardamos en lista []
  function getProductos() {
    axios
      .get("http://localhost/Cratos-backend/mostrar_carro.php")
      .then(function (resultado) {
        //console.log(resultado);
        setProductos({ lista: resultado.data });
      });
  }

  //Creamos una funcion para que actualizar los datos , llamando de nuevo a getProductos
  function actualizarProductos() {
    getProductos();
  }

  //Creamos una función para eliminar un producto del carro, y que se actualiza
  function eliminarProducto(id){
    alert(id);
    axios.post("http://localhost/Cratos-backend/EliminarProductoCarro.php",id)
      .then(function (resultado) {

        if(resultado.data === 1){
          alert ("producto eliminado correctamente");
          actualizarProductos();
        }
        else{
          alert("No se ha podido eliminar el producto");
        }
      });
  }
  

  if (productos.lista.length === 0) {
    return (
      <div>
        <h2 onClick={actualizarProductos}>Listado de Carro</h2>

        <div className="c-caja">
          <span>No hay productos en el carrito</span>
        </div>
      </div>
    );
  } else {
    
    return (
      <div>
        <h2 onClick={actualizarProductos}>Listado de Carro</h2>

        <div className="c-caja">
          {productos.lista.map((listado, key) => {
            return (
                <div className="c-conetendor" key={key}>
                  <div className="c-lista">
                    <div>{listado[1]}</div>
                    <div>{listado[2]}</div>
                    {/*<div>{listado[3]}</div>*/}
                    <div>{listado[4]}</div>
                    <div>{listado[5]}</div>
                    <div>{"% aplicado "+(listado[4]-(listado[4]*listado[5]/100))}</div>
                    <div><input type="button" name="eliminar" value="ELIMINAR" onClick={() => eliminarProducto(listado[0])}></input></div>
                  </div>
                </div>
            );
          })}
        </div>
          
        <div className="c-caja2">
          <h3>Resumen Pedido</h3>
          <div>Total productos : {productos.lista.length}</div>
  
          <div>Precio total: {productos.lista.reduce((acumulado, listado) => acumulado + parseFloat(listado[4]), 0)}</div>
        </div>
      </div>
    );
  }
};

export default Carro;
