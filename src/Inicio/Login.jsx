import { useState, useEffect } from "react";
import { Form, Button } from "rsuite";
import axios from "axios";
import { USER_LOGIN_URL } from "../shared/routes.js";
import { Alert } from "reactstrap";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasenya, setContrasenya] = useState("");

  const [completado, setCompletado] = useState("");
  const [error, setError] = useState("");

  

  const hideAlerts = () => {
    setTimeout(() => {
      setCompletado("");
      setError("");
    }, 5000);
  };

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post(USER_LOGIN_URL, {
        usuario: usuario,
        contrasenya: contrasenya,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      if (response.data.code === 0){
        setCompletado("Inicio de sesion correcto.");
      }else {
        setError("Credenciales incorrectas.");
      }
      hideAlerts();
    } catch (error) {
      setError(
        "No se pudo registrar el usuario. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <>
      <h1>Inicio de sesión</h1>
      {error && (
        <Alert color="danger" className="alert-fixed">
          {error}
        </Alert>
      )}
      {completado && (
        <Alert color="success" className="alert-fixed">
          {completado}
        </Alert>
      )}
      <Form fluid onSubmit={handleSubmit}>
        <Form.Group controlId="name-group">
          <Form.ControlLabel>Usuario</Form.ControlLabel>
          <Form.Control name="name" onChange={(value) => setUsuario(value)} />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="contrasenya-group">
          <Form.ControlLabel>Contraseña</Form.ControlLabel>
          <Form.Control
            name="contrasenya"
            type="contrasenya"
            onChange={(value) => setContrasenya(value)}
          />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Button type="submit">Iniciar sesión</Button>
      </Form>
    </>
  );
};

export default Login;
