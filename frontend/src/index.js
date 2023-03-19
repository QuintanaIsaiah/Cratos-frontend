import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './Inicio';
import Login from "./Inicio/Login";
import Register from "./Inicio/Register";
import Main from "./Main";
import MainAdmin from "./MainAdmin";

import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Main" element={<Main/>}></Route>
          <Route path="/MainAdmin" element={<MainAdmin/>}></Route>
        </Routes>
      </BrowserRouter>
);
