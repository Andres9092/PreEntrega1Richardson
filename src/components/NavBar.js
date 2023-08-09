import React from 'react'
import '../assets/css/NavBar.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';


function NavBar() { 
    return (  
     
        <header className="Header">   {/* etiqueta unica que contiene la aplicacion completa */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> {/* Importar estilos para el logo burger menu */}
  
            <div className="NavHeader">
                <div className="burger-logo-Phone">   

                    <div className="burger-menu">
        
                        <button type="submit" className="botonBurger"><i className="fas fa-bars fa-2x"></i></button>
            
                    </div>  
            
                
                    <img className="logoEnjDeco" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/>
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

                            
                            <li><a className="iconoBuscarMargenDerecho" href="aaaaa.html"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            <li><a className="logo-wapp-desktop" href="aaaaa.html"><i className="fa-solid fa-brands fa-whatsapp"></i></a></li>
                            <li><a className="logo-favoritos" href="aaaaa.html"><i class="fa-solid fa-regular fa-heart"></i></a></li>
                            <li><a className="logo-user" href="aaaaa.html"><i class=" fa-solid fa-regular fa-user"></i></a></li>
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
                    <li ><a className="iconos-pala" href="/">Ramos</a></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-list"></i></li>
                    <li ><a className="iconos-pala" href="/">Categorias</a></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-burst"></i></li>
                    <li ><a className="iconos-pala" href="Ofertas.html">Ofertas!</a></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-book"></i></li>
                    <li ><a className="iconos-pala" href="Blog.html">Blog</a></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-house"></i></li>
                    <li ><a className="iconos-pala" href="Sucursales.html">Sucursales</a></li>
                    </div>

                    <div className = "icono-palabra">
                    <li ><i class="fa-solid fa-phone"></i></li>
                    <li ><a className="iconos-pala" href="Contacto.html">Contacto</a></li>  
                    </div>              
                </ul>    

                                           
                
            </div>

    </header >
    )
  }
  
  export default NavBar;