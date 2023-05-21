import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import Banner from './Banner';
import { useParams } from "react-router-dom";
import axios from "axios";



const Detalle = () => {

  const { id, tipo } = useParams();
  console.log(id, tipo);
  const [item, setItem] = useState({});
  //const [producto, setProducto] = useState({}); // Estado para almacenar los datos del producto
  //const [oferta, setOferta] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let consultaURL = '';

        if (tipo === 'producto') {
          console.log(id);
          consultaURL = `http://localhost/Cratos-backend/Productos.php?id=${id}`;
        } else if (tipo === 'oferta') {
          consultaURL = `http://localhost/Cratos-backend/Ofertas.php?id=${id}`;
        }

        const response = await axios.post(
          consultaURL,
          {
            id: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        const itemData = response.data[0];
        console.log(itemData);

        setItem(itemData);

      } catch (error) {
        console.error('Error al obtener los datos del elemento:', error);
      }
    }

    fetchData();
  }, [id, tipo]);// El hook se ejecuta cuando el valor de `id` cambia

  

  return (
    <div className='container_detalle'>
      <Banner />
      {Object.keys(item).length !== 0 ? ( // Si el objeto producto tiene propiedades, se muestra la información
        <div>
          <div className='foto_detalle'>
            <img src={(`../img/${item[0]}.jpg`).default} alt={item.nombre} />
          </div>
          <div className='descripcion_detalle'>
            <h2>{item[1]}</h2>
            <p>{item[2]}</p>
            <p>Precio: {item[3]} €</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p> 
      )}
    </div>
  );
};

export default Detalle;