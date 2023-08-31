import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';

export function LogoFavoritos({user = false}) { //Si estoy logueado como 'admin' no se muestra el logo de wapp.

    
  if (! user){
    console.log('No se muestra el logo de favoritos')
  
    return(
      <h1></h1>
    )
    
  }
    
  return (  
      
    
    <div>
       <li><Link className="logo-favoritos" to="/Favoritos"><i class="fa-solid fa-regular fa-heart"></i></Link></li>
  
    </div>
    )
  }
  
  export default LogoFavoritos;