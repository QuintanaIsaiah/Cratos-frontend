import { useState } from "react";
import MenuHorizontal from "./componentes/MenuHorizontal";
import ProductosAdmin from "./componentes/ProductosAdmin";
import ProductosAdminActualizar from "./componentes/ProductosAdminActualizar";
import ProductosAdminCrear from "./componentes/ProductosAdminCrear";
import UsuariosAdmin from "./componentes/UsuariosAdmin";
import UsuariosAdminActualizar from "./componentes/UsuariosAdminActualizar";
import UsuariosAdminCrear from "./componentes/UsuariosAdminCrear";

const MainAdmin = () => {
  const [mostrarComponente, setMostrarComponente] = useState(null);

  const mostrarProductos = () => {
    setMostrarComponente("productos");
  };

  const mostrarProductosCrear = () => {
    setMostrarComponente("productosCrear");
  };

  const mostrarProductosActualizar = () => {
    setMostrarComponente("productosActualizar");
  };

  const mostrarUsuarios = () => {
    setMostrarComponente("usuarios");
  };

  const mostrarUsuariosCrear = () => {
    setMostrarComponente("usuariosCrear");
  };

  const mostrarUsuariosActualizar = () => {
    setMostrarComponente("usuariosActualizar");
  };

  const renderComponente = () => {
    switch (mostrarComponente) {
      case "productos":
        return (
          <ProductosAdmin
            handleClickProductosCrear={mostrarProductosCrear}
            handleClickProductosActualizar={mostrarProductosActualizar}
          />
        );
      case "productosCrear":
        return <ProductosAdminCrear handleClickProductos={mostrarProductos} />;
      case "productosActualizar":
        return (
          <ProductosAdminActualizar handleClickProductos={mostrarProductos} />
        );
      case "usuarios":
        return (
          <UsuariosAdmin
            handleClickUsuariosCrear={mostrarUsuariosCrear}
            handleClickUsuariosActualizar={mostrarUsuariosActualizar}
          />
        );
      case "usuariosCrear":
        return <UsuariosAdminCrear handleClickUsuarios={mostrarUsuarios} />;
      case "usuariosActualizar":
        return (
          <UsuariosAdminActualizar handleClickUsuarios={mostrarUsuarios} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* MENU CABECERA */}
      <MenuHorizontal
        handleClickUsuarios={mostrarUsuarios}
        handleClickProductos={mostrarProductos}
      />

      {/* Renderizar componente */}
      {renderComponente()}
    </div>
  );
};

export default MainAdmin;
