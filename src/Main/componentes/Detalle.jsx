import { useState, useEffect } from "react";
import React from "react";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detalle = () => {
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
          usuario: nombreUsuario,
        })
        .then((response) => {
          setidUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [nombreUsuario]);

  function añadirProducto(id) {
    if (nombreUsuario) {
      let valor = [];
      valor[0] = idUser;
      valor[1] = id;
      axios
        .post("http://localhost/Cratos-backend/AnyadirAcarro.php", valor)
        .then((resultado2) => {
          if (resultado2.data === 1) {
            alert("Producto añadido al carro");
          } else {
            alert("No se ha podido añadir el producto al carro");
          }
        });
    } else {
      alert("No se puede añadir al carro, no tiene usuario");
    }
  }

  const { id, tipo } = useParams();
  const [productos, setProductos] = useState([]);
  const [item, setItem] = useState({});

  useEffect(() => {
    getProductos();
  });

  function getProductos() {
    let consultaURL = "";

    if (tipo === "oferta") {
      consultaURL = "http://localhost/Cratos-backend/Ofertas.php";
    } else if (tipo === "producto") {
      consultaURL = "http://localhost/Cratos-backend/Productos.php";
    }

    axios
      .get(consultaURL)
      .then((resultado) => {
        setProductos(resultado.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }

  useEffect(() => {
    const filteredItem = productos.find((producto) => producto[0] === id);
    setItem(filteredItem || {});
  }, [id, productos]);

  const productosImg = require.context("../img", true);

  return (
    <div className="container_detalle">
      <Banner />
      {Object.keys(item).length !== 0 ? (
        <div>
          <div className="foto_detalle">
            {item[1] && productosImg.keys().includes(`./${item[1]}.jpg`) ? (
              <img
                className="o_img"
                src={productosImg(`./${item[1]}.jpg`)}
                alt={item[1]}
              />
            ) : (
              <p>Imagen no encontrada</p>
            )}
          </div>
          <div className="descripcion_detalle">
            <h2>{item[1]}</h2>
            <p>{item[2]}</p>
            {/* No hay campo "price" en los datos */}
            <input
              type="button"
              id="añadir"
              name="añadir"
              value="AÑADIR AL CARRO"
              onClick={() => añadirProducto(item[0])}
            ></input>
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default Detalle;
