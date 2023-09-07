import React, { useState } from 'react';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import '../assets/css/Carrito.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

function CartItem() {
  
  const valorDelContexto = useContext(contexto)   //valorDelContexto va sin llaves, porque estoy llamando a una variable, no una funcion como en el caso de {addItem}


  console.log('valorDelContexto :', valorDelContexto)
  console.log('valorDelContexto.cantidadItemsDistintosAgregados :', valorDelContexto.cantidadItemsDistintosAgregados.length)



  return (

<div className="carritoGlobal">


    <div className="divTituloCarritoIconoPhone">

          <li className="iconoBag"><i class="fa-solid fa-bag-shopping"></i></li>
          <h1 className="tituloCarrito">Carrito de compras</h1>
        
        </div>
    <div className="cart-item">

        <div className="divBotonVolverPhone">

            <Link to ="/"> <Button className="botonVolverPhone"><i class="fa-solid fa-arrow-rotate-left"></i> Productos</Button></Link>
        </div>
       

        <div>
          <p>Cantidad de items distintos agregados: {valorDelContexto.cantidadItemsDistintosAgregados.length}</p>
          <p>Cantidad total de unidades agregadas: {valorDelContexto.cantidadTotalProductosAgregados}</p>
          <p>Total de su compra: Ar$ {valorDelContexto.montoTotalProductosAgregados}</p>

        </div>

        <div className="divCheckOut-remove">
            <Link to="/checkOut" className="checkOut-button"><i class="fa-solid fa-money-bill"></i>   CheckOut</Link>
                                                                                {/* //valorDelContexto.clearCart()  -> funcion que proviene del CustomProvider */}
            <button className="remove-button" onClick={() => valorDelContexto.clearCart()}>Vaciar carrito</button> 
        </div>

    </div>

</div>    

  );
}

export default CartItem;
