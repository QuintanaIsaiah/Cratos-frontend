import React, { useState, useEffect } from "react";

const Usuario = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    setNombreUsuario(localStorage.getItem("usuario"));
  }, [nombreUsuario]);

  return <div>{":  " + nombreUsuario}</div>;
};

export default Usuario;
