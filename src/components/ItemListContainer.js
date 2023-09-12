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

          
                                                   {/* Si se esta logueado como 'Admin', aparecera el boton para agregar productos nuevos.*/}
function ItemListContainer(props)  {    {/*Las Props vienen definidas por el Componenete 'Main' -> greeting = Bienvenido! */}
  
  const valorDelContexto = useContext(contexto)

  const [products, setProduct] = useState([])
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

  const handleAddProduct = () => {     //funcion para agregar producto nuevo si se esta logueado como User.

    setProduct([                       // ...products -> trae el array de objetos de los productos incial y le agrega al final el producto nuevo.
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
                {valorDelContexto.user === 'admin' && <Link to ="/"> <Button className="botonAgregarProducto" onClick={handleAddProduct}>(+) Agregar Producto</Button></Link >}      {/* Condicional &&, se muestra boton si se esta logueado como 'Admin'*/}
            </div>
            
            {error ? <p>{error}</p> : <ItemDetailContainer nombrePropProducts = {products}/>}   {/* Paso prop  'products' con nombre 'nombrePropProducts' al Comp hijo ItemDetailContainer*/}
       
                      
         
          </section>
  
      </div>

            
    )
  }
  
  export default ItemListContainer;