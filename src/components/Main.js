import React from 'react'
import ItemListContainer from './ItemListContainer';


function Main() { 
    return (  
      
        <ItemListContainer greeting = "Bienvenido!"> </ItemListContainer> 
                                    /* Paso al C hijo de su interior (ItemListContainer) la props llamada 'greeting' y su valor 'Bienvenido'. La props es un objeto, clave -valor.*/
    )
  }
  
  export default Main;