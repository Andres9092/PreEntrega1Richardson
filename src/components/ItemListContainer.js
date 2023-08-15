import React from 'react'
import {useEffect, useState} from 'react';
import '../assets/css/ItemListContainer.css'
import ProdCards from './ProdCards';


function ItemListContainer(props) { 

  const [product, setProduct] = useState([])
  
  useEffect( () => {   // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
      fetch("http://localhost:4000/api/products")
      .then(response => response.json())
      .then(data => {
            setProduct(JSON.parse(JSON.stringify(data.products)))
            console.log(data)
      })
      .catch(error => console.log(error))

  }, [])

    
  return (  
      
      <div className="ItemList">   {/* etiqueta unica que contiene la aplicacion completa */}
  

                          {/* etiqueta className generada con TAILWIND*/}

          <h1 className="text-3xl  text-orange-500"> {props.greeting} </h1>  {/* importo prop "greeting" con valor de saludo enviado desde Componente 'Main' para Comp. ItemListContainer  */}
     
          {/* -----------------------------------GREETING-BEINVENIDA------------------------------------*/}
          
          {/* -----------------------------------SECTION CARDS------------------------------------*/}

          <section class="cards"> 

            <div className="categoriasProd">
                <h4 className="tituloListadoProd">LISTADO DE PRODUCTOS</h4>
               
                <ProdCards data = {...product} key={i}/>
                      
            </div>
                      
          </section>
  
      </div>

            
    )
  }
  
  export default ItemListContainer;