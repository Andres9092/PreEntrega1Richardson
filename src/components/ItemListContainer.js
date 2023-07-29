import React from 'react'
import '../assets/css/App.css'

function ItemListContainer(props) { 
    return (  
      
      <div className="App">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <h1> {props.greeting} </h1>  {/* importo prop "greeting" con valor de saludo enviado desde Componente App para Comp. ItemListContainer  */}
       
  
      </div>
    )
  }
  
  export default ItemListContainer;