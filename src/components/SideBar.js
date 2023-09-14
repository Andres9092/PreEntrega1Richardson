import '../assets/css/NavBar.css';
import '../assets/css/SideBar.css';
import {useState} from 'react';
import {contexto} from './CustomProvider';
import { useContext } from 'react'
import {Link} from 'react-router-dom';

function Sidebar({isOpen,onClose}) {  // Props del C. NavBar, con data dada por el cambio de estado de isSidebarOpen 
  

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  //   onMenu(isOpen);
  // };

  return (  
    
    
    //`sidebar ${isOpen ? 'open' : ''}`  -> 'isOpen' sera TRUE -> comanda la apertura del sidebar por clase .sidebar.open de css.
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>  
                                              {/* Boton de cierre de SideBar. */}
        <button className="close-button" onClick={onClose}>  
          &times; {/* Unicode for the close icon */}
        </button>
    {/* Sidebar content */}
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
                        <Link className="categoriaSideBar" to = "/categorias/L" onClick={onClose}>Tamanio Large (L)</Link>    {/* /L es el valor -> value del key -> 'id' enviado por ruta y campurado por el useParams */}
                        <Link className="categoriaSideBar" to = "/categorias/M" onClick={onClose}>Tamanio Medium (M)</Link>   {/* /M es el valor -> value del key -> 'id' enviado por ruta y campurado por el useParams */}
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
{/* <div>
            <ul className="leftBottomHeader">
            

                <div className = "DivExternoIconoPalabraNoCate">
                    <div className = "DivInternoNoCate">
                    <Link className="titulosNoCate" to = "/"><i class="fa-brands fa-pagelines"></i></Link>    
                    <Link className="titulosNoCate" to = "/">Productos</Link>
                    </div>
                </div>

                <div className = "DivExternoIconoPalabraCate">
                    <div className = "DivInternoBotonCate">
                
                        <button class="BotonCategorias">Categorias<i class="fa fa-caret-down"></i></button>
                        
                    </div>
                    <div class="dropdown-content">
                     
                        <Link className="categoria" to = "/categorias/L">Tamanio Large (L)</Link>    
                        <Link className="categoria" to = "/categorias/M">Tamanio Medium (M)</Link>   
                    </div>

                </div>

                    
                <div className = "DivExternoIconoPalabraNoCate">
                    <div className = "DivInternoNoCate">
                    <Link className="titulosNoCate" to = "/ofertas"><i class="fa-solid fa-fire"></i></Link>
                        <Link className="titulosNoCate" to = "/ofertas">Ofertas!</Link>
                    </div>
                </div>

            
                <div className = "DivExternoIconoPalabraNoCate">
                    <div className = "DivInternoNoCate">
                        <Link className="titulosNoCate" to = "/blog"><i class="fa-solid fa-book"></i></Link>
                        <Link className="titulosNoCate" to = "/blog">Blog</Link>
                    </div>
                </div>

                <div className = "DivExternoIconoPalabraNoCate">

                    <div className = "DivInternoNoCate">
                        <Link className="titulosNoCate" to = "sucursales"><i class="fa-solid fa-house"></i></Link>
                        <Link className="titulosNoCate" to = "sucursales">Sucursales</Link>
                    </div>
                </div>

                <div className = "DivExternoIconoPalabraNoCate">
                    <div className = "DivInternoNoCate">
                        <Link className="titulosNoCate" to = "/contacto"><i class="fa-solid fa-phone"></i></Link>
                        <Link className="titulosNoCate" to = "/contacto">Contacto</Link>
                    </div>
                </div>              
            </ul>    

        </div>
                       <NavInferior open = {open}/> */}

//     </>
//     )
// }

// export default SideBar