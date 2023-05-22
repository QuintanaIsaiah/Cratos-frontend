import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main/index";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
import Login from "./Inicio/Login";
import Register from "./Inicio/Register";
import Carro from "./Inicio/Carro";
import Detalle from "./Main/componentes/Detalle";
import QuienesSomos from "./Main/componentes/QuienesSomos";
import ProductosAdmin from "./MainAdmin/componentes/ProductosAdmin";
import ProductosAdminCrear from "./MainAdmin/componentes/ProductosAdminCrear";
import ProductosAdminActualizar from "./MainAdmin/componentes/ProductosAdminActualizar";

import Usuario from "./Inicio/Usuario";

import MainAdmin from "./MainAdmin";

// import Inicio from "./Inicio";
// import Main from "./Main";
// import MainAdmin from "./MainAdmin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Carro" element={<Carro />}></Route>
          <Route path="/Usuario" element={<Usuario />}></Route>
          <Route path="/mainAdmin" element={<MainAdmin />}></Route>
          <Route path="/Detalle/:tipo/:id" element={<Detalle />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
          <Route path="/ProductosAdmin" element={<ProductosAdmin />}></Route>
          <Route
            path="/ProductosAdminCrear"
            element={<ProductosAdminCrear />}
          ></Route>
          <Route
            path="/ProductosActualizar"
            element={<ProductosAdminActualizar />}
          ></Route>
          {/* <Route path="/" element={<Inicio />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Main" element={<Main />}></Route>
      <Route path="/MainAdmin" element={<MainAdmin />}></Route> */}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  //commit de prueba
);
