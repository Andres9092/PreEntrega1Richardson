import React, { useState } from 'react';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import '../assets/css/CartCards.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

function CartCards() {
  
  const valorDelContexto = useContext(contexto)  


return (
  
    <div>
       
      <section className="ContenedorCartCards">
                                
                  
                  {valorDelContexto.cantidadItemsDistintosAgregados.map(   
                  (item,i) => {
                     console.log('item,i :', item,i)
                     return(
                         
                         <div key={i} className="boxCartCardsCart">
                         
                             <div className="divImagenProdCardCartPhone">
                                 <img className="imagenProdCardCartPhone" src = {item.foto} alt="Imagen del producto"/>
                             </div>
                                     
                             <div className="nombreDescripcion">
                                    <p className="nombreProd">Producto</p>
                                     <p className="nombreProd">-{item.nombre}-</p>
                             </div>

                             <div className="precioTamanio">
                                     <p className="precioProd">Precio unitario</p>
                                     <p className="precioProd"> $ {item.precio}</p>
                                     
                             </div>  
                             <div className="precioTamanio">
                                     <p className="precioProd">Subtotal</p>
                                     <p className="tamanioProd">$ {item.tamanio}</p>
                             </div>                                      
             
                         </div>
                     )
                 }
             )}
             
      </section>

    </div>
  )
}

export default CartCards;
