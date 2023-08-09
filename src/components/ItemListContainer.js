import React from 'react'
import '../assets/css/ItemList.css'

function ItemListContainer(props) { 
    return (  
      
      <div className="ItemList">   {/* etiqueta unica que contiene la aplicacion completa */}
  

                          {/* etiqueta className generada con TAILWIND*/}

        <h1 className="text-3xl  text-orange-500"> {props.greeting} </h1>  {/* importo prop "greeting" con valor de saludo enviado desde Componente App para Comp. ItemListContainer  */}
       
      </div>
    )
  }
  
  export default ItemListContainer;