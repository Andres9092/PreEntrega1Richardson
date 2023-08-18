import React from 'react'
import '../assets/css/ItemDetail.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import ramo1 from '../assets/images/Ramo1.jpg';



function ItemDetail() { 
    return (  
      
      <div className="ItemDet">  
  
        <div className="divContenedorPhone">

            <div className = "nombreVolverPhone">        
                    
                <h1 className="nombreProdPhone">-Bellagio-</h1>
                <Link to ="/productos"> <Button className="botonVolverPhone">Volver a Listado</Button></Link>
                
            </div>
            
            <div className="divFotoDetailPhone">                  
                        
                <img className="ramoPhone" src={ramo1} alt = "Ramo"/>
                            
            </div>  
            
            
            <div className = "detailProdPhone">                   
                <p className="precioProdPhone" >$3000</p>
                <p className="tamanioProdPhone" >Tamanio: Large</p>
                
            </div>

            
            <div className = "botonesDetallePhone"> 

                <div>
                    <Link to ="/carrito"> <Button className="botonAgregarCarrito">Agregar al Carrito </Button> </Link >
                    
                </div>


                <div className = "contadorStockPhone">
                    <div className = "numeroContador"> 1 </div>
                    <Link to ="/products"> <Button className="botonUnidadesDisponiblesPhone">Unidades disponibles</Button></Link >
                </div>                 


            </div>


            <div className = "divDescripProdPhone"> 

                <p className="descripPhone"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.

                    Size approximately 35cm high x 35cm wide. </p>
            </div>

        </div>

        <div className="divContenedorDesktop">
            
                 
            <div className="divFotoDetailDesktop">                  
                        
                <img className="ramo" src="/productos/:id" alt="Ramo"/>
                            
            </div>
            
            
            <div className = "divDetailProdDesktop">        
                
                <div className = "divProdDesktop"> 
                    <h1 className="tituloProdDesktop" href="aaaaa.html">a</h1>
                </div> 

                <div className = "divprecioDektop"> 
                    <p className="precioDesk">$ a</p>
                </div>

                <div className = "divTamanioDektop"> 
                    <p className="tamanioProd">a</p>
                </div>

                <br/>
                <br/>
          
               
                <div className = "botonesDetalle"> 

                    <div>
                        <Link to ="/carrito"> <Button className="botonAgregarCarrito">Agregar al Carrito </Button> </Link >
                        
                    </div>

                    
                    <div>
                        <Link to ="/products"> <Button className="botonUnidadesDisponibles">Unidades disponibles</Button></Link >
                    </div>                 
                    

                </div>

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