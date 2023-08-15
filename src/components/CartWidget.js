import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';


function CartWidget() { 
    return (  
      
      <div className="CartW">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <ul className = "logoCart">        
            
            <li><Link className="iconoCarrito" to = "/Cart"><i class="fa-solid fa-cart-plus"></i></Link></li>
            <p className="numeroCart"> 1 </p>
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;