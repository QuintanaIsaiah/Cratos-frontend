import React, { useState } from "react";
import axios from "axios";
//import { functionsIn } from "lodash";

const UsuariosAdminCrear = ({ handleClickUsuarios: handleClickUsuarios }) => {
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
  const handleOfertaChange = (event) => {
    setUsuarios({ ...usuarios, admin: event.target.value });
  };

  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    setUsuarios({ ...usuarios, imagen: file });
  };

  function crearUsuario() {
    //alert(productos.imagen);

    let valor = [];
    valor[0] = usuarios.nombre;
    valor[1] = usuarios.correo;
    valor[2] = usuarios.edad;
    valor[3] = usuarios.contrasenya;
    valor[4] = usuarios.admin;

    console.log("=========> SE ENVIA:");
    console.log(valor);
    axios
      .post("http://localhost/Cratos-backend/UsuariosAdminCrear.php", valor)
      .then((resultado2) => {
        console.log("LA PH DEVUELVE : " + resultado2.data);
        if (resultado2.data === 1) {
          //alert("Se ha creado el producto");
          handleClickUsuarios();
        } else {
          alert("Rellena todos los campos para poder crear un producto");
        }
      });
  }
  return (
    <div className="c-p-contenedor">
      <div className="c-p-div">
        <h3>Nuevo usuario</h3>
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
            value={usuarios.correo}
            onChange={handleCorreoChange}
          ></input>
          <br></br>
          <br></br>
          <label>Edad: </label>
          <input
            type="number"
            min={0}
            value={usuarios.edad}
            onChange={handleEdadChange}
          ></input>
          <br></br>
          <br></br>
          <label>Contraseña: </label>
          <input
            type="password"
            value={usuarios.contrasenya}
            onChange={handleContrasenyaChange}
          ></input>
          <br></br>
          <br></br>
          <label>Es admin: </label>
          <input
            type="number"
            min={0}
            max={1}
            value={usuarios.admin}
            onChange={handleOfertaChange}
          ></input>
          <br></br>
          <br></br>
          <div className="div-boton">
            <input type="button" value="CREAR" onClick={crearUsuario}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsuariosAdminCrear;
