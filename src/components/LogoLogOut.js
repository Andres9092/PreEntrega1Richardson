import React from 'react'
import '../assets/css/NavBar.css';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import {Link} from 'react-router-dom';
import 'firebase/compat/auth';                // resolvio problema /compat
import 'firebase/compat/firestore';           // resolvio problema /compat
import firebase from 'firebase/compat/app';   // resolvio problema /compat

 function LogoLogOut() { 

    
  const valorDelContexto = useContext(contexto)
  
  if ((valorDelContexto.user)){
    console.log('Se muestra el logo de Log Out')

    const handleLogout = () => {
      firebase.auth().signOut()
        .then(() => {
          // Sign-out successful.
          console.log("User signed out");
        })
        .catch(error => {
          // An error happened.
          console.error(error);
        });
    };
  
    return(
        <li><Link className="logo-logOut" to="/"><button onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button></Link></li>
    )
    
  }
   
  return (  
      
    <div>
      <h1></h1>
  
    </div>
    )
  }
  
  export default LogoLogOut;