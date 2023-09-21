import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {Link} from 'react-router-dom';


export function LogoCreateUser() { 

    
  const valorDelContexto = useContext(contexto)
  
  if ((!valorDelContexto.user)){
    console.log('No se muestra el logo de create user')
  
    return(
        <li><Link className="logo-user" to="/createUser"><i class="fa-solid fa-user-plus"></i></Link></li>
    )
    
  }
    
  return (  
      
    
    <div>
        <h1></h1>
    </div>
    )
  }
  
  export default LogoCreateUser;