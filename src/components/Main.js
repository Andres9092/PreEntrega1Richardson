import React from 'react'
import ItemListContainer from './ItemListContainer';
import '../assets/css/Main.css'


function Main() { 
    return (  
        <div className="mainContainer">
            <ItemListContainer greeting = "Bienvenido!"> </ItemListContainer> 
                                    {/* Paso al C hijo de su interior (ItemListContainer) la props llamada 'greeting' y su valor 'Bienvenido'. La props es un objeto, clave -valor.*/}
        </div>
    )
  }
  
  export default Main;