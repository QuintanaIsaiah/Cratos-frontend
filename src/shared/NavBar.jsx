import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import {Link} from "react-router-dom";
import Usuario from "../Inicio/Usuario";
import logo_cratos from '../Main/img/logo_cratos.svg';

const NavBar = () => {

  function cerrarSesion(){
    alert("cierrosesion");
    localStorage.setItem("usuario", "");
    window.location.reload();
  }

  return (
    <nav>
    <div className="NavBarContainer">
      <Link to={"/"} className="logo"><img src={logo_cratos} alt="Logo de la empresa" /></Link>
    <div className="navLinksContainer">
      <Link to={"/Login"} className="linkLogin">Log In</Link>
      <span>|</span>
      <span className="linkCerrarSesion" onClick={cerrarSesion}>Log out</span>
      <span>|</span>
      <Link to={"/Register"} className="linkLogin">Register</Link>
      <span>|</span>
      <Link to={"/Carro"} className="linkLogin">Carro</Link>
      <span>|</span>
      <span className="linkCerrarSesion">User<Usuario></Usuario></span>
    </div>
    </div>
    </nav>
  );
};

export default NavBar;
