import React from 'react'
import '../assets/css/App.css';
import CartWidget from './CartWidget';


function NavBar() { 
    return (  
      
      <div className="App">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <h1> Enjoying Deco - directo del NavBar </h1>
        <CartWidget>
  

        </CartWidget>

  
  
  
      </div>
    )
  }
  
  export default NavBar;