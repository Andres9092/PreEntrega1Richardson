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

             
                                                   {/* Si se esta logueado como 'Admin', aparecera el boton para agregar productos nuevos.*/}
function ItemListContainer({props, admin = true})  {    {/*Las Props vienen definidas por el Componenete 'Main' -> greeting = Bienvenido! */}

  const [products, setProduct] = useState([])
    {/*Hook para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion. */}
  useEffect( () => {      
        
    getProducts (products)  

  }, [])

  const handleAddProduct = () => {     {/* funcion para agregar producto nuevo si se esta logueado como User.*/}

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
  }
                     {/*Se crea la fc */}
  const getProducts = () => {   

    console.log('Arranca el pedido a la API..')
                              {/*Retardo de carga de data para simular pedido a API */}
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
    },2000)          

 {/*Modifico edo vacio inicial de 'products */}
      {/*fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")  // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
        .then(response => response.json())
        .then(data => {
              setProduct(JSON.parse(JSON.stringify(data.meals)))
              console.log(data)
        })
        .catch(error => console.log(error))*/}

  }
      
  return (  
      
      <div> 
  

                          {/* etiqueta className generada con TAILWIND*/}

          {/*<h1 className="text-3xl pt-7 ... text-[#cfab35]"> {props.greeting} </h1>*/}  {/* importo prop "greeting" con valor de saludo enviado desde Componente 'Main' para Comp. ItemListContainer  */}
     
          {/* -----------------------------------GREETING-BEINVENIDA------------------------------------*/}
          
          {/* -----------------------------------SECTION CARDS------------------------------------*/}

          <section class="seccionCards"> 

            <div className = "TituloPpal-BotonAgregarProducto">
                <h4 className="tituloListadoProd">LISTADO DE PRODUCTOS</h4>
                {admin && <Link to ="/"> <Button className="botonAgregarProducto" onClick={handleAddProduct}>(+) Agregar Producto</Button></Link >}      {/* Condicional &&, se muestra boton si se esta logueado como 'Admin'*/}
            </div>
                <ItemDetailContainer nombrePropProducts = {products}/>  
                      
         
          </section>
  
      </div>

            
    )
  }
  
  export default ItemListContainer;