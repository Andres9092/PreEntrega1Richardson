import '../assets/css/ItemFiltradosBarra.css'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {useEffect, useState} from 'react';
import {db} from '../firebase';
import {getDocs, collection} from 'firebase/firestore';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
import {useContext} from 'react';
import {contexto} from './CustomProvider';
 

function ItemFiltrado() { 

  const valorDelContexto = useContext(contexto) 
  console.log('valorDelContexto.searchTerminoBuscadoEnBarra :',  valorDelContexto.searchTerminoBuscadoEnBarra)
 
  const [products, setProduct] = useState([])

  console.log('productsFiltradosRta :',  products)
 

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

   {/*Hook para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion. */}
  
   const loaderProps = {
    loading,
    size: 40,
    duration: 1,
    colors: ['#c99d0b', '#cfab35']
}
    useEffect( () => {
      
      const productCollection = collection(db, 'productos')
      const laConsulta = getDocs (productCollection)

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
              producto.id = doc.id     // agrego key 'id' con value 'doc.id' a cada objeto -> es lo mismo que: {id: doc.id, ...doc.data()}
              console.log('producto :',producto)
              return producto
            })
            console.log('aux :', aux)


            const prodsFiltradosBarra = aux.filter((item) =>
            item.nombre.toLowerCase().includes(valorDelContexto.searchTerminoBuscadoEnBarra.toLowerCase()),
          
            );

            console.log('prodsFiltradosBarra :', prodsFiltradosBarra)


           setProduct(prodsFiltradosBarra)

          })

          .catch((error) => {
            console.log('Dio Mal')
          })
          setError(error)

          setTimeout(() => {
            setLoading(false)
          },1000)
                                    

  }, []);
 
                   
    return (  
      
      <div className="ComponenteCOntenedorTarjetas">   {/* etiqueta unica que contiene la aplicacion completa */}
        
        <BarsLoader {...loaderProps} />

        <div className = "divTituloProductoFiltradoBarra">
                <h4 className="tituloProdFiltrado">Productos filtrados</h4>
                
        </div>
            

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
  
  export default ItemFiltrado;