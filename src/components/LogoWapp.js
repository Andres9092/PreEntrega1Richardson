import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';



export function LogoWapp() { 

    
  const valorDelContexto = useContext(contexto)
  
  if ((valorDelContexto.user) === 'admin'){
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