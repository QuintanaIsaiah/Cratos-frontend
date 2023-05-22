import React from "react";
import { useState } from "react";
import axios from "axios";
//import { functionsIn } from "lodash";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ProductosAdminActualizar = ({ handleClickProductos }) => {
  const id_producto_admin = localStorage.getItem("id_producto");

  const [productos, setProductos] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    precio: "",
    porcentaje_oferta: "",
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

  function actualizarProductos() {
    //alert(productos.imagen);

    let valor = [];
    valor[0] = productos.nombre;
    valor[1] = productos.categoria;
    valor[2] = productos.descripcion;
    valor[3] = productos.precio;
    valor[4] = productos.porcentaje_oferta;
    valor[5] = id_producto_admin;

    axios
      .post(
        "http://localhost/Cratos-backend/ProductosAdminActualizar.php",
        valor
      )
      .then((resultado2) => {
        console.log("LA PH DEVUELVE : " + resultado2.data);
        if (resultado2.data === 1) {
          handleClickProductos();
        } else {
          alert("No se ha podido actualizar el producto");
        }
      });
  }

  const [productos2, setProductos2] = useState({
    lista: [],
  });
  //Indicamos que ejecute getProductos una vez
  useEffect(() => {
    getProductos();
  }, []);

  function getProductos() {
    axios
      .post(
        "http://localhost/Cratos-backend/select1producto.php",
        id_producto_admin
      )
      .then(function (resultado) {
        console.log(resultado.data);
        setProductos2((prevProductos2) => ({
          ...prevProductos2,
          lista: resultado.data,
        }));
      });
  }

  console.log("==========>");
  console.log(productos2.lista[0]?.[1]);

  return (
    <div className="c-p-contenedor">
      <div className="c-p-div">
        <h3>Actualizar producto</h3>
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
          <div className="div-boton">
            <input
              className="b-t-crear"
              type="button"
              value="Actualizar"
              onClick={actualizarProductos}
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
              <label>Categoria: </label>
              <span>{listado[2]}</span>
              <br></br>
              <br></br>
              <label>Descripcion: </label>
              <span>{listado[3]}</span>
              <br></br>
              <br></br>
              <label>Precio: </label>
              <span>{listado[4] + "€"}</span>
              <br></br>
              <br></br>
              <label>Porcentaje Oferta: </label>
              <span>{listado[5] + "%"}</span>
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
