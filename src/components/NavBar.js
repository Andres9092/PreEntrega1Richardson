import React from 'react'

import '../assets/css/NavBar.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';


function NavBar() { 
    return (  
      
        <header className="NavHeaderPhone">   {/* etiqueta unica que contiene la aplicacion completa */}
  
            <div className="burger-logo-Phone">   

                <div className="burger-menu">
    
                    <button type="submit" className="botonBurger"><i className="fas fa-bars fa-2x"></i></button>
        
                </div>  
        
                <img className="logoEnjDeco" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/>
                
            </div>
                        
    
        <div>
            <CartWidget>          {/* Llamo a C Hijo 'CartWidget' */}
    

            </CartWidget>

        </div>

    </header >
    )
  }
  
  export default NavBar;