import React from 'react'
import '../assets/css/ItemList.css'

function ItemListContainer(props) { 
    return (  
      
      <div className="ItemList">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <h1 className="greeting"> {props.greeting} </h1>  {/* importo prop "greeting" con valor de saludo enviado desde Componente App para Comp. ItemListContainer  */}
       
  
      </div>
    )
  }
  
  export default ItemListContainer;