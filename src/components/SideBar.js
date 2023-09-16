import '../assets/css/NavBar.css';
import '../assets/css/SideBar.css';
import {useState} from 'react';
import {contexto} from './CustomProvider';
import { useContext } from 'react'
import {Link} from 'react-router-dom';

function Sidebar({isOpen,onClose}) {  


  return (  
    
    
   
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>  
                                            
        <button className="close-button" onClick={onClose}>  
          &times;
        </button>
   
    <div>
            <ul className="leftBottomHeaderSideBar">
            

                <div className = "DivExternoIconoPalabraNoCateSideBar">
                    <div className = "DivInternoNoCateSideBar">
                    <Link className="titulosNoCateSideBar" to = "/"><i class="fa-brands fa-pagelines" onClick={onClose}></i></Link>    
                    <Link className="titulosNoCateSideBar" to = "/" onClick={onClose}>Productos</Link>
                    </div>
                </div>

                <div className = "DivExternoIconoPalabraCateSideBar">
                    <div className = "DivInternoBotonCateSideBar">
                
                        <button class="BotonCategoriasSideBar" onClick={onClose}>Categorias<i class="fa fa-caret-down"></i></button>
                        
                    </div>
                    <div class="dropdown-contentSideBar">
                        <Link className="categoriaSideBar" to = "/categorias/L" onClick={onClose}>Tamanio Large (L)</Link>  
                        <Link className="categoriaSideBar" to = "/categorias/M" onClick={onClose}>Tamanio Medium (M)</Link> 
                    </div>

                </div>

                    
                <div className = "DivExternoIconoPalabraNoCateSideBar">
                    <div className = "DivInternoNoCateSideBar">
                    <Link className="titulosNoCateSideBar" to = "/ofertas" onClick={onClose}><i class="fa-solid fa-fire"></i></Link>
                        <Link className="titulosNoCateSideBar" to = "/ofertas" onClick={onClose}>Ofertas!</Link>
                    </div>
                </div>

            
                <div className = "DivExternoIconoPalabraNoCateSideBar">
                    <div className = "DivInternoNoCateSideBar">
                        <Link className="titulosNoCateSideBar" to = "/blog" onClick={onClose}><i class="fa-solid fa-book"></i></Link>
                        <Link className="titulosNoCateSideBar" to = "/blog" onClick={onClose}>Blog</Link>
                    </div>
                </div>

                <div className = "DivExternoIconoPalabraNoCateSideBar">

                    <div className = "DivInternoNoCateSideBar">
                        <Link className="titulosNoCateSideBar" to = "sucursales" onClick={onClose}><i class="fa-solid fa-house"></i></Link>
                        <Link className="titulosNoCateSideBar" to = "sucursales" onClick={onClose}>Sucursales</Link>
                    </div>
                </div>

                <div className = "DivExternoIconoPalabraNoCateSideBar">
                    <div className = "DivInternoNoCateSideBar">
                        <Link className="titulosNoCateSideBar" to = "/contacto" onClick={onClose}><i class="fa-solid fa-phone"></i></Link>
                        <Link className="titulosNoCateSideBar" to = "/contacto" onClick={onClose}>Contacto</Link>
                    </div>
                </div>              
            </ul>    

        </div>
  </div>
);
};

export default Sidebar;
