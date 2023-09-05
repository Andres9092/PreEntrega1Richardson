import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';


export function LogoFavoritos() { //Si estoy logueado como 'admin' no se muestra el logo de wapp.

  const valorDelContexto = useContext(contexto)
    
  if ((valorDelContexto.user) === 'admin'){
    console.log('No se muestra el logo de favoritos')
  
    return(
      <h1></h1>
    )
    
  }
    
  return (  
      
    
    <div>
       <li><Link className="logo-favoritos" to="/favoritos"><i class="fa-solid fa-regular fa-heart"></i></Link></li>
  
    </div>
    )
  }
  
  export default LogoFavoritos;