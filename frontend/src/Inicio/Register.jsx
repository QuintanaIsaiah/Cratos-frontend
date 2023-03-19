import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Registro extends React.Component{

    constructor(props){
        super(props);
        this.state = {      //declaramos las variable / información que vamos a recibir del form
            nombre:"",
            correo:"",
            edad:"",
            contrasenya:""
        };
    }

    cambioValor = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value   //todos los elementos que estan siendo alterados vuelve a ponerle sus valores correspondientes
        this.setState({ state});                //volve asignar los mismos etados con setState
    }

    enviarDatos = (e) => {  //función que en parámetros contiene los datos del form
        e.preventDefault();     //prevenir si nos devuelve error el form deteniendo culquier error
        //console.log("Formulario enviado ...");
        
        const {nombre,correo,edad,contrasenya} = this.state;    //Volvemos hacer referencia
            /*console.log(nombre);
            console.log(correo);
            console.log(edad);
            console.log(contrasenya);*/                           //Visualizamos el contenido en consola

        var datosEnviar = {nombre:nombre,correo:correo,edad:edad,contrasenya:contrasenya}   //En un array guardamos los datos en variables
            //console.log(datosEnviar);
        
        if(nombre === ""){
            //alert("Introduce el nombre");
            document.getElementById("help_nombre").innerHTML = "! Introduce el nombre";
            document.getElementById("help_nombre").className += " estilo_error";

                document.getElementById("help_correo").innerHTML = "Introduce tu correo electrónico";
                document.getElementById("help_correo").className = " estilo_pordefecto";
                document.getElementById("help_edad").innerHTML = "Introduce tu edad";
                document.getElementById("help_edad").className = " estilo_pordefecto";
                document.getElementById("help_contrasenya").innerHTML = "Introduce la contraseña para el usuario";
                document.getElementById("help_contrasenya").className = " estilo_pordefecto";
        }
        else if(correo === ""){
            //alert("Introduce el correo");
            document.getElementById("help_correo").innerHTML = "! Introduce el correo";
            document.getElementById("help_correo").className += " estilo_error";

                document.getElementById("help_nombre").innerHTML = "Introduce el nombre del usuario";
                document.getElementById("help_nombre").className = "estilo_pordefecto";
                document.getElementById("help_edad").innerHTML = "Introduce tu edad";
                document.getElementById("help_edad").className = " estilo_pordefecto";
                document.getElementById("help_contrasenya").innerHTML = "Introduce la contraseña para el usuario";
                document.getElementById("help_contrasenya").className = " estilo_pordefecto";
        
        }
        else if(edad === ""){
            //alert("Introduce la edad");
            document.getElementById("help_edad").innerHTML = "! Introduce el edad";
            document.getElementById("help_edad").className += " estilo_error";

                document.getElementById("help_nombre").innerHTML = "Introduce el nombre del usuario";
                document.getElementById("help_nombre").className = "estilo_pordefecto";
                document.getElementById("help_contrasenya").innerHTML = "Introduce la contraseña para el usuario";
                document.getElementById("help_contrasenya").className = " estilo_pordefecto";
                document.getElementById("help_correo").innerHTML = "Introduce tu correo electrónico";
                document.getElementById("help_correo").className = " estilo_pordefecto";
        }
        else if(contrasenya === ""){
            //alert("Introduce el contrasenya");
            document.getElementById("help_contrasenya").innerHTML = "! Introduce la contrasenya";
            document.getElementById("help_contrasenya").className += " estilo_error";

                document.getElementById("help_correo").innerHTML = "Introduce tu correo electrónico";
                document.getElementById("help_correo").className = " estilo_pordefecto";
                document.getElementById("help_nombre").innerHTML = "Introduce el nombre del usuario";
                document.getElementById("help_nombre").className = "estilo_pordefecto";
                document.getElementById("help_edad").innerHTML = "Introduce tu edad";
                document.getElementById("help_edad").className = " estilo_pordefecto";
        }
        else if(contrasenya.length <= 4){
            //alert("La contraseña tiene que ser de 5 carácteres cómo mínimo");
            document.getElementById("help_contrasenya").innerHTML = "! La contraseña tiene que ser de 5 carácteres cómo mínimo";
            document.getElementById("help_contrasenya").className += " estilo_error";

                document.getElementById("help_correo").innerHTML = "Introduce tu correo electrónico";
                document.getElementById("help_correo").className = " estilo_pordefecto";
                document.getElementById("help_nombre").innerHTML = "Introduce el nombre del usuario";
                document.getElementById("help_nombre").className = "estilo_pordefecto";
                document.getElementById("help_edad").innerHTML = "Introduce tu edad";
                document.getElementById("help_edad").className = " estilo_pordefecto";
            
        }
        else{
            axios.post('http://localhost:80/backend/Register.php',datosEnviar)
            .then((result)=>{
                //console.log("Nos Devuelve: "+result.data);
                if(result.data === 1){
                    alert('Usuario registrado correctamente!');
                    //Enviar a la Home
                }
                else{
                    alert("Error al efectuar la sentencia!");
                }
            })
        }
            
    }   


    render(){

        const{nombre,correo,edad,contrasenya} = this.state  //Hacemos referencia que los name de los inputs se guardden en los nombre de los state
                                                            //con el value={nombre} le asignamos el valor del input a la constante nombre que equivale al nombre del this.state
                                                            //Con el onChange={this.nombre} cuando cambie el valor lo referenciamos a una función cambioValor

        return(
            <div className="fondo">
            <div className="contenedor">  
            <div className="card">
                <div className="card-header">
                    <h5>Registro de Usuarios</h5>
                </div>
                <div className="card-body">

                    <form onSubmit={this.enviarDatos}>

                        <div className="form-group">
                          <label htmlFor="">Nombre</label>
                            <input type="text" name="nombre" value={nombre} onChange={this.cambioValor} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"></input> 
                          <small id="help_nombre" className="estilo_pordefecto">Introduce el nombre del usuario</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Correo</label>
                            <input type="email" name="correo" value={correo} onChange={this.cambioValor} id="correo" className="form-control" placeholder="" aria-describedby="helpId"></input>
                          <small id="help_correo" className="estilo_pordefecto">Introduce tu correo electrónico</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Edad</label>
                            <input type="number" name="edad" value={edad} onChange={this.cambioValor} id="edad" className="form-control" placeholder="" aria-describedby="helpId"></input>
                          <small id="help_edad" className="estilo_pordefecto">Introduce tu edad</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Contraseña</label>
                            <input type="password" name="contrasenya" value={contrasenya} onChange={this.cambioValor} id="contrasenya" className="form-control" placeholder="" aria-describedby="helpId"></input>
                          <small id="help_contrasenya" className="estilo_pordefecto">Introduce la contraseña para el usuario</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">

                            <button type="submit" className="btn btn-success">Registrarse</button>
                            <Link to={"/"} className="btn btn-info">Volver</Link>
                        </div>

                    </form>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Registro;