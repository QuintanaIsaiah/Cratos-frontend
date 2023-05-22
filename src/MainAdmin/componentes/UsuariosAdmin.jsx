import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { Table, Button } from "rsuite";

const ProductosAdmin = ({
  handleClickUsuariosCrear,
  handleClickUsuariosActualizar,
}) => {
  const [usuarios, setUsuarios] = useState({
    lista: [],
  });

  //Indicamos que ejecute getProductos una vez
  useEffect(() => {
    getUsuarios();
  }, []);

  //Creamos una funcion para recoger la info desde el php y lo guardamos en lista []
  function getUsuarios() {
    axios
      .get("http://localhost/Cratos-backend/UsuariosAdmin.php")
      .then(function (resultado) {
        // console.log(resultado);
        setUsuarios({ lista: resultado.data });
      });
  }

  function actualizarUsuarios() {
    getUsuarios();
  }

  function eliminarUsuario(id) {
    let valor = id;

    axios
      .post("http://localhost/Cratos-backend/UsuariosAdminEliminar.php", valor)
      .then(function (resultado) {
        console.log(resultado.data);
        if (resultado.data === 1) {
          //alert ("producto eliminado correctamente");
          actualizarUsuarios();
        } else {
          alert("No se ha podido eliminar el producto");
        }
      });
  }

  function actualizarUsuario(id) {
    localStorage.setItem("id_producto", id);
    handleClickUsuariosActualizar();
  }

  return (
    <div className="t-p-container">
      <div className="t-p-div">
        <h2 onClick={() => actualizarUsuarios}>Todos los productos</h2>
        <input
          className="b-t-crear"
          type="button"
          value="NUEVO USUARIO"
          onClick={() => handleClickUsuariosCrear()}
        ></input>

        <div className="t-p-listado">
          <table className="t-p-tabla">
            <tbody>
              <tr className="t1-p-tr">
                <td>ID</td>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Edad</td>
                <td>Contraseña</td>
                <td>Admin</td>
              </tr>

              {usuarios.lista.map((listado, key) => (
                <tr key={key} className="t2-p-tr">
                  <td>{listado[0]}</td>
                  <td>{listado[1]}</td>
                  <td>{listado[2] === null ? "Sin correo" : listado[2]}</td>
                  <td>{listado[3] === null ? "0" : listado[3]}</td>
                  <td>{listado[4]}</td>
                  <td>{listado[5] === "1" ? "SI" : "NO"}</td>
                  <td>
                    <input
                      className="b-t-eliminar"
                      type="button"
                      name="eliminar"
                      value="ELIMINAR"
                      onClick={() => eliminarUsuario(listado[0])}
                    ></input>
                  </td>
                  <td>
                    <input
                      className="b-t-eliminar"
                      type="button"
                      name="actualizar"
                      value="ACTUALIZAR"
                      onClick={() => actualizarUsuario(listado[0])}
                    ></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductosAdmin;
