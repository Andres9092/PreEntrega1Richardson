import React from 'react'
import {useEffect, useState} from 'react';
import '../assets/css/ItemListContainer.css'
import ItemDetailContainer from './ItemDetailContainer';
import ramo1 from '../assets/images/Ramo1.jpg';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {db} from '../firebase';
import {getDocs, collection} from 'firebase/firestore';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'

          
                                                 
function ItemListContainer(props)  {    
  
  const valorDelContexto = useContext(contexto)

  const [products, setProduct] = useState([])
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

            // console.log('Representacion del doc :', resultado.docs[0].data)
            // console.log('Id del doc :', resultado.docs[0].id)
            // console.log('Data del doc :', resultado.docs[0].data())
          
            const aux = resultado.docs.map((doc) => {

              const producto = doc.data()  
              producto.id = doc.id   
              // console.log('producto :',producto)
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
        
                                     

  }, []);

  const handleAddProduct = () => {   

    setProduct([                      
      ...products, 

        {id: products.length + 1,
        nombre: 'Nuevo prod agregado',
        descripcion: 'A',
        tamanio: 'M',
        precio: 3500,
        foto:ramo1,
        eucalipto: 'si',
        stock: 10
      }


    ])
  };
                     
  
  return (  
      
      <div> 
  
          <section class="seccionCards"> 
            <BarsLoader {...loaderProps} />
           
            <div className = "TituloPpal-BotonAgregarProducto">
                <h4 className="tituloListadoProd">Productos</h4>
                {valorDelContexto.user === 'admin' && <Link to ="/"> <Button className="botonAgregarProducto" onClick={handleAddProduct}>(+) Agregar Producto</Button></Link >}     
            </div>
            
            {error ? <p>{error}</p> : <ItemDetailContainer nombrePropProducts = {products}/>}   
       
                      
         
          </section>
  
      </div>

            
    )
  }
  
  export default ItemListContainer;