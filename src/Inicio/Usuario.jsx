import React, { useState, useEffect } from "react";
import axios from "axios";

const Usuario = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    const usuarioAlmacenado = localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
      setNombreUsuario(usuarioAlmacenado);

      axios
        .post("http://localhost/Cratos-backend/Usuario_Mostrar.php", {
          usuario: usuarioAlmacenado
        })
        .then((response) => {
          console.log("IDE DEL USUARIO: " + response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return <div>{":  "+nombreUsuario}</div>;
};

export default Usuario;
