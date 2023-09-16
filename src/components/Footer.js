import React from 'react'
import '../assets/css/Footer.css';
import imagenlogo from '../assets/images/logoEnj.png';
import imageDF from '../assets/images/dataFiscal.png';
import imageVISA from '../assets/images/VISA.png';
import imageAMEX from '../assets/images/AMEX (1).png';
import imageMP from '../assets/images/MP.png';
import Accordion from './Accordion';
import {Link} from 'react-router-dom';


function Footer() { 
    return (  


        <footer className="footer">   

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
  

            <div className="logo-footer-Phone">                  
                    
            <Link to ="/"><img className="logoEnjDecoFooter" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/></Link>
                    
            </div>  

            <div className="linea">                  
                           
            </div> 

            <div className="logosRedes">                  
                    
                <li ><a href="https://www.instagram.com/"  target="_blank"><i class="fa-brands fa-instagram fa-x"></i></a></li>
                <li ><a href="https://es-la.facebook.com/"  target="_blank"><i class="fa-brands fa-facebook fa-x"></i></a></li>
                <li ><a href="https://www.youtube.com/"  target="_blank"><i class="fa-brands fa-youtube fa-x"></i></a></li>
                <li ><a href="https://www.pinterest.com.ar/"  target="_blank"><i class="fa-brands fa-pinterest-p fa-x"></i></a></li>
                
            </div>  

            <div className="logosRedes700px">                  
                    
                <li ><a href="https://www.instagram.com/"  target="_blank"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
                <li ><a href="https://es-la.facebook.com/"  target="_blank"><i class="fa-brands fa-facebook fa-2x"></i></a></li>
                <li ><a href="https://www.youtube.com/"  target="_blank"><i class="fa-brands fa-youtube fa-2x"></i></a></li>
                <li ><a href="https://www.pinterest.com.ar/"  target="_blank"><i class="fa-brands fa-pinterest-p fa-2x"></i></a></li>
                
            </div>  

            <div className="linea">                  
                           
            </div> 

            <div>  
                <Accordion>

                </Accordion>

         
            </div> 

            <div className="linea"> </div>
            <div className="mediosP">- Medios de Pago -</div>
             
                            
            <div className="logosTarjetas">                  
                    
                <li><a href="https://www.visa.com.ar/" target="_blank"><img className="mediosPago" src={imageVISA} alt="Tarjeta VISA"/></a></li>
                <li><a href="https://www.americanexpress.com/es-ar/" target="_blank"><img className="mediosPago" src={imageAMEX} alt="Tarjeta AMEX"/></a></li>
                <li><a href="https://www.mercadopago.com.ar/" target="_blank"><img className="mediosPago" src={imageMP} alt="MERCADO PAGO"/></a></li>
                    
            </div>  
                    
         
                
            <div className="logosTarjetas700">                  
                    
                <li><a href="https://www.visa.com.ar/" target="_blank"><img className="mediosPago" src={imageVISA} alt="Tarjeta VISA"/></a></li>
                <li><a href="https://www.americanexpress.com/es-ar/" target="_blank"><img className="mediosPago" src={imageAMEX} alt="Tarjeta AMEX"/></a></li>
                <li><a href="https://www.mercadopago.com.ar/" target="_blank"><img className="mediosPago" src={imageMP} alt="MERCADO PAGO"/></a></li>
                    
            </div> 
 
        
            <div className="footer-content">
                <div className="divlogosWappZocalo">
                    <div className="logosWappZocalo">                  
                            
                        <li><a href="https://api.whatsapp.com/send?phone=+5491168532662" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                    
                            
                    </div>  

                </div>   

                <div className="zocalo-phone"> 

                    <a href="https://www.afip.gob.ar/960/formulario-960/concepto.asp"><img className="dataFiscal" src = {imageDF} alt="Data Fiscal"/></a>
                    <div className="infoSocalo">
                        <li >© 2023 - Enjoying Deco - Todos los derechos reservados</li>
                    </div>                 
                            
                </div>  
            </div>

        </footer> 
    )


}
export default Footer;
