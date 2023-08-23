import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';



function NavInferior() { 
    return (  
      
        <div className="NavInferior">
   
        <ul className="leftBottomHeader">
        

            <div className = "DivExternoIconoPalabraNoCate">
                <div className = "DivInternoNoCate">
                    <i class="fa-brands fa-pagelines"></i>
                   <Link className="titulosNoCate" to = "/item">Productos</Link>
                </div>
            </div>

            <div className = "DivExternoIconoPalabraCate">
                <div className = "DivInternoBotonCate">
              
                    <button class="BotonCategorias">Categorias<i class="fa fa-caret-down"></i></button>
                    
                </div>
                <div class="dropdown-content">
                    <Link className="categoria" to = "/categorias/1">Tamanio Large (L)</Link>
                    <Link className="categoria" to = "/categorias/2">Tamanio Medium (M)</Link>
                </div>

            </div>

                
            <div className = "DivExternoIconoPalabraNoCate">
                <div className = "DivInternoNoCate">
                    <i class="fa-solid fa-burst"></i>
                    <Link className="titulosNoCate" to = "/ofertas">Ofertas!</Link>
                </div>
            </div>

         
            <div className = "DivExternoIconoPalabraNoCate">
                <div className = "DivInternoNoCate">
                    <i class="fa-solid fa-book"></i>
                    <Link className="titulosNoCate" to = "/blog">Blog</Link>
                </div>
            </div>

            <div className = "DivExternoIconoPalabraNoCate">

                <div className = "DivInternoNoCate">
                    <i class="fa-solid fa-house"></i>
                    <Link className="titulosNoCate" to = "sucursales">Sucursales</Link>
                </div>
            </div>

            <div className = "DivExternoIconoPalabraNoCate">
                <div className = "DivInternoNoCate">
                    <i class="fa-solid fa-phone"></i>
                    <Link className="titulosNoCate" to = "/contacto">Contacto</Link>
                </div>
            </div>              
        </ul>    

                                   
        
    </div>

    )
  }
  
  export default NavInferior;