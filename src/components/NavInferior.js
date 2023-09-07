// import '../assets/css/NavBar.css';
// import {Link} from 'react-router-dom';
// import styled from 'styled-components';

// const DIV = styled.div`

// @media (max-width: 600px){
//     display:none
//     flex-flow: column nowrap;
//     background-color: rgb(249, 247, 223);
//     top:91px;
//     left: 0px;
//     height: 106vh;
//     width: 187px;
//     padding-top:0;
//     border: 1px solid #cfab35;
//     transform: ${({ open }) => open ? 'translateX(-110%)' : 'translateX(0%)'};   
//     transition: transform 0.3s easy-in-out;
    
//     };

//     @media (min-width:600px) {
         
           
//           display: flex;
//           flex-direction: row;
//           justify-content: space-around;
//           align-items: center;
//           width: 100%;
//           position:fixed;
//           background-color: rgb(249, 247, 223);
//           border: solid 1px  #cfab35;
//           height: 50px;
//           align-items: center;
//           top:90px;
//           width: 105%;
//           padding-top: 0;
      
//       };

//       @media (min-width:650px) {
            
         
//           top:100px;
//           width: 105%;
      
//       };

//       @media (min-width:700px) {
        
//             top:110px;
//             width: 105%;
        
//         }
        

//     `;

// function NavInferior({open}) { 
//     return (  
        
//         <DIV  open = {open}>
    
//             <ul className="leftBottomHeader">
            

//                 <div className = "DivExternoIconoPalabraNoCate">
//                     <div className = "DivInternoNoCate">
//                     <Link className="titulosNoCate" to = "/"><i class="fa-brands fa-pagelines"></i></Link>    
//                     <Link className="titulosNoCate" to = "/">Productos</Link>
//                     </div>
//                 </div>

//                 <div className = "DivExternoIconoPalabraCate">
//                     <div className = "DivInternoBotonCate">
                
//                         <button class="BotonCategorias">Categorias<i class="fa fa-caret-down"></i></button>
                        
//                     </div>
//                     <div class="dropdown-content">
//                         <Link className="categoria" to = "/categorias/L">Tamanio Large (L)</Link>    {/* /L es el valor -> value del key -> 'id' enviado por ruta y campurado por el useParams */}
//                         <Link className="categoria" to = "/categorias/M">Tamanio Medium (M)</Link>   {/* /M es el valor -> value del key -> 'id' enviado por ruta y campurado por el useParams */}
//                     </div>

//                 </div>

                    
//                 <div className = "DivExternoIconoPalabraNoCate">
//                     <div className = "DivInternoNoCate">
//                     <Link className="titulosNoCate" to = "/ofertas"><i class="fa-solid fa-fire"></i></Link>
//                         <Link className="titulosNoCate" to = "/ofertas">Ofertas!</Link>
//                     </div>
//                 </div>

            
//                 <div className = "DivExternoIconoPalabraNoCate">
//                     <div className = "DivInternoNoCate">
//                         <Link className="titulosNoCate" to = "/blog"><i class="fa-solid fa-book"></i></Link>
//                         <Link className="titulosNoCate" to = "/blog">Blog</Link>
//                     </div>
//                 </div>

//                 <div className = "DivExternoIconoPalabraNoCate">

//                     <div className = "DivInternoNoCate">
//                         <Link className="titulosNoCate" to = "sucursales"><i class="fa-solid fa-house"></i></Link>
//                         <Link className="titulosNoCate" to = "sucursales">Sucursales</Link>
//                     </div>
//                 </div>

//                 <div className = "DivExternoIconoPalabraNoCate">
//                     <div className = "DivInternoNoCate">
//                         <Link className="titulosNoCate" to = "/contacto"><i class="fa-solid fa-phone"></i></Link>
//                         <Link className="titulosNoCate" to = "/contacto">Contacto</Link>
//                     </div>
//                 </div>              
//             </ul>    
//         </DIV>
                                    
            
     

//     )
//   }
  
//   export default NavInferior