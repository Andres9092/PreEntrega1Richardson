import React from 'react'
import '../assets/css/ItemDetail.css';
import imagenRamo from '../assets/images/Ramo.jpg';



function ItemDetail() { 
    return (  
      
      <div className="ItemDet">  
  
        <div className="divContenedorPhone">
            
            <div className="divFotoDetail">                  
                        
                <img className="ramo" src={imagenRamo} alt="Ramo"/>
                            
            </div>  
            
            
            <div className = "detailProd">        
                
                <h1 className="nombreProd">-Nombre del producto-</h1>
                <p className="precioProd" >$ Precio del producto</p>
                
            </div>

            <div className = "divDescripProd"> 

                <p className="descrip"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.

                    Size approximately 35cm high x 35cm wide. </p>
            </div>

        </div>

        <div className="divContenedorDesktop">
            
                      
            <div className="divFotoDetailDesktop">                  
                        
                <img className="ramo" src={imagenRamo} alt="Ramo"/>
                            
            </div>  
            
            
            <div className = "divDetailProdDesktop">        
                
                <div className = "divProdDesktop"> 
                    <h1 className="tituloProdDesktop" href="aaaaa.html">-Nombre del producto-</h1>
                </div> 

                <div className = "divprecioDektop"> 
                    <p className="precioDesk">$ Precio del producto</p>
                </div>

                <br/>
                <br/>
          
                <div className = "divDescripDektop"> 
                    <p className="descripDesk"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.
                
                    Size approximately 35cm high x 35cm wide. </p>
                </div>
            </div>

        </div>
         
  
      </div>
    )
  }
  
  export default ItemDetail;