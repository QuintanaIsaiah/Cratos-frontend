import { Nav, Table } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainAdmin = () => {
  const [active, setActive] = useState("home");
  const history = useNavigate();
  const [action, setAction] = useState("Inicio");



  const Navbar = ({ active, onSelect, ...props }) => {
    return (
      <Nav
        {...props}
        activeKey={active}
        onSelect={onSelect}
        style={{ marginBottom: 50 }}
      >
        <Nav.Item
          eventKey="home"
          icon={<HomeIcon />}
          onClick={() => handleHome}
        >
          Inicio
        </Nav.Item>
        <Nav.Item
          eventKey="news"
          onClick={() => {
            handleUsuarios();
            setAction("Usuarios");
          }}
        >
          Usuarios
        </Nav.Item>
        <Nav.Item eventKey="solutions">Solutions</Nav.Item>
        <Nav.Item eventKey="products">Products</Nav.Item>
        <Nav.Item eventKey="about">About</Nav.Item>
      </Nav>
    );
  };

  const tablaUsuarios = () => {
    return (<>
    <Table>
        <Table.Column>
            
        </Table.Column>
    </Table>
    </>);
  }

  const handleHome = () => {
    history("/MainAdmin");
  };

  const handleUsuarios = () => {
    return <h1>Hola</h1>;
  };

  return (
    <>
      <Navbar appearance="tabs" reversed active={active} onSelect={setActive} />
      {action === "Usuarios" }
    </>
  );
};

export default MainAdmin;
