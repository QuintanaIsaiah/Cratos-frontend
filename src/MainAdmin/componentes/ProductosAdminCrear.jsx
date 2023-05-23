import React from "react";
import { useState } from "react";
import axios from "axios";
import { AddLog } from "../../shared/AddLog";
//import { functionsIn } from "lodash";

const ProductosAdminCrear = ({ handleClickProductos }) => {
  const [productos, setProductos] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
    porcentaje_oferta: "",
    imagen: null,
  });

  const handleNombreChange = (event) => {
    setProductos({ ...productos, nombre: event.target.value });
  };
  const handleCategoriaChange = (event) => {
    setProductos({ ...productos, categoria: event.target.value });
  };
  const handleDescripcionChange = (event) => {
    setProductos({ ...productos, descripcion: event.target.value });
  };
  const handlePrecioChange = (event) => {
    setProductos({ ...productos, precio: event.target.value });
  };
  const handleOfertaChange = (event) => {
    setProductos({ ...productos, porcentaje_oferta: event.target.value });
  };

  function crearProductos() {
    //alert(productos.imagen);

    let valor = [];
    valor[0] = productos.nombre;
    valor[1] = productos.categoria;
    valor[2] = productos.descripcion;
    valor[3] = productos.precio;
    valor[4] = productos.porcentaje_oferta;
    valor[5] = productos.imagen;

    console.log("valor");
    console.log(valor);

    handleClickProductos();

    axios
      .post("http://localhost/Cratos-backend/ProductosAdminCrear.php", valor)
      .then((resultado2) => {
        if (resultado2.data === 1) {
          window.location.reload();
          AddLog(
            localStorage.getItem("usuario"),
            `Create new product named ${productos.nombre}`
          );
        } else {
          alert("Rellena todos los campos para poder crear un producto");
        }
      });
  }

  //Guardamos la imagen en productos.imagen
  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageData = e.target.result; // Datos de la imagen en formato base64

      // Asignar los datos de la imagen en base64 al campo "imagen" del objeto de productos
      productos.imagen = imageData;

      // Aquí puedes realizar cualquier otra acción con el objeto de productos, como enviarlo al servidor o almacenarlo en algún lugar.

      console.log(productos);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="c-p-contenedor">
      <div className="c-p-div">
        <h3>Crear un nuevo producto</h3>
        <br></br>
        <form className="c-p-form">
          <label>Nombre: </label>
          <input
            type="text"
            value={productos.nombre}
            onChange={handleNombreChange}
          ></input>
          <br></br>
          <br></br>
          <label>Categoria: </label>
          <input
            type="text"
            value={productos.categoria}
            onChange={handleCategoriaChange}
          ></input>
          <br></br>
          <br></br>
          <label>Descripcion: </label>
          <input
            type="text"
            value={productos.descripcion}
            onChange={handleDescripcionChange}
          ></input>
          <br></br>
          <br></br>
          <label>Precio: </label>
          <input
            type="number"
            value={productos.precio}
            onChange={handlePrecioChange}
          ></input>
          <br></br>
          <br></br>
          <label>Porcentaje Oferta: </label>
          <input
            type="number"
            value={productos.porcentaje_oferta}
            onChange={handleOfertaChange}
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <label>Imagen: </label>
          <input type="file" onChange={handleImagenChange}></input>
          <br></br>
          <br></br>
          <div className="div-boton">
            <input type="button" value="CREAR" onClick={crearProductos}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductosAdminCrear;
