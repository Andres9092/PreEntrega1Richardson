import '../assets/css/NavBar.css';
import '../assets/css/SideBar.css';
import {useState} from 'react';


function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        {/* Toggle button block within the navbar */}
        <div className="toggle-button-block">
          <button className="toggle-button" onClick={toggleSidebar}>
            Toggle
          </button>
        </div>
        {/* End of toggle button block */}
      </div>
    </>
  );
}

export default SideBar;
      

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