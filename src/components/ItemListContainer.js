import React from 'react'
import '../assets/css/ItemListContainer.css'
import ItemDetail from './ItemDetail';

function ItemListContainer(props) { 
    return (  
      
      <div className="ItemList">   {/* etiqueta unica que contiene la aplicacion completa */}
  

                          {/* etiqueta className generada con TAILWIND*/}

        <h1 className="text-3xl  text-orange-500"> {props.greeting} </h1>  {/* importo prop "greeting" con valor de saludo enviado desde Componente App para Comp. ItemListContainer  */}
     
        <ItemDetail>
        
        </ItemDetail>



      </div>


      
    )
  }
  
  export default ItemListContainer;