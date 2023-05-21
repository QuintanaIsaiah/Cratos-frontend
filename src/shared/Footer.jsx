import "../index.css";
import logo_blanco1 from '../Main/img/logo_blanco1.svg';
import { Modal, ModalBody } from 'reactstrap';
import { useState } from 'react';
import { Link} from "react-router-dom";

const Footer = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [textoPopup, setTextoPopup] = useState('');

  const mostrarPopupCookies = () => {
    setMostrarPopup(true);
    setTextoPopup(<> <div className="popupText"> Este sitio web utiliza cookies para mejorar su experiencia de navegación. <br /> Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.< br /> Utilizamos cookies para proporcionar funcionalidades básicas del sitio, analizar el tráfico del sitio web y mejorar su experiencia en general.
Al utilizar este sitio web, usted acepta el uso de cookies de acuerdo con nuestra política de privacidad y cookies.</div></>);
  };

  const cerrarPopupCookies = () => {
    setMostrarPopup(false);
  };

  /*Contacto*/

  const correoContacto = 'cratos_contacto@example.com';

  const abrirOutlook = () => {
    window.location.href = `mailto:${correoContacto}`;
  };

  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <img src={logo_blanco1} alt="Logo" className="cratos" />
      </div>
      <div className="linksContainer">
        <span onClick={mostrarPopupCookies}>Cookies</span>
        <Link to="/QuienesSomos" className="quienesSomos">Quiénes somos</Link>
        <span onClick={abrirOutlook}>Contacto</span>
      </div>
       <Modal isOpen={mostrarPopup} toggle={cerrarPopupCookies} centered>
        <ModalBody>{textoPopup}</ModalBody>
      </Modal>
      <div className="copyright">
        &copy; {new Date().getFullYear()} - All rights reserved
      </div>
    </div>
  );
};

export default Footer;
