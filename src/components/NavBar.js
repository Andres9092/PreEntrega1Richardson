import React from 'react'
import '../assets/css/NavBar.css';
import '../assets/css/Burger.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';
import NavInferior from './NavInferior';
import Burger from './Burger';
import {Link} from 'react-router-dom';




function NavBar() { 
    return (  
     
        <header className="Header">   {/* etiqueta unica que contiene el NavBar completo */}

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> {/* Importar estilos para el logo burger menu */}
  
            <div className="NavHeader">
                <div className="burger-logo-Phone">   

                   <Burger/>
            
                
                    <Link to ="/"><img className="logoEnjDeco" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/></Link>
                </div>

                <div>
                    <div className="barraBuscadora">
                            

                            <input type="text" name="buscar" className="textoBuscarEnBarra" placeholder="Buscar..."/>
                                
                            <button className="botonSearch-Desktop" type="submit"><i className="fa-solid fa-magnifying-glass botonSearchDektop"></i></button>


                    </div>

                
                </div>

                    
                <div  className="linksyCarritoPhone">   
                    <div className="linksPhone">
                        
                        <ul className = "logosMargenDerechoPhone">

                       
                            <li><a className="iconoBuscarMargenDerecho" href="https://api.whatsapp.com/send?phone=+5491168532662" target="_blank"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            <li><a className="logo-wapp-desktop" href="https://api.whatsapp.com/send?phone=+5491168532662"><i className="fa-solid fa-brands fa-whatsapp"></i></a></li>
                            <li><Link className="logo-favoritos" to="/Favoritos"><i class="fa-solid fa-regular fa-heart"></i></Link></li>
                            <li><Link className="logo-user" to="/User"><i class=" fa-solid fa-regular fa-user"></i></Link></li>
                        </ul>

                    </div>
                                                    
                
                    <div>
                        <CartWidget/>          {/* Llamo a C Hijo 'CartWidget' */}

                    </div>
               
                </div>
            
            </div>
                <NavInferior/>
        </header>
    )
  }
  
  export default NavBar;