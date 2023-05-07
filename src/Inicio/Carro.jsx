import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Carro = () => {
   
  const history = useNavigate();

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
    lista: [],
  });

  //Indicamos que ejecute getProductos una vez
  useEffect(() => {
    getProductos();
  }, [idUser]);

  //Creamos una funcion para recoger la info desde el php y lo guardamos en lista []
  function getProductos() {

    if(idUser){
      axios.post("http://localhost/Cratos-backend/mostrar_carro.php",idUser)
      .then(function (resultado) {
        //console.log(resultado.data);
        setProductos({ lista: resultado.data });
      });
    }
    else{
      
    }
  }

  //Creamos una funcion para que actualizar los datos , llamando de nuevo a getProductos
  function actualizarProductos() {
    getProductos();
  }

  //Creamos una función para eliminar un producto del carro, y que se actualiza
  function eliminarProducto(id){

    let valor = [];
    valor[0] = id;
    valor[1] = idUser;

    axios.post("http://localhost/Cratos-backend/EliminarProductoCarro.php",valor)
      .then(function (resultado) {

        console.log(resultado.data);
        if(resultado.data === 1){
          alert ("producto eliminado correctamente");
          actualizarProductos();
        }
        else{
          alert("No se ha podido eliminar el producto");
        }
      });
  }

  //Creamos fncion para que cuando cinfirme compra, se borren los productos del user_carro
  function confirmarCompra(){
    let valor = idUser;
    axios.post("http://localhost/Cratos-backend/ElimiinarCarro.php",valor)
      .then(function (resultado) {

        console.log(resultado.data);
        if(resultado.data === 1){
          alert ("Compra realizada correctamente");
          actualizarProductos();
          //Mande a la home
          history("/");
        }
        else{
          alert("No se ha podido eliminar el producto");
        }
      });
  }
  
  //Creamos constante donde almacene la imagenes en una variable 
  const productosImg = require.context("../Main/img",true);

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
          <div className="c-conetendor_2">
            <div className="c-lista">
              <div><h6>Nombre</h6></div>
              <div><h6>Categoria</h6></div>
              <div><h6>Imagen</h6></div>
              <div><h6>Precio</h6></div>
              <div><h6>Oferta</h6></div>
              <div><h6>Precio Final</h6></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="c-caja2">
          <div className="c-caja2-1">
            <h3>Resumen Pedido</h3>
            <div className="c-caja2-div">
              <div>Total productos : {productos.lista.length} unidades</div>
              <div>Precio Final: {productos.lista.reduce((acumulado, listado) => acumulado + parseFloat(listado[4]-(listado[4]*listado[5]/100)), 0)} €</div>
            </div>
            
            <div className="tramitar">
              <input type="button" name="comprar" value="COMPRAR" onClick={confirmarCompra}></input>
            </div>
            
          </div>
          <br></br>
          <div className="c-caja2-2">
            <h5>Métodos de pago</h5>
              <div className="c-caja2-2-div">
                <div>Card</div>
                <div>PayPal</div>
                <div>Visa</div>
              </div>
          
            <h5>Proteccion del comprador</h5>
              <div>Si el articulo no llega, o es diferente a la descripción del producto se te abonar el reembolso</div>
          </div>
          
        </div>

        <div className="c-caja">
          {productos.lista.map((listado, key) => {
            return (
                <div className="c-conetendor" key={key}>
                  <div className="c-lista">
                    <div>{listado[1]}</div>
                    <div>{listado[2]}</div>
                    <div>
                      {listado[1] && productosImg.keys().includes(`./${listado[1]}.jpg`) ? (
                        <img className="c_img" src={productosImg(`./${listado[1]}.jpg`)} alt={listado[1]} />
                      ) : (
                        <p className="c_p">Imagen no encontrada</p>
                      )}
                    </div>
                    {/*<div>{listado[3]}</div>*/}
                    <div>{listado[4]+"€"}</div>
                    <div>{listado[5]+"%"}</div>
                    <div>{(listado[4]-(listado[4]*listado[5]/100))+"€"}</div>
                    <div><input type="button" name="eliminar" value="ELIMINAR" onClick={() => eliminarProducto(listado[0])}></input></div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Carro;
