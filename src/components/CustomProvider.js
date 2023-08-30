import React from 'react'
import {createContext} from 'react';

export const contexto = createContext()







function CustomProvider() { 
    return (  
      
      <div className="CartW">   
        <ul className = "logoCart">        
            
            <li><Link className="iconoCarrito" to = "/carrito"><i class="fa-solid fa-cart-plus"></i></Link></li>
            <p className="numeroCart"> 1 </p>
        </ul>
         
  
      </div>
    )
  }
  
  export default CustomProvider;