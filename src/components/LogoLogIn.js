import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {Link} from 'react-router-dom';


export function LogoLogIn() { 

    
  const valorDelContexto = useContext(contexto)
  
  if ((!valorDelContexto.user)){

    <h1></h1>
    console.log('Se muestra el logo de Log In')
      
    return(
      <li><Link to="/login" className="logo-login"><i class="fa-solid fa-right-to-bracket"></i></Link></li>
    )
    
  }
    
  return (  
      
    
    <div>
     <h1>{valorDelContexto.user}</h1>
  
    </div>
    )
  }
  
  export default LogoLogIn;