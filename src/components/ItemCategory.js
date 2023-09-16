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

  const resultado = useParams()   
  console.log('resultado: ', resultado)

  const id = resultado.id 
  console.log('id: ',id)   
  
  

  
  useEffect( () => {     
   

      const productCollection = collection(db, 'productos')

      const filtroCategoria = query(productCollection, 

                  where("tamanio", "==", id)
        )


      const laConsulta = getDocs (filtroCategoria)  

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
      
      <div className="ComponenteCOntenedorTarjetas">  
        
        <BarsLoader {...loaderProps} />

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
  
  export default ItemCategory;