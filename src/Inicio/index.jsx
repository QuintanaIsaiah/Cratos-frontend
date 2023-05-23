import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Inicio() {
  let history = useNavigate();

  const [body, setBody] = useState({
    nombre: "",
    contrasenya: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const enviarDatos = body;

    if (body.nombre === "") {
      //alert("Introduce el nombre del usuario");
      document.getElementById("name").innerHTML =
        "!Introduce el nombre del usuario";
      document.getElementById("name").className = "estilo_error";

      document.getElementById("pass").innerHTML = "Introduce la contraseña";
      document.getElementById("pass").className = "estilo_pordefecto";
    } else if (body.contrasenya === "") {
      //alert("Introduce la contraseña");
      document.getElementById("pass").innerHTML = "!Introduce la contraseña";
      document.getElementById("pass").className = "estilo_error";

      document.getElementById("name").innerHTML =
        "Introduce el nombre del usuario";
      document.getElementById("name").className = "estilo_pordefecto";
    } else {
      axios
        .post("http://localhost/backend/Login.php", enviarDatos)
        .then((result) => {
          switch (result.data) {
            case 1:
              //alert("Eres admin");
              //Ruta navegate para enviar al panel del admin
              history("/MainAdmin");
              break;
            case 2:
              //alert("Eres usuario");
              //Ruta navegate para enviar a la Home
              history("/MainAdmin");
              break;

            default:
              //alert("No se ha encontrado el usuario indicado");
              document.getElementById("pass").innerHTML =
                "!Credenciales Incorrectas!";
              document.getElementById("pass").className = "estilo_error";
              document.getElementById("name").innerHTML =
                "!Credenciales Incorrectas!";
              document.getElementById("name").className = "estilo_error";
              break;
          }
        });
    }
  };

  return (
    <div className="fondo">
      <div className="contenedor">
        <div className="card">
          <div className="card-header">
            <h5>Login</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={body.nombre}
                  onChange={inputChange}
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <small id="name" className="text-muted">
                  Introduce el nombre
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  name="contrasenya"
                  id="contrasenya"
                  value={body.contrasenya}
                  onChange={inputChange}
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <small id="pass" className="text-muted">
                  Introduce la contraseña
                </small>
              </div>

              <div className="btn-group pr" role="group" aria-label="">
                <button
                  type="button"
                  onClick={onSubmit}
                  className="btn btn-dark"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="card-footer text-muted p">
            <p>Registrate si no tienes usuario</p>
            <p>
              <Link
                to={"/Register"}
                className="btn btn-secondary"
                role="button"
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
