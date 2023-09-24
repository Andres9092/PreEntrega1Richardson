import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {Link} from 'react-router-dom';


export function LogoLogIn() { 

  const valorDelContexto = useContext(contexto);
  console.log('valorDelContexto.displayUser:',valorDelContexto.displayUser)
       
  return (  
      
    
    <div>
      
      {valorDelContexto.displayUser ? (
        <div className="user-display-name">
          {valorDelContexto.displayUser}
        </div>
      ): <li><Link to="/login" className="logo-login"><i class="fa-solid fa-right-to-bracket"></i></Link></li>}
  
    </div>
    )
  }
  
  export default LogoLogIn;