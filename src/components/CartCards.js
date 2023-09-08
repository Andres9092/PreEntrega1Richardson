import React, { useState } from 'react';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import '../assets/css/CartCards.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

function CartCards() {
  
  const valorDelContexto = useContext(contexto)  
  const cantUnitaria = valorDelContexto.cantidadItemsDistintosAgregados.cantidadConfirmadaPorElContador
  console.log('cantUnitaria :',cantUnitaria)

  // const handleCallback = (cantidadConfirmadaPorElContador) => {  //'cantidadConfirmada' trae el valor seteado de 'contador' en el C hijo 'Contador'

  //   setCantidad(cantidadConfirmadaPorElContador)  // setea nuevo valor a 'cantidad'
  //   console.log("La cantidad confirmada por el contador es: ", cantidadConfirmadaPorElContador )
    

  //  console.log("product: ", product )
  //  console.log("product.precio: ", product.precio)
  
  //  addItem(product,cantidadConfirmadaPorElContador)  //Se devuelve a la funcion importada 'addItem' del C. Padre, los valores 'product' y 'cantidadConfirmadaPorElContador'
  // }
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
                                    <p className="titulosColumnas">Producto</p>
                                     <p className="dataColumnas">{item.nombre}</p>
                             </div>

                             <div className="cantidadUnidades">
                                     <p className="titulosColumnas">Unidad</p>
                                     <p className="dataColumnas"> $ {item.precio}</p>
                                     
                             </div>  

                             <div className="precioTamanio">
                                     <p className="titulosColumnas">Cantidad</p>
                                     <p className="dataColumnas"> {valorDelContexto.cantidadItemsDistintosAgregados[i].cantidadConfirmadaPorElContador}</p>
                                  
                                     
                             </div>  

                             

                             <div className="precioTamanio">
                                     <p className="titulosColumnas">Subtotal</p>
                                     <p className="dataColumnas">$ {item.precio * valorDelContexto.cantidadItemsDistintosAgregados[i].cantidadConfirmadaPorElContador}</p>
                             </div>    

                              <div className="divRemoveButton">
                                <button className="removeProduct-button" onClick={() => valorDelContexto.removeItem()}><i class="fa-solid fa-circle-xmark"></i></button> 
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
