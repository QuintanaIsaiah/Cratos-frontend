import { Form, Alert, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { USER_REGISTER_URL } from "../shared/routes.js";

const Register = () => {
  const [completado, setCompletado] = useState("");
  const [error, setError] = useState("");

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleNombreChange = (event) => setNombre(event.target.value);
  const handleEdadCHange = (event) => setEdad(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePassword1Change = (event) => setPassword1(event.target.value);
  const handlePassword2Change = (event) => setPassword2(event.target.value);

  // Funcion para ocultar alertas
  const hideAlerts = () => {
    setTimeout(() => {
      setCompletado("");
      setError("");
    }, 5000);
  };

  // Form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // VALIDACIONES
    // Se comprueban campos rellenos
    if (!nombre || !edad || !email || !password1 || !password2) {
      setError("Por favor, complete todos los campos.");
      hideAlerts();
      return;
    }

    // Se comprueba que las contraseñas son iguales
    if (password1 !== password2) {
      setError("Las contraseñas no coinciden.");
      hideAlerts();
      return;
    }

    // Creo objeto para enviar al back
    const data = {
      nombre: nombre,
      edad: edad,
      email: email,
      password: password1,
    };

    // PETICION POST
    try {
      const response = await axios.post(USER_REGISTER_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setCompletado(response.data.message);
    } catch (error) {
      setError(
        "No se pudo registrar el usuario. Por favor, inténtelo de nuevo."
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="formulario">
        <h1>Registro</h1>
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
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apellido1">Edad</Label>
          <Input
            type="number"
            min={0}
            id="apellido1"
            name="apellido1"
            value={edad}
            onChange={handleEdadCHange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Correo Electrónico</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password1">Contraseña</Label>
          <Input
            type="password"
            id="password1"
            name="password1"
            value={password1}
            onChange={handlePassword1Change}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password2">Confirmar contraseña</Label>
          <Input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={handlePassword2Change}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Registrarse
        </Button>
      </Form>
    </>
  );
};

export default Register;
