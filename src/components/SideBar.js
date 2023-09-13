import '../assets/css/NavBar.css';
import '../assets/css/SideBar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';


function SideBar() {


const [isOpen, setIsOpen] = useState(false)

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};


 //L es el valor -> value del key -> 'id' enviado por ruta y campurado por el useParams */}
  //M es el valor -> value del key -> 'id' enviado por ruta y campurado por el useParams */}
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            
          <button className="toggle-button" onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button>
        
      </div>  

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

    </>
    )
}

export default SideBar