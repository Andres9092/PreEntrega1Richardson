import React from 'react'
import '../assets/css/NavBar.css';
import '../assets/css/Burger.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';
import NavInferior from './NavInferior';
import LogoWapp from './LogoWapp';
import LogoFavoritos from './LogoFavoritos';
import Burger from './Burger';
import {Link} from 'react-router-dom';
import BarraBuscadora from './BarraBuscadora';
import {contexto} from './CustomProvider';
import { useContext } from 'react'


function NavBar() { 

    const {handleSearch} = useContext(contexto)

    return (  
     
        <header className="Header">   {/* etiqueta unica que contiene el NavBar completo */}

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> {/* Importar estilos para el logo burger menu */}
  
            <div className="NavHeader">
                <div className="burger-logo-Phone">   

                   <Burger/>
            
                
                    <Link to ="/"><img className="logoEnjDeco" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/></Link>
                </div>

                <div>
                                                {/* envio prop de nombre 'onSearch' y valor {handleSearch} */}
                    <BarraBuscadora onSearch = {handleSearch} />  

                    {/* <div className="barraBuscadora">
                            

                            <input type="text" name="buscar" className="textoBuscarEnBarra" placeholder="Buscar..."/>
                                
                            <button className="botonSearch-Desktop" type="submit"><i className="fa-solid fa-magnifying-glass botonSearchDektop"></i></button>


                    </div> */}

                </div>

                    
                <div  className="linksyCarritoPhone">   
                    <div className="linksPhone">
                        
                        <ul className = "logosMargenDerechoPhone">

                       
                            <li><a className="iconoBuscarMargenDerecho" href="https://api.whatsapp.com/send?phone=+5491168532662" target="_blank"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            
                            
                            <LogoWapp/> 
                            
                            <LogoFavoritos/> 
                            <li><Link className="logo-user" to="/login"><i class=" fa-solid fa-regular fa-user"></i></Link></li>
                        </ul>

                    </div>
                                                    
                
                    <div>
                        <CartWidget/>          {/* Llamo a C Hijo 'CartWidget' */}

                    </div>
               
                </div>
            
            </div>
                {/* <NavInferior/> */}
        </header>
    )
  }
  
  export default NavBar;