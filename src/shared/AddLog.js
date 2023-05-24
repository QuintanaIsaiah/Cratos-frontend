import axios from "axios";
import dayjs from "dayjs";

export const AddLog = async (nombre, accion) => {
  try {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      await axios.post("http://localhost/Cratos-backend/Log/AddLog.php", {
        usuario: nombre,
        accion: accion,
        fecha: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      });
    }
  } catch {
    console.error("No se ha podido registrar el log");
  }
};
