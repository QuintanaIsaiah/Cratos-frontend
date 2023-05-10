//import { useState } from "react";
//import { useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
//import axios from "axios";



const Detalle = () => {

  /*const { id } = useParams();
  const [producto, setProducto] = useState({}); // Estado para almacenar los datos del producto

  useEffect(() => {
    // Función asíncrona para obtener los datos del producto y actualizar el estado
    async function fetchProducto() {
      const resultado = await axios.get(`http://localhost/Cratos-backend/productos.php?id=${id}`);
      setProducto(resultado.data);
    }
    fetchProducto();
  }, [id]); // El hook se ejecuta cuando el valor de `id` cambia

  return (
    <div className='container_detalle'>
      {Object.keys(producto).length !== 0 ? ( // Si el objeto producto tiene propiedades, se muestra la información
        <div>
          <div className='foto_detalle'>
            <img src={require(`../img/${producto.nombre}.jpg`).default} alt={producto.nombre} />
          </div>
          <div className='descripcion_detalle'>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio} €</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p> // Mientras se espera a que se resuelva la promesa
      )}
    </div>
  );
};*/

    const { id } = useParams();
  //Aquí puede usar el valor de "id" para obtener la información del producto y mostrarla en la página de detalle.
  return <h1>Detalle del producto {id}</h1>;
};

export default Detalle;