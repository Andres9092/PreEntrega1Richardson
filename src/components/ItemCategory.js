import '../assets/css/Accordion.css';
import '../assets/css/Item.css'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ramo1 from '../assets/images/Ramo1.jpg';
import ramo2 from '../assets/images/Ramo2.jpg';
import ramo3 from '../assets/images/Ramo3.jpg';
import ramo4 from '../assets/images/Ramo4.jpg';
import ramo5 from '../assets/images/Ramo5.jpg';
import ramo6 from '../assets/images/Ramo6.jpg';
import ramo7 from '../assets/images/Ramo7.jpg';
import ramo8 from '../assets/images/Ramo8.jpg';

const productosHarco = [
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
  eucalipto: 'no'}
];


function ItemCategory() { 
  
  const [products,setProduct] = useState([])

  const resultado = useParams()   // useParams() ES UN OBJETO. Captura el objeto obtenido por la ruta. VALORES POSIBLES PARA EL OBJETO useParams.-> {} si se pasa la ruta /, {id: M} si se pasa la ruta /categoria/M, {id: L} si se pasa la ruta /categoria/L}
  console.log('resultado: ', resultado)

  const id = resultado.id //Accedo a =l value de la key.
  console.log('id: ',id)   //{ VALORES POSIBLES PARA EL OBJETO useParams.-> 'undefined' si se pasa la ruta /, M si se pasa la ruta /categoria/M, L si se pasa la ruta /categoria/L}
  
    useEffect( () => {      // Hook para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion.
   
      if (id) {             //si se pasa un valor luego de /productos/  =>, si existe L o M

        console.log("Filtro talle:" + id);
        console.log('productosHarco: ', productosHarco) ;

        const productosFiltrados = []

        for(let i=0; i < productosHarco.length; i++){
          
          const prod = productosHarco[i]

          if(prod.tamanio === id){
            productosFiltrados.push(prod)

          }
          
        }
        console.log('productosFiltrados: ', productosFiltrados) 
     
        setProduct(productosFiltrados)   //'products' cambia de estado y ahora tiene los objetos de 'productosFiltrados'.
    
        }else{
          setProduct(productosHarco) //'products' cambia de estado y ahora tiene los objetos de 'productosHarco', osea TODOS.
      }
   
  }, [id])  // Corre todo el efecto del pedido a la 'API' cada vez que se clique en otro link de categoria. 

  
  const getProducts = () => {
    
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHarco)
      },2000)
    })

    return pedido
  }
 
                   
    return (  
      
      <div className="CartW">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <section className="ContenedorDeTarjetas">   {/* {products.filter(prod => prod.tamanio == 'L') */}
              
          {products.map(
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

                          <Link to ={`/productos/${item.id}`}> <Button className="botonDetalle">
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
  
  export default ItemCategory;