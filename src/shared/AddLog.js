import axios from "axios";

export const AddLog = async (nombre, accion) => {
  try {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      await axios.post("http://localhost/Cratos-backend/Log/AddLog.php", {
        usuario: nombre,
        accion: accion,
      });
    }
  } catch {
    console.error("No se ha podido registrar el log");
  }
};
