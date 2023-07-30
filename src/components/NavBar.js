import React from 'react'
import '../assets/css/NavBar.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';


function NavBar() { 
    return (  

        
      
        <header className="NavHeaderPhone">   {/* etiqueta unica que contiene la aplicacion completa */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> {/* Importar estilos para el logo burger menu */}
  
            <div className="burger-logo-Phone">   

                <div className="burger-menu">
    
                    <button type="submit" className="botonBurger"><i className="fas fa-bars fa-2x"></i></button>
        
                </div>  
        
               
                <img className="logoEnjDeco" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/>
            </div>

                
            <div  className="linksyCarritoPhone">   
                <div className="linksPhone">
                    
                    <ul className = "logosMargenDerechoPhone">

                        
                        <li><a className="iconoBuscarMargenDerecho" href="aaaaa.html"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a className="logo-wapp-desktop" href="aaaaa.html"><i className="fa-brands fa-whatsapp"></i></a></li>
                    </ul>

                </div>
                            
            
                <div>
                    <CartWidget>          {/* Llamo a C Hijo 'CartWidget' */}

                    </CartWidget>

                </div>

            </div>

    </header >
    )
  }
  
  export default NavBar;