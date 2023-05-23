import React from "react";
import { useState } from "react";
import axios from "axios";
//import { functionsIn } from "lodash";
import { useEffect } from "react";
import { AddLog } from "../../shared/AddLog";
const ProductosAdminActualizar = ({ handleClickUsuarios }) => {
  const id_producto_admin = localStorage.getItem("id_producto");

  const [usuarios, setUsuarios] = useState({
    nombre: "",
    correo: "",
    edad: "",
    contrasenya: "",
    admin: "",
  });

  const handleNombreChange = (event) => {
    setUsuarios({ ...usuarios, nombre: event.target.value });
  };
  const handleCorreoChange = (event) => {
    setUsuarios({ ...usuarios, correo: event.target.value });
  };
  const handleEdadChange = (event) => {
    setUsuarios({ ...usuarios, edad: event.target.value });
  };
  const handleContrasenyaChange = (event) => {
    setUsuarios({ ...usuarios, contrasenya: event.target.value });
  };
  const handleAdminChange = (event) => {
    setUsuarios({ ...usuarios, admin: event.target.value });
  };

  function actualizarUsuarios() {
    //alert(productos.imagen);

    let valor = [];
    valor[0] = usuarios.nombre;
    valor[1] = usuarios.correo;
    valor[2] = usuarios.edad;
    valor[3] = usuarios.contrasenya;
    valor[4] = usuarios.admin;
    valor[5] = id_producto_admin;

    axios
      .post(
        "http://localhost/Cratos-backend/UsuariosAdminActualizar.php",
        valor
      )
      .then((resultado2) => {
        if (resultado2.data === 1) {
          handleClickUsuarios();
          AddLog(
            localStorage.getItem("usuario"),
            `Update user with id ${id_producto_admin}`
          );
        } else {
          alert("No se ha podido actualizar el usuario");
        }
      });
  }

  const [productos2, setProductos2] = useState({
    lista: [],
  });
  //Indicamos que ejecute getProductos una vez
  useEffect(() => {
    getUsuarios();
  }, []);

  function getUsuarios() {
    axios
      .post(
        "http://localhost/Cratos-backend/select1usuario.php",
        id_producto_admin
      )
      .then(function (resultado) {
        setProductos2((prevUsuarios2) => ({
          ...prevUsuarios2,
          lista: resultado.data,
        }));
      });
  }

  return (
    <div className="c-p-contenedor">
      <div className="c-p-div">
        <h3>Actualizar usuario</h3>
        <br></br>
        <form className="c-p-form">
          <label>Nombre: </label>
          <input
            type="text"
            value={usuarios.nombre}
            onChange={handleNombreChange}
          ></input>
          <br></br>
          <br></br>
          <label>Correo: </label>
          <input
            type="text"
            value={usuarios.categoria}
            onChange={handleCorreoChange}
          ></input>
          <br></br>
          <br></br>
          <label>Edad: </label>
          <input
            type="number"
            min={0}
            value={usuarios.descripcion}
            onChange={handleEdadChange}
          ></input>
          <br></br>
          <br></br>
          <label>Contraseña: </label>
          <input
            type="text"
            value={usuarios.precio}
            onChange={handleContrasenyaChange}
          ></input>
          <br></br>
          <br></br>
          <label>Es administrador: </label>
          <input
            type="number"
            value={usuarios.porcentaje_oferta}
            min={0}
            max={1}
            onChange={handleAdminChange}
          ></input>
          <br></br>
          <br></br>
          <div className="div-boton">
            <input
              className="b-t-crear"
              type="button"
              value="Actualizar"
              onClick={actualizarUsuarios}
            ></input>
          </div>
        </form>
      </div>

      <div>
        {productos2.lista.map((listado) => (
          <div className="c-p-div2">
            <h3>Producto seleccionado</h3>
            <br></br>
            <form className="c-p-form2">
              <label>Nombre: </label>
              <span>{listado[1]}</span>
              <br></br>
              <br></br>
              <label>Correo: </label>
              <span>{listado[2]}</span>
              <br></br>
              <br></br>
              <label>Edad: </label>
              <span>{listado[3]}</span>
              <br></br>
              <br></br>
              <label>Contraseña: </label>
              <span>{listado[4]}</span>
              <br></br>
              <br></br>
              <label>Es administrador: </label>
              <span>{(listado[5] = 1 ? "Si" : "No")}</span>
              <br></br>
              <br></br>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosAdminActualizar;
