import React from 'react'
import '../assets/css/NavBar.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';
import NavInferior from './NavInferior';
import LogoWapp from './LogoWapp';
import LogoFavoritos from './LogoFavoritos';
import SideBar from './SideBar';
import {Link} from 'react-router-dom';
import BarraBuscadora from './BarraBuscadora';
import {contexto} from './CustomProvider';
import { useContext } from 'react'


function NavBar() { 

    const {handleSearch} = useContext(contexto)
   
    const valorDelContexto = useContext(contexto)
   
 
    return (  
     
        <header className="Header">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> 
  
            <div className="NavHeader">

                
                <div className="burger-logo-Phone">   
                                                             
                    <button className="burger-button" onClick={ valorDelContexto.toggleSidebar }>
                                &#9776; 
                    </button>
                                          
                    <SideBar isOpen={valorDelContexto.isSidebarOpen} onClose={valorDelContexto.toggleSidebar} />
                    
                    <Link to ="/">
                        <img className="logoEnjDeco" src={imagenlogo} alt="Imagen Logo Enjoying Deco"/>
                    </Link>
                </div>

                <div>
                                              
                    <BarraBuscadora onSearch = {handleSearch} />  


                </div>

                    
                <div  className="linksyCarritoPhone">   
                    <div className="linksPhone">
                        
                        <ul className = "logosMargenDerechoPhone">

                       
                            <li><a className="iconoBuscarMargenDerecho" href="https://api.whatsapp.com/send?phone=+5491168532662" target="_blank"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            
                            
                            <LogoWapp/> 
                            
                            <LogoFavoritos/> 
                            <li><Link className="logo-user" to="/createUser"><i class=" fa-solid fa-regular fa-user"></i></Link></li>
                        </ul>

                    </div>
                                          
                    <div>
                        <CartWidget/>        
                    </div>
               
                </div>
            
            </div>
                <NavInferior/> 
        </header>
    )
  }
  
  export default NavBar;