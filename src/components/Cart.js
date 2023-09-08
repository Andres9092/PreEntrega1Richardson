import React, { useState } from 'react';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import '../assets/css/Cart.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import CartCards from './CartCards';

function Cart() {
  
  const valorDelContexto = useContext(contexto)   //valorDelContexto va sin llaves, porque estoy llamando a una variable, no una funcion como en el caso de {addItem}


  console.log('valorDelContexto :', valorDelContexto)
  console.log('valorDelContexto.arrayDeObjetosDeProductosAgregados :', valorDelContexto.arrayDeObjetosDeProductosAgregados.length)


  
  if (valorDelContexto.arrayDeObjetosDeProductosAgregados.length === 0){
    return (

      <div className="divCarritoVacio">
        <p className='textoCarritoVacio'>No hay productos en el carrito.</p>
        <div className="divBotonVolverPhoneCarritoVacio">
            <Link to ="/" className=""><i class="fa-solid fa-arrow-rotate-left"></i> Productos</Link>
        </div>
      </div>
    )

}

return (

<div className="carritoGlobal">


    <div className="divTituloCarritoIconoPhone">

      <li className="iconoBag"><i class="fa-solid fa-bag-shopping"></i></li>
      <h1 className="tituloCarrito">Carrito de compras</h1>
        
    </div>

    <div className="cart-item">

      <div className="divBotonVolverPhone">
          <Link to ="/"> <Button className="botonVolverPhone"><i class="fa-solid fa-arrow-rotate-left"></i> Seguir comprando</Button></Link>
      </div>

      <CartCards/>

      <div className='divTotalesPhone'>
            {/* <p>Cantidad de items distintos agregados: {valorDelContexto.arrayDeObjetosDeProductosAgregados.length}</p>
            <p>Cantidad total de unidades agregadas: {valorDelContexto.cantidadTotalProductosAgregados}</p> */}
        <br></br>
        <br></br>
        <h2 className='tituloOrden'>Su orden:</h2>
        <div className='divDataCompra'>
          
          <p className ="unidadesTotalPhone">- Items: {valorDelContexto.arrayDeObjetosDeProductosAgregados.length}</p>
          <p className ="unidadesTotalPhone">- Total Unidades: {valorDelContexto.cantidadTotalProductosAgregados}</p>
        </div>
        <p className ="montoTotalPhone">Monto Total: Ar$ {valorDelContexto.calculateTotal()}</p>
        {/* <p className ="montoTotalPhone">Monto Total: Ar$ {valorDelContexto.montoTotalProductosAgregados}</p> */}
      </div>

      <div className="divCheckOut-remove">
        <Link to="/checkOut" className="checkOut-button"><i class="fa-solid fa-money-bill"></i> CheckOut</Link>
                                                                                  {/* //valorDelContexto.clearCart()  -> funcion que proviene del CustomProvider */}
        <button className="remove-button" onClick={() => valorDelContexto.clearCart()}>Limpiar carrito</button> 
      </div>
    </div>  
</div>    

  )
}

export default Cart;
