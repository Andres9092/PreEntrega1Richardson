import React from 'react'
import '../assets/css/NavBar.css';



function CartWidget() { 
    return (  
      
      <div className="CartW">   {/* etiqueta unica que contiene la aplicacion completa */}
  
        <ul className = "logoCart">        
            
            <li><a className="iconoCarrito" href="aaaaa.html"><i class="fa-solid fa-cart-plus"></i></a></li>
            <p className="numeroCart"> 1 </p>
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;