import '../assets/css/Accordion.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {useEffect, useState} from 'react';
import ramo1 from '../assets/images/Ramo1.jpg';
import ramo2 from '../assets/images/Ramo2.jpg';
import ramo3 from '../assets/images/Ramo3.jpg';
import ramo4 from '../assets/images/Ramo4.jpg';
import ramo5 from '../assets/images/Ramo5.jpg';
import ramo6 from '../assets/images/Ramo6.jpg';
import ramo7 from '../assets/images/Ramo7.jpg';
import ramo8 from '../assets/images/Ramo8.jpg';
import '../assets/css/Item.css'



function ItemCategory2() { 

    const [products,setProduct] = useState([])
     
    useEffect( () => {      // Hoof para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion.
          
    getProducts (products)
  
    }, [])
  
    const getProducts = () => {
  
      console.log('Arranca el pedido a la API..')
  
      setTimeout( () => {
  
        console.log('Termina el pedido a la API..')
        let products = [
          {
          id: 1,
          nombre: 'Taormina',
          descripcion: 'A',
          tamanio: 'M',
          precio: 3500,
          foto:ramo1,
          eucalipto: 'si'
  
        },
        {
          id: 2,
          nombre: 'Bellagio',
          descripcion: 'B',
          tamanio: 'M',
          precio: 6000,
          foto:ramo2,
          eucalipto: 'si'
  
        },
        {
          id: 3,
          nombre: 'Milano',
          descripcion: 'C',
          tamanio: 'L',
          precio: 2000,
          foto:ramo3,
          eucalipto: 'no'
  
        },
        {
          id: 4,
          nombre: 'Eucalipto',
          descripcion: 'D',
          tamanio: 'L',
          precio: 4300,
          foto:ramo4,
          eucalipto: 'no'
  
        },
        {
          id: 5,
          nombre: 'Eucalipto',
          descripcion: 'D',
          tamanio: 'L',
          precio: 3600,
          foto:ramo5,
          eucalipto: 'si'
  
        },{
          id: 6,
          nombre: 'Eucalipto',
          descripcion: 'D',
          tamanio: 'M',
          precio: 5200,
          foto:ramo6,
          eucalipto: 'no'
  
        },{
          id: 7,
          nombre: 'Eucalipto',
          descripcion: 'D',
          tamanio: 'M',
          precio: 2600,
          foto:ramo7,
          eucalipto: 'si'
  
        },
        {
          id: 8,
          nombre: 'Eucalipto',
          descripcion: 'D',
          tamanio: 'M',
          precio: 4500,
          foto:ramo8,
          eucalipto: 'no'
  
        }] 
        setProduct(products)
      },0)
}

    return (  
      
      <div className="CartW">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <section className="ContenedorDeTarjetas">
              
          {products.filter(prod => prod.tamanio == 'M').map(
              (item,i) => {
                  console.log(item,i)
                  return(
                      <div key={i} className="boxTarjeta">
                      
                          <div className="imagenProdCard">
                              <img className="imagenProd" src = {item.foto} alt="Imagen del producto"/>
                          </div>
                                  
                          <div className="nombreDescripcion">
                                  <p className="nombreProd">-{item.nombre}-</p>
                          </div>
                          <div className="precioTamanio">
                                  <p className="precioProd"> $ {item.precio}</p>
                                  <p className="tamanioProd">Tamanio: {item.tamanio}</p>
                          </div>

                          <Link to ={`/item/${item.id}`}> <Button className="botonDetalle">
                              Ver Detalle
                          </Button> </Link >


                      </div>
                  )
    }
)
} 
          </section>
  
      </div>
    )
  }
  
  export default ItemCategory2;