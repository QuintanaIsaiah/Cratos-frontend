import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const ProductosAdmin = () => {
   

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
          .get("http://localhost/Cratos-backend/productosAdmin.php")
          .then(function (resultado) {
            // console.log(resultado);
            setProductos({ lista: resultado.data });
          });
      }
    
      //Creamos una funcion para que actualizar los datos , llamando de nuevo a getProductos
      function actualizarProductos() {
        getProductos();
      }

    //Creamos una función para eliminar un producto del carro, y que se actualiza
    function eliminarProducto(id){

        let valor = id;

        axios.post("http://localhost/Cratos-backend/ProductosAdminEliminar.php",valor)
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


    return (
        <div>
            <div>
                <h2 onClick={actualizarProductos}>Todos los productos</h2>
                <Link to={"/ProductosAdminCrear"}><input type="button" value="CREAR PRODUCTO +"></input></Link>
 
                <div>
                    {productos.lista.map((listado, key) => (
                    <table>
                        <tr key={key}>
                            <td>ID</td>
                            <td>Nombre</td>
                            <td>Categoria</td>
                            <td>Descripcion</td>
                            <td>Precio</td>
                            <td>Porcentaje Oferta</td>
                        </tr>
                        <tr>
                            <td>{listado[0]}</td>
                            <td>{listado[1]}</td>
                            <td>{listado[2]}</td>
                            <td>{listado[3]}</td>
                            <td>{listado[4]}</td>
                            <td>{listado[5]}</td>
                            <div><input type="button" name="eliminar" value="ELIMINAR" onClick={() => eliminarProducto(listado[0])}></input></div>
                        </tr>
                    </table>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductosAdmin;
