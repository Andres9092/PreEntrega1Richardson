import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '../assets/css/Accordion.css';
import {Link} from 'react-router-dom';


export default function Example() {
  return (
    <Accordion>
      <AccordionItem className= "divCate" header="- Categorias -">
        <ul className="listaCategorias">                  
                    
                    <li><Link  to="/Categorias">Productos</Link></li>
                    <li><Link  to="/Ofertas">Sale - Ofertas</Link></li>
                    <li><Link  to="/Sucursales">Sucursal</Link></li>  
                    <li><Link  to="/Preguntas">Preguntas frecuentes</Link></li>   
        </ul>  
    
      </AccordionItem>

      <AccordionItem className= "divContact" header="- Contacto -">
          <ul className="listaContacto">                  
                   
                    <li><a href="https://api.whatsapp.com/send?phone=+5491168532662" target="_blank">+54 911-6853-2662</a></li>
                    <li><a href="mailto:enjoyingdeco@gmail.com" target="_blank">enjoyingdeco@gmail.com</a></li>
                    <li>Av. Puerredon 1724, piso 1 - CABA</li>
                    
                    
          </ul>  
      </AccordionItem>

    </Accordion>
  );
}