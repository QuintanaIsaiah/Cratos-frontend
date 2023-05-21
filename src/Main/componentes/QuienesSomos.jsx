import React from 'react';
import Banner from './Banner';
import team from '../img/team.jpg';


const QuienesSomos = () => {

    return (
        <div>
        <Banner />
        <div className="titulo-q">
            <h2>SOBRE NOSOTROS</h2>
        </div>
        <hr className="line1"></hr>
        <div className="Contenido">
          <div className="equipo">
          <img src= {team} alt="Imagen" />
          <div className="nosotros">
            <p> Cratos es el nombre del dios griego de la fuerza. < br/>< br/>
            Somos una empresa joven, que tiene como objetivo proporcionar el mejor asesoramiento< br/>
            y equipamiento deportivo a personas con diversidad funcional; que practiquen deportes acuáticos.
            < br/>< br/>
            ¿Y porqué Cratos? Si Nike es el nombre de la diosa griega de la victoria, nosotros somos Cratos.< br/> 
            Porque nuestros clientes necesitan tener toda la fuerza, tanto la física como la psicológica,< br/> 
            para sobreponerse a sus circunstancias y disfrutar del deporte... Con toda la fuerza.
            < br/>< br/>
            Estamos en contacto con los mejores fabricantes, y estamos trabajando para tener nuestro < br/>
            taller propio. De este modo podremos ajustar el equipamiento de forma adecuada y personalizarlo < br/>
            para que nuestros clientes dispongan de productos únicos, hechos prácticamente para ellos.
            < br/>< br/>
            Nuestro objetivo es poder esponsorizar a deportistas que puedan participar a nivel competición en < br/>
            pruebas deportivas, e incluso algún día poder formar parte del equipo de las paraolimpiadas. ¡Quién sabe! < br/>
            </p>
          </div>
        </div>
        <div className="pie">Foto de Huy Chien Tran.</div>
        </div>
        </div>
        
    )
 };

 export default QuienesSomos;