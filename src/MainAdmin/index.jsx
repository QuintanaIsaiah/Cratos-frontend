import { useState } from "react";
import MenuHorizontal from "./componentes/MenuHorizontal";

// PRODUCTOS
import ProductosAdmin from "./componentes/ProductosAdmin";
import ProductosAdminActualizar from "./componentes/ProductosAdminActualizar";
import ProductosAdminCrear from "./componentes/ProductosAdminCrear";

// USUARIOS
import UsuariosAdmin from "./componentes/UsuariosAdmin";
import UsuariosAdminActualizar from "./componentes/UsuariosAdminActualizar";
//import UsuariosAdminCrear from "./componentes/UsuariosAdminCrear";

const MainAdmin = () => {
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [mostrarProductosCrear, setMostrarProductosCrear] = useState(false);
  const [mostrarProductosActualizar, setMostrarProductosActualizar] =
    useState(false);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [mostrarUsuariosCrear, setMostrarUsuariosCrear] = useState(false);
  const [mostrarUsuariosActualizar, setMostrarUsuariosActualizar] =
    useState(false);

  const handleClickProductos = () => {
    setMostrarProductos(true);
    setMostrarProductosCrear(false);
    setMostrarProductosActualizar(false);
    setMostrarUsuarios(false);
    setMostrarUsuariosCrear(false);
    setMostrarUsuariosActualizar(false);
  };

  const handleClickProductosCrear = () => {
    setMostrarProductos(false);
    setMostrarProductosCrear(true);
    setMostrarProductosActualizar(false);
    setMostrarUsuarios(false);
    setMostrarUsuariosCrear(false);
    setMostrarUsuariosActualizar(false);
  };

  const handleClickProductosActualizar = () => {
    setMostrarProductos(false);
    setMostrarProductosCrear(false);
    setMostrarProductosActualizar(true);
    setMostrarUsuarios(false);
    setMostrarUsuariosCrear(false);
    setMostrarUsuariosActualizar(false);
  };

  const handleClickUsuarios = () => {
    setMostrarProductos(false);
    setMostrarProductosCrear(false);
    setMostrarProductosActualizar(false);
    setMostrarUsuarios(true);
    setMostrarUsuariosCrear(false);
    setMostrarUsuariosActualizar(false);
  };

  const handleClickUsuariosCrear = () => {
    setMostrarProductos(false);
    setMostrarProductosCrear(false);
    setMostrarProductosActualizar(false);
    setMostrarUsuarios(false);
    setMostrarUsuariosCrear(true);
    setMostrarUsuariosActualizar(false);
  };

  const handleClickUsuariosActualizar = () => {
    setMostrarProductos(false);
    setMostrarProductosCrear(false);
    setMostrarProductosActualizar(false);
    setMostrarUsuarios(false);
    setMostrarUsuariosCrear(false);
    setMostrarUsuariosActualizar(true);
  };

  return (
    <div>
      {/* MENU CABECERA */}
      <MenuHorizontal
        handleClickUsuarios={handleClickUsuarios}
        handleClickProductos={handleClickProductos}
      />
      {/* PRODUCTOS */}
      {mostrarProductos && (
        <ProductosAdmin
          handleClickProductosCrear={handleClickProductosCrear}
          handleClickProductosActualizar={handleClickProductosActualizar}
        />
      )}
      {mostrarProductosCrear && (
        <ProductosAdminCrear handleClickProductos={handleClickProductos} />
      )}
      {mostrarProductosActualizar && (
        <ProductosAdminActualizar handleClickProductos={handleClickProductos} />
      )}
      {/* USUARIOS */}
      {mostrarUsuarios && (
        <UsuariosAdmin
          handleClickUsuariosCrear={handleClickUsuariosCrear}
          handleClickUsuariosActualizar={handleClickUsuariosActualizar}
        />
      )}

      {mostrarUsuariosActualizar && (
        <UsuariosAdminActualizar handleClickUsuarios={handleClickUsuarios} />
      )}
    </div>
  );
};

export default MainAdmin;
