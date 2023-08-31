import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';


export function CartWidget({user = false}) { //Si no estoy logueado como 'user' no se muestra el logo de Carrito.

  const valorDelContexto = useContext(contexto)
  const cantidadComprasCarrito = valorDelContexto.cantidadTotal
    
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
            <p className="numeroCart" style = {{color : cantidadComprasCarrito == 0 ? "red" : "green"}} >   {/*Condicional de color en linea segun valor de variable global importada */}
              {valorDelContexto.cantidadTotal}   
            </p>    {/* valorDelContexto es la variable prop global, proveniente de CustomProvider. */}
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;