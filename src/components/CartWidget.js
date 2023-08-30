import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';


export function CartWidget({user = true}) { //Si no estoy logueado como 'user' no se muestra el logo de Carrito.

  const valorDelContexto = useContext(contexto)
    
  if (! user){
    console.log('Ud no tiene credenciales para entrar al carrito de compras')
  
    return(
      <h1></h1>
    )
    
  }
  
  
  return (  
      
      <div className="CartW">   
        <ul className = "logoCart">        
            
            <li><Link className="iconoCarrito" to = "/carrito"><i class="fa-solid fa-cart-plus"></i></Link></li>
            <p className="numeroCart"> {valorDelContexto.cantidadTotal} </p>    {/* valorDelContexto es la variable prop global, proveniente de CustomProvider. */}
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;