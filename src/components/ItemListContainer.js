import React from 'react'
import {useEffect, useState} from 'react';
import '../assets/css/ItemListContainer.css'
import ItemDetailContainer from './ItemDetailContainer';
import ramo1 from '../assets/images/Ramo1.jpg';
import ramo2 from '../assets/images/Ramo2.jpg';
import ramo3 from '../assets/images/Ramo3.jpg';
import ramo4 from '../assets/images/Ramo4.jpg';
import ramo5 from '../assets/images/Ramo5.jpg';
import ramo6 from '../assets/images/Ramo6.jpg';
import ramo7 from '../assets/images/Ramo7.jpg';
import ramo8 from '../assets/images/Ramo8.jpg';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {db} from '../firebase';
import {getDocs, collection} from 'firebase/firestore';

          
                                                   {/* Si se esta logueado como 'Admin', aparecera el boton para agregar productos nuevos.*/}
function ItemListContainer(props)  {    {/*Las Props vienen definidas por el Componenete 'Main' -> greeting = Bienvenido! */}
  
  const valorDelContexto = useContext(contexto)

  const [products, setProduct] = useState([])
  const [error, setError] = useState("")
    
  {/*Hook para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion. */}
   
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
        
                                      //  getProducts (products)

  }, []);

  const handleAddProduct = () => {     //funcion para agregar producto nuevo si se esta logueado como User.

    setProduct([                       // ...products -> trae el array de objetos de los productos incial y le agrega al final el producto nuevo.
      ... products, 

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
                     
  {/*Se crea la fc */}
    {/* const getProducts = () => {   */}

    
     {/* console.log('Arranca el pedido a la API..')  */}
                              {/*Retardo de carga de data para simular pedido a API */}
     {/* setTimeout( () => {  

      console.log('Termina el pedido a la API..')
      let products = [
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

      }]          
      setProduct(products)  
    },2000)          */}

 {/*Modifico edo vacio inicial de 'products */}
      {/*fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")  // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
        .then(response => response.json())
        .then(data => {
              setProduct(JSON.parse(JSON.stringify(data.meals)))
              console.log(data)
        })
        .catch(error => console.log(error))*/}
    
  return (  
      
      <div> 
  

                          {/* etiqueta className generada con TAILWIND*/}

          {/*<h1 className="text-3xl pt-7 ... text-[#cfab35]"> {props.greeting} </h1>*/}  {/* importo prop "greeting" con valor de saludo enviado desde Componente 'Main' para Comp. ItemListContainer  */}
     
          {/* -----------------------------------GREETING-BEINVENIDA------------------------------------*/}
          
          {/* -----------------------------------SECTION CARDS------------------------------------*/}

          <section class="seccionCards"> 

            <div className = "TituloPpal-BotonAgregarProducto">
                <h4 className="tituloListadoProd">LISTADO DE PRODUCTOS</h4>
                {valorDelContexto.user === 'admin' && <Link to ="/"> <Button className="botonAgregarProducto" onClick={handleAddProduct}>(+) Agregar Producto</Button></Link >}      {/* Condicional &&, se muestra boton si se esta logueado como 'Admin'*/}
            </div>
            
            {error ? <p>{error}</p> : <ItemDetailContainer nombrePropProducts = {products}/>}   {/* Paso prop  'products' con nombre 'nombrePropProducts' al Comp hijo ItemDetailContainer*/}
       
                      
         
          </section>
  
      </div>

            
    )
  }
  
  export default ItemListContainer;