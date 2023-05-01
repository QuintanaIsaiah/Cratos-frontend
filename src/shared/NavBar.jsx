import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import {Link} from "react-router-dom";
import logo_cratos from '../Main/img/logo_cratos.svg';


const NavBar = () => {


  return (
    /*<div className="NavBarContainer">
      <Link to={"/"} className="logo"><img src={logo_cratos} alt="Logo de la empresa" /></Link>
      <Link to={"/Login"} className="linkLogin">Log In</Link>
      <Link to={"/Register"} className="linkLogin">Register</Link>
      <Link to={"/Carro"} className="linkLogin">Carro</Link>
    </div>*/

    <div className="NavBarContainer">
    <Link to={"/"} className="logo"><img src={logo_cratos} alt="Logo de la empresa" /></Link>
    <div className="navLinksContainer">
      <Link to={"/Login"} className="linkLogin">Log In</Link>
      <span>|</span>
      <Link to={"/Register"} className="linkLogin">Register</Link>
      <span>|</span>
      <Link to={"/Carro"} className="linkLogin">Carro</Link>
    </div>
  </div>
  );
};

export default NavBar;
