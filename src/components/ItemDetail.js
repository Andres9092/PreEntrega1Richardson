import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/ItemDetail.css';


function ItemDetail(props) { 
    return (  
      
      <div className="ItemDet">  
  
        <div className="divContenedorPhone">
            
            <div className="divFotoDetail">                  
                        
                <img className="ramo" src="/productos/:id" alt = "Ramo"/>
                            
            </div>  
            
            
            {/* <div className = "detailProd">        
                
                <h1 className="nombreProd">{item.nombre}</h1>
                <p className="precioProd" >${item.precio}</p>
                <p className="tamanioProd" >{item.tamanio}</p>
                
            </div> */}

            <div className = "divDescripProd"> 

                <p className="descrip"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.

                    Size approximately 35cm high x 35cm wide. </p>
            </div>

        </div>

        <div className="divContenedorDesktop">
            
                      
            {/* <div className="divFotoDetailDesktop">                  
                        
                <img className="ramo" src={item.foto} alt="Ramo"/>
                            
            </div>  
            
            
            <div className = "divDetailProdDesktop">        
                
                <div className = "divProdDesktop"> 
                    <h1 className="tituloProdDesktop" href="aaaaa.html">{item.nombre}</h1>
                </div> 

                <div className = "divprecioDektop"> 
                    <p className="precioDesk">$ {item.precio}</p>
                </div>

                <div className = "divTamanioDektop"> 
                    <p className="tamanioProd">{item.tamanio}</p>
                </div>

                <br/>
                <br/>
          
                <div className = "divDescripDektop"> 
                    <p className="descripDesk"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.
                
                    Size approximately 35cm high x 35cm wide. </p>
                </div>
            </div> */}

        </div>
         
  
      </div>
    )
  }
  
  export default ItemDetail;