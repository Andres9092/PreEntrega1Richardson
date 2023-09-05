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
import {db} from '../firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';

 {/*
const productosHarco = [
  {
  id: 1,
  nombre: 'Taormina',
  descripcion: 'A',
  tamanio: 'M',
  precio: 3500,
  foto:ramo1,
  eucalipto: 'si',
  stock: 10

},
{
  id: 2,
  nombre: 'Bellagio',
  descripcion: 'B',
  tamanio: 'M',
  precio: 6000,
  foto:ramo2,
  eucalipto: 'si',
  stock: 2

},
{
  id: 3,
  nombre: 'Milano',
  descripcion: 'C',
  tamanio: 'L',
  precio: 2000,
  foto:ramo3,
  eucalipto: 'no', 
  stock: 1

},
{
  id: 4,
  nombre: 'Eucalipto',
  descripcion: 'D',
  tamanio: 'L',
  precio: 4300,
  foto:ramo4,
  eucalipto: 'no',
  stock: 10

},
{
  id: 5,
  nombre: 'Eucalipto',
  descripcion: 'D',
  tamanio: 'L',
  precio: 3600,
  foto:ramo5,
  eucalipto: 'si',
  stock: 8

},{
  id: 6,
  nombre: 'Eucalipto',
  descripcion: 'D',
  tamanio: 'M',
  precio: 5200,
  foto:ramo6,
  eucalipto: 'no',
  stock: 0

},{
  id: 7,
  nombre: 'Eucalipto',
  descripcion: 'D',
  tamanio: 'M',
  precio: 2600,
  foto:ramo7,
  eucalipto: 'si',
  stock: 0

},
{
  id: 8,
  nombre: 'Eucalipto',
  descripcion: 'D',
  tamanio: 'M',
  precio: 4500,
  foto:ramo8,
  eucalipto: 'no',
  stock: 4

}];*/}


function ItemCategory() { 
  
  const [products, setProduct] = useState([])
  const [error, setError] = useState("")

  const resultado = useParams()   // useParams() ES UN OBJETO. Captura el objeto obtenido por la ruta. VALORES POSIBLES PARA EL OBJETO useParams.-> {} si se pasa la ruta /, {id: M} si se pasa la ruta /categoria/M, {id: L} si se pasa la ruta /categoria/L}
  console.log('resultado: ', resultado)

  const id = resultado.id //Accedo a =l value de la key.
  console.log('id: ',id)   //{ VALORES POSIBLES PARA EL OBJETO useParams.-> 'undefined' si se pasa la ruta /, M si se pasa la ruta /categoria/M, L si se pasa la ruta /categoria/L}
  
    
  
  useEffect( () => {      // Hook para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion.
   

      const productCollection = collection(db, 'productos')

      const filtroCategoria = query(productCollection,  // filtro todos los productos incluidos en la coleccion 'productos', donde "tamanio" == al 'id' caputrado por ruta a traves del useParams, osea 'M' o 'L' 

                  where("tamanio", "==", id)
        )


      const laConsulta = getDocs (filtroCategoria)   // obtengo todos los productos filtrados.

      laConsulta
      .then((resultado)  => {

        console.log('Representacion del doc :', resultado.docs[0].data)
        console.log('Id del doc :', resultado.docs[0].id)
        console.log('Data del doc :', resultado.docs[0].data())
        //resultado.docs es un array de objetos, pero esos objetos no son los documentos de Firestore con la info directamente, sino una 'representacion'.
        // Cada objeto tiene un Id y un metodo que le extrae la info.

        //Podria poner todo en una misma linea -> setProduct(resultado.docs.map((doc) => ({id: doc.id, ...doc.data()})))
          const aux = resultado.docs.map((doc) => {

          const producto = doc.data()  
          producto.id = doc.id     // agrego key 'id' con value 'doc.id'ca cada objet -> es lo mismo que: {id: doc.id, ...doc.data()}
          console.log('producto :',producto)
          return producto

        })
        console.log('aux :', aux)
        setProduct(aux)

        })

        .catch((error) => {
          console.log('Dio Mal')
        })
        setError(error)

      }, [id]) 


    {/*

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
   
  }, [id])  // Corre todo el efecto del pedido a la 'API' cada vez que se clique en otro link de categoria. */}

  {/*
  const getProducts = () => {
    
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHarco)
      },2000)
    })

    return pedido

  }  */}
 
                   
    return (  
      
      <div className="ComponenteCOntenedorTarjetas">   {/* etiqueta unica que contiene la aplicacion completa */}
  
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
                              Ver Detalle    {/* Al darle click al boton, redirije a la ruta ->  /item/:id , es decir conduce al Comp ItemDetail, definido en C Main. Cada id sera capturado luego de la URL por el useParams y reflejado en Comp ItemDetail. El  id : 1cVNWdY0BDnjelTnoAfL -> el value es el pasado desde por 'products' desde ItemListContainer */}
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