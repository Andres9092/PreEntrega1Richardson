import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';


function CartWidget() { 

  const valorDelContexto = useContext(contexto)
    return (  
      
      <div className="CartW">   
        <ul className = "logoCart">        
            
            <li><Link className="iconoCarrito" to = "/carrito"><i class="fa-solid fa-cart-plus"></i></Link></li>
            <p className="numeroCart"> {valorDelContexto.cantidadTotal} </p>
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;