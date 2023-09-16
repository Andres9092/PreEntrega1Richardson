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
           
            const aux = resultado.docs.map((doc) => {

              const producto = doc.data()  
              producto.id = doc.id    
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
      
      <div className="ComponenteCOntenedorTarjetas">  
        
        <BarsLoader {...loaderProps} />

        <div className = "divTituloProductoFiltradoBarra">
          
          <h4 className="tituloProdFiltrado">Productos filtrados</h4>
                
        </div>
            
        <div className='divBotonVolver'>
          <Link to ="/"> <Button className="botonVolver"><i class="fa-solid fa-arrow-rotate-left"></i> Productos</Button></Link>
        </div>

        <section className="ContenedorDeTarjetas">  
              
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
                                    
                            <p style = {{color : item.stock == 0 ? "red" : "green"}}>Stock: {item.stock}</p> 
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
  
  export default ItemFiltrado;