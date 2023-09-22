import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {Link} from 'react-router-dom';


export function LogoCreateUser() { 

     
  return (  
      
    
    <div>
        <li><Link className="logo-user" to="/createUser"><i class="fa-solid fa-user-plus"></i></Link></li>
    </div>
    )
  }
  
  export default LogoCreateUser;