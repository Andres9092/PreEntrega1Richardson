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
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'

 

function ItemCategory() { 
  
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loaderProps = {
    loading,
    size: 40,
    duration: 1,
    colors: ['#c99d0b', '#cfab35']}

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


        setTimeout(() => {
          setLoading(false)
        },1000)


      }, [id]) 
 
                   
    return (  
      
      <div className="ComponenteCOntenedorTarjetas">   {/* etiqueta unica que contiene la aplicacion completa */}
        
        <BarsLoader {...loaderProps} />

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
                          <br></br>
                          
                          <div className="stock">
                                       {/*Condicional color stock segun prop item.stock*/}
                            <p style = {{color : item.stock == 0 ? "red" : "green"}}>Stock: {item.stock}</p> 
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