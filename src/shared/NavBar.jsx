import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import {Link} from "react-router-dom";
import Usuario from "../Inicio/Usuario";

const NavBar = () => {


  return (
    <div className="NavBarContainer">
      <Link to={"/"} className="linkLogin">CRATOS</Link>
      <Link to={"/Login"} className="linkLogin">Log In</Link>
      <Link to={"/Register"} className="linkLogin">Register</Link>
      <Link to={"/Carro"} className="linkLogin">Carro</Link>
      <Usuario></Usuario>
    </div>
  );
};

export default NavBar;
