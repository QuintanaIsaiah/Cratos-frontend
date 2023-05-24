import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

const Ofertas = () => {
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

  const [productos, setProductos] = useState({
    lista: [],
  });

  useEffect(() => {
    getProductos();
  }, []);

  function getProductos() {
    axios
      .get("http://localhost/Cratos-backend/Ofertas.php")
      .then((resultado) => {
        setProductos({ lista: resultado.data });
      });
  }

  function actualizarProductos() {
    getProductos();
  }

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

  function añadirProducto(id) {
    if (nombreUsuario) {
      let valor = [];
      valor[0] = idUser;
      valor[1] = id;
      axios
        .post("http://localhost/Cratos-backend/AnyadirAcarro.php", valor)
        .then((resultado2) => {
          console.log(resultado2.data);
          if (resultado2.data === 1) {
            mostrarPopupCookies("Se ha añadido el producto en tu carro");
          } else {
            //alert("No se ha podido añadir el producto al carro");
            mostrarPopupCookies("Inicia sesión para poder comprar nuestros productos");
          }
        });
    } else {
      mostrarPopupCookies(
        "Inicia sesión para poder comprar nuestros productos"
      );
    }
  }

  return (
    <div>
      <h2 className="descuento" onClick={actualizarProductos}>¡HASTA UN 50% DE DESCUENTO!</h2>
      <hr className="line_o"/>
      <div className="contenedor_ofertas">
        {productos.lista.map((listado, key) => (
          <div className="div_ofertas" key={key}>
            <div className="o_cont1">
              <div className="o_titulo_img">
                <h3>{listado[1]}</h3>
              </div>
              <div className="o_img">
                {listado[6] ? (
                <img
                  className="o_img_size"
                  src={listado[6]}
                />
              ) : (
                <p>Imagen no encontrada</p>
              )}
              </div>
            </div>

            <div className="o_cont2">
              <div className="o_titulo_descripcion">
                <h5>Descripción</h5>
              </div>
              <div id="prueba" className="o_descripcion">
                {listado[3]}
              </div>
              <div className="o_precio">Precio : {listado[4] + "€"}</div>
              <div className="o_porcentaje">
                OFERTA! {listado[5] + "% de descuento"}
              </div>
              <div className="o_total">
                Precio Final :{" "}
                {listado[4] - (listado[4] * listado[5]) / 100 + "€"}
              </div>
              <ul className="o_botones">
                <li>cat: {listado[2]}</li>
                <li>
                  <input
                    type="button"
                    id="añadir"
                    name="añadir"
                    value="AÑADIR AL CARRO"
                    onClick={() => añadirProducto(listado[0])}
                  ></input>
                </li>
                <li>
                  <Link
                    to={`/Detalle/oferta/${listado[0]}`}
                    className="ver-btn"
                  >
                    <button type="button" id="ver" name="ver">
                      VER
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={mostrarPopup} toggle={cerrarPopupCookies} centered>
        <ModalBody>{textoPopup}</ModalBody>
      </Modal>
    </div>
  );
};

export default Ofertas;
