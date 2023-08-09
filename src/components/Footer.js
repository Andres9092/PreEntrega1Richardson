import React from 'react'
import '../assets/css/Footer.css';
import imagenlogo from '../assets/images/logoEnj.png';
import imageDF from '../assets/images/dataFiscal.png';



function Footer() { 
    return (  


        <footer className="footer">   

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> {/* Importar estilos para el logo burger menu */}
  

            <div className="logo-footer-Phone">                  
                    
                <img className="logoEnjDecoFooter" src={imagenlogo} alt="ImagenmLogo Enjoying Deco"/>
                    
            </div>  

            <div className="linea">                  
                           
            </div>  
    

            <div className="zocalo-phone"> 

                <a href="https://www.afip.gob.ar/960/formulario-960/concepto.asp"><img className="dataFiscal-phone" src = {imageDF} alt="Data Fiscal"/></a>
                <div className="infoSocalo">
                    <li >© 2023 - Enjoying Deco - Todos los derechos reservados</li>
                </div>                 
                           
            </div>  





        </footer> 
    )


}
export default Footer;
