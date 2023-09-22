import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {Link} from 'react-router-dom';


export function LogoLogIn() { 

       
  return (  
      
    
    <div>
      <li><Link to="/login" className="logo-login"><i class="fa-solid fa-right-to-bracket"></i></Link></li>
  
    </div>
    )
  }
  
  export default LogoLogIn;