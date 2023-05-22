import React from "react";
import { Nav, Navbar } from "rsuite";

const MenuHorizontal = ({ handleClickUsuarios, handleClickProductos }) => {
  return (
    <div className="menuAdmin">
      <Navbar appearance="inverse">
        <Nav>
          <Nav.Item
            href="#"
            className="menuAdminNavItem"
            onClick={handleClickUsuarios}
          >
            Usuarios
          </Nav.Item>
          <Nav.Item
            href="#"
            className="menuAdminNavItem"
            onClick={handleClickProductos}
          >
            Productos
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MenuHorizontal;
