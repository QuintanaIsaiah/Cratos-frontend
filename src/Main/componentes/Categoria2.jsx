import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Categoria1 = () => {
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
      .get("http://localhost/Cratos-backend/Categoria2.php")
      .then(function (resultado) {
        setProductos({ lista: resultado.data });
      });
  }

  //Creamos una funcion para que actualizar los datos , llamando de nuevo a getProductos
  function actualizarProductos() {
    getProductos();
  }

  //Creamos función para añadir productos recibiendo su id por parametro (onclick={()=>añadir(lista[0])})
  function añadirProducto(id) {
    axios
      .post("http://localhost/Cratos-backend/a%C3%B1adirAcarro.php", id)
      .then(function (resultado) {
        if (resultado.data === 1) {
          alert("Producto añadido al carro");
        } else {
          alert("No se ha podido añadir el producto al carro");
        }
      });
  }

  return (
    <div className="t-l-cat2">
      <h2 onClick={actualizarProductos}>Categoria 2</h2>

      <div className="contenedor_producto">
        {productos.lista.map((listado, key) => (
          <div className="div_producto" key={key}>
            <div className="p_titulo">
              <h3>{listado[1]}</h3>
            </div>
            <div className="p_img">{listado[1] + ".png"}</div>
            <div id="prueba" className="p_descripcion">
              {listado[3]}
            </div>
            <div className="p_precio">Precio : {listado[4] + "€"}</div>
            <ul className="p_botones">
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
                <input type="button" id="ver" name="ver" value="VER"></input>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria1;
