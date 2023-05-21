import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const ProductosAdmin = () => {
   
    const history = useNavigate();

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
            //alert ("producto eliminado correctamente");
            actualizarProductos();
            }
            else{
            alert("No se ha podido eliminar el producto");
            }
        });
    }

    //Creamos una funcion para guardar la ID del producto que queremos modificar y lo redirigimos a otra pagina
    function actualizarProducto(id){

      localStorage.setItem("id_producto", id);
      history("/ProductosActualizar");
    }


    return (
        <div className="t-p-container">
            <div className="t-p-div">
                <h2 onClick={actualizarProductos}>Todos los productos</h2>
                <Link to={"/ProductosAdminCrear"}><input className="b-t-crear" type="button" value="CREAR PRODUCTO  +"></input></Link>
 
                <div className="t-p-listado">
                    
                <table className="t-p-tabla">
                        <tr className="t1-p-tr">
                            <td>ID</td>
                            <td>Nombre</td>
                            <td>Categoria</td>
                            <td>Descripcion</td>
                            <td>Precio</td>
                            <td>Oferta</td>
                        </tr>
                    
                        {productos.lista.map((listado, key) => (
                    
                        <tr key={key} className="t2-p-tr">
                            <td>{listado[0]}</td>
                            <td>{listado[1]}</td>
                            <td>{listado[2]}</td>
                            <td>{listado[3]}</td>
                            <td>{listado[4]+"€"}</td>
                            <td>{listado[5]+"%"}</td>
                            <td><input className="b-t-eliminar" type="button" name="eliminar" value="ELIMINAR" onClick={() => eliminarProducto(listado[0])}></input></td>
                            <td><input className="b-t-eliminar" type="button" name="actualizar" value="ACTUALIZAR" onClick={() => actualizarProducto(listado[0])}></input></td>
                        </tr>
                        ))}
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ProductosAdmin;
