import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';


export function CartWidget() {

  const valorDelContexto = useContext(contexto) 
  


  if ((valorDelContexto.user) === 'admin'){
    console.log('Ud no tiene credenciales para entrar al carrito de compras')
  
    return(
      <h1></h1>
    )
    
  }

  const unidadesTotal = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
    (total, item) => total + item.cantidadConfirmadaPorElContadorDelProducto, 0)
  
  
  
  return (  
      
      <div className="CartW">   
        <ul className = "logoCart">        
            
            <li><Link className="iconoCarrito" to = "/carrito"><i class="fa-solid fa-cart-plus"></i></Link></li>
            <div className="fondoRedondoNumeroCart" >               
              <p className="numeroCart" style = {{color : unidadesTotal === 0 ? "red" : "green"}} >  
                {unidadesTotal}   
              
               </p>  
            </div>
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;