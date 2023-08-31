import React from 'react'
import '../assets/css/NavBar.css';



export function LogoWapp({user = false}) { //Si estoy logueado como 'admin' no se muestra el logo de wapp.

    
  if (! user){
    console.log('No se muestra el logo de wapp')
  
    return(
      <h1></h1>
    )
    
  }
    
  return (  
      
    
    <div>
        <li><a className="logo-wapp-desktop" href="https://api.whatsapp.com/send?phone=+5491168532662"><i className="fa-solid fa-brands fa-whatsapp"></i></a></li> 
  
    </div>
    )
  }
  
  export default LogoWapp;