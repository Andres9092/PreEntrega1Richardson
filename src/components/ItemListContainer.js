import React from 'react'
import {useEffect, useState} from 'react';
import '../assets/css/ItemListContainer.css'
import ProdCards from './ProdCards';
import ramo1 from '../assets/images/Ramo1.jpg';
import ramo2 from '../assets/images/Ramo2.jpg';
import ramo3 from '../assets/images/Ramo3.jpg';
import ramo4 from '../assets/images/Ramo4.jpg';


function ItemListContainer(props) { // Las Props vienen definidas por el Componenete 'Main' -> greeting = Bienvenido!

  const [products, setProduct] = useState([])
  
  useEffect( () => {      // Hoof para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion.
        
    getProducts (products)

  }, [])

  const getProducts = () => {

    console.log('Arranca el pedido a la API..')

    setTimeout( () => {

      console.log('Termina el pedido a la API..')
      let products = [
        {
        id: 1,
        nombre: 'Taormina',
        descripcion: 'A',
        tamanio: 'S',
        precio: 100,
        foto:ramo1

      },
      {
        id: 2,
        nombre: 'Bellagio',
        descripcion: 'B',
        tamanio: 'M',
        precio: 150,
        foto:ramo2

      },
      {
        id: 3,
        nombre: 'Milano',
        descripcion: 'C',
        tamanio: 'L',
        precio: 200,
        foto:ramo3

      },
      {
        id: 4,
        nombre: 'Eucalipto',
        descripcion: 'D',
        tamanio: 'XL',
        precio: 250,
        foto:ramo4

      }]
      setProduct(products)
    },2000)

      {/*fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")  // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
        .then(response => response.json())
        .then(data => {
              setProduct(JSON.parse(JSON.stringify(data.meals)))
              console.log(data)
        })
        .catch(error => console.log(error))*/}

  }
      
  return (  
      
      <div>   {/* etiqueta unica que contiene la aplicacion completa */}
  

                          {/* etiqueta className generada con TAILWIND*/}

          <h1 className="text-3xl  text-orange-500"> {props.greeting} </h1>  {/* importo prop "greeting" con valor de saludo enviado desde Componente 'Main' para Comp. ItemListContainer  */}
     
          {/* -----------------------------------GREETING-BEINVENIDA------------------------------------*/}
          
          {/* -----------------------------------SECTION CARDS------------------------------------*/}

          <section class="seccionCards"> 

            
                <h4 className="tituloListadoProd">LISTADO DE PRODUCTOS</h4>
               
                <ProdCards nombrePropProducts = {products}/>
                      
         
          </section>
  
      </div>

            
    )
  }
  
  export default ItemListContainer;