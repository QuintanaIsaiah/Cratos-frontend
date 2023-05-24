import { useState, useEffect } from "react";
import React from "react";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Modal, ModalBody } from "reactstrap";

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
            //alert("Producto añadido al carro");
            mostrarPopupCookies("Se ha añadido el producto en tu carro");
          } else {
            mostrarPopupCookies("Inicia sesión para poder comprar nuestros productos");
          }
        });
    } else {
      //alert("No se puede añadir al carro, no tiene usuario");
      mostrarPopupCookies("Inicia sesión para poder comprar nuestros productos");
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

  //Mensaje producto añadido
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [textoPopup, setTextoPopup] = useState("");

  const mostrarPopupCookies = (mensaje) => {
    let ms = mensaje;
    setMostrarPopup(true);
    setTextoPopup(
      <>
        {" "}
        <div className="popupText"> {ms} </div>
      </>
    );
  };

  const cerrarPopupCookies = () => {
    setMostrarPopup(false);
  };

  return (
    <div className="container_detalle">
      <Banner />
      <hr className="line_Ver"/>
      {Object.keys(item).length !== 0 ? (
        
        <div div className="detalle_contenedor">
          <div className="foto_detalle">
            {item[6] ? (
                  <img className="ver_img" src={item[6]} />
                ) : (
                  "No se ha encontrado imagen"
                )}
            
          </div>
          <hr className="line_Vertical"/>
          <div className="descripcion_detalle">
            <h2 className="Nombre_Detalle">{item[1]}</h2>
            <strong>Categoría:</strong><p>{item[2]}</p>
            <strong>Descripción:</strong><p className="d_descripcion">{item[3]}</p>
            <strong>Precio:</strong><p className="d_descripcion">{item[4]}€</p>
            <strong>Precio Final:</strong><p className="d_descripcion">{" "}
                {item[4] - (item[4] * item[5]) / 100 + "€"}</p>
            <p><em>*Todos nuestros productos se pueden adaptar</em> <br /><em> a las medidas de nuestros clientes.</em><br />
            <em>Contacte con nuestro servicio personalizado:</em><br /><strong> 555-678-945 </strong></p>
            <input
              className="carrito_Ver"
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
      <hr className="line_Ver1"/>
      <Modal isOpen={mostrarPopup} toggle={cerrarPopupCookies} centered>
        <ModalBody>{textoPopup}</ModalBody>
      </Modal>
    </div>
  );
};

export default Detalle;
