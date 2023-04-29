import axios from "axios";
import { CONNECTION_URL } from "../shared/routes.js";
import React from "react";
import Productos from "./componentes/Productos";
import Categoria1 from "./componentes/Categoria1";
import Categoria2 from "./componentes/Categoria2";
import Categoria3 from "./componentes/Categoria3";
import Ofertas from "./componentes/Ofertas";
import { useEffect, useState } from "react";

const Main = () => {

    // Llamo a connection.php para crear la db al cargar la web
    useEffect(() => {
        const crearDB = async () => {
            try {
                await axios.post(CONNECTION_URL);
            } catch (error) {
                // console.log(error);
            }
        };
        crearDB();
    }, []);

      //creamos un estado para la variable "categoriaSeleccionada" con un valor pordefecto
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Productos");

    //Creamos funciones para que cuando clicken en la categoria que quieren, cambie el valor al nombre de la categoria
    function seleccionarTodos(){
        setCategoriaSeleccionada("Productos");
    }
    function seleccionarCat1(){
        setCategoriaSeleccionada("Categoria1");
    }
    function seleccionarCat2(){
        setCategoriaSeleccionada("Categoria2");
    }
    function seleccionarCat3(){
        setCategoriaSeleccionada("Categoria3");
    }

    //Creamos una variable 
    let ComponenteValor;

        //Hacemos condiciones de que si el valor que hay en el estado es = productos guarde en la variable anterior el compoente Productos 
        if(categoriaSeleccionada === "Productos"){
            ComponenteValor = <Productos/>;
        }
        else if (categoriaSeleccionada === "Categoria1"){
            ComponenteValor = <Categoria1/>;
        }
        else if(categoriaSeleccionada === "Categoria2"){
            ComponenteValor = <Categoria2/>;
        }
        else if(categoriaSeleccionada === "Categoria3"){
            ComponenteValor = <Categoria3/>;
        }
        else{
            ComponenteValor = <Productos/>;
        }

        return (
            <div>
                <div className="m-banner">Banner</div>
                <div className="m-ofertas"><Ofertas/></div>
                <div className="m-categorias">
                    <div onClick={seleccionarTodos}><h3>Todos los productos</h3></div>
                    <div onClick={seleccionarCat1}><h3>Categoria 1</h3></div>
                    <div onClick={seleccionarCat2}><h3>Categoria 2</h3></div>
                    <div onClick={seleccionarCat3}><h3>Categoria 3</h3></div>
                </div>
                <div className="m-productos">{ComponenteValor /*La variable contiene el compoenete*/}</div>
            </div>
        );
}

export default Main;