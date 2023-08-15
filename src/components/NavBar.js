import React from 'react'
import '../assets/css/NavBar.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';
import {Link, Switch, Route} from 'react-router-dom';


function NavBar() { 
    return (  
     
        <header className="Header">   {/* etiqueta unica que contiene el NavBar completo */}

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> {/* Importar estilos para el logo burger menu */}
  
            <div className="NavHeader">
                <div className="burger-logo-Phone">   

                    <div className="burger-menu">
        
                        <button type="submit" className="botonBurger"><i className="fas fa-bars fa-2x"></i></button>
            
                    </div>  
            
                
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

                       
                            <li><a className="iconoBuscarMargenDerecho" href="https://api.whatsapp.com/send?phone=+5491168532662"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            <li><a className="logo-wapp-desktop" href="https://api.whatsapp.com/send?phone=+5491168532662"><i className="fa-solid fa-brands fa-whatsapp"></i></a></li>
                            <li><Link className="logo-favoritos" to="/Favoritos"><i class="fa-solid fa-regular fa-heart"></i></Link></li>
                            <li><Link className="logo-user" to="/User"><i class=" fa-solid fa-regular fa-user"></i></Link></li>
                        </ul>

                    </div>
                                                    
                
                    <div>
                        <CartWidget>          {/* Llamo a C Hijo 'CartWidget' */}

                        </CartWidget>

                    </div>
                </div>
            
            </div>

            <div className="NavInferior">
   
                <ul className="leftBottomHeader">
                
                    
                    <div className = "icono-palabra">
                        <li ><i class="fa-brands fa-pagelines"></i></li>
                        <li ><Link className="iconos-pala" to = "/Ramos">Ramos</Link></li>
                    </div>

                    <div className = "icono-palabra">
                        <li ><i class="fa-solid fa-list"></i></li>
                        <li ><Link className="iconos-pala"  to = "/Categorias">Categorias</Link></li>
                    </div>

                    <div className = "icono-palabra">
                        <li ><i class="fa-solid fa-burst"></i></li>
                        <li ><Link className="iconos-pala" to = "/Ofertas">Ofertas!</Link></li>
                    </div>

                 
                    <div className = "icono-palabra">
                        <li ><i class="fa-solid fa-book"></i></li>
                        <li ><Link className="iconos-pala" to = "/Blog">Blog</Link></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-house"></i></li>
                    <li ><Link className="iconos-pala" to = "/Sucursales">Sucursales</Link></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-phone"></i></li>
                    <li ><Link className="iconos-pala" to = "/Contacto">Contacto</Link></li>  
                    </div>              
                </ul>    

                                           
                
            </div>

        </header >
    )
  }
  
  export default NavBar;