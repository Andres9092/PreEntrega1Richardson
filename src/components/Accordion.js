import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '../assets/css/Accordion.css';

export default function Example() {
  return (
    <Accordion>
      <AccordionItem className= "divCate" header="- Categorias -">
        <ul className="listaCategorias">                  
                    
                    <li ><a href="https://www.instagram.com/">Productos</a></li>
                    <li ><a href="https://es-la.facebook.com/">Sale - Ofertas</a></li>
                    <li ><a href="https://www.youtube.com/">Preguntas frecuentes</a></li>
                    <li ><a href="https://www.youtube.com/">Sucursal</a></li>
                 
                    
        </ul>  
    
      </AccordionItem>

      <AccordionItem className= "divContact" header="- Contacto -">
          <ul className="listaContacto">                  
                    
                    <li >Celular: 011-6853-2662</li>
                    <li >E-mail: enjoyingdeco@gmail.com</li>
                    <li >Direccion: Av. Puerredon 1724, piso 1 - CABA</li>
                    
                    
          </ul>  
      </AccordionItem>

    </Accordion>
  );
}