import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main/index";
import NavBar from "./shared/NavBar";
//import Footer from "./shared/Footer";
import Login from "./Inicio/Login";
import Register from "./Inicio/Register";
import Carro from "./Inicio/Carro";
import Detalle from './Main/componentes/Detalle';



import Usuario from "./Inicio/Usuario";

import MainAdmin from "./MainAdmin";

// import Inicio from "./Inicio";
// import Main from "./Main";
// import MainAdmin from "./MainAdmin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Main />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Register" element={<Register />}></Route>
    <Route path="/Carro" element={<Carro/>}></Route>
    <Route path="/Usuario" element={<Usuario/>}></Route>
    <Route path="/mainAdmin" element={<MainAdmin />}></Route>
    <Route path="/Detalle/:id" element={<Detalle />} />
    

      {/* 
      <Route path="/Detalle" element={<Detalle />} />

      <Route path="/" element={<Inicio />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Main" element={<Main />}></Route>
      <Route path="/MainAdmin" element={<MainAdmin />}></Route> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);
