import React, { useState } from 'react';
import {useContext} from 'react';
import {contexto} from './CustomProvider';
import '../assets/css/Cart.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import CartCards from './CartCards';

function Cart() {
  
  const valorDelContexto = useContext(contexto)   


  
  const MontoTotal = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
    (total, item) => total + item.precio * item.cantidadConfirmadaPorElContadorDelProducto, 0)

  const unidadesTotal = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
      (total, item) => total + item.cantidadConfirmadaPorElContadorDelProducto, 0)
  

  if (valorDelContexto.arrayDeObjetosDeProductosAgregados.length === 0){
    return (

      <div className="divCarritoVacio">
        <p className='textoCarritoVacio'><i class="fa-regular fa-face-surprise"></i> No hay productos en el carrito!</p>
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
          <Link to ="/"> <Button className="botonVolverPhone"><i class="fa-solid fa-arrow-rotate-left"></i>Seguir comprando</Button></Link>
      </div>

      <CartCards/>

      <div className='divTotalesPhone'>
         
        <br></br>
        <br></br>
        <h2 className='tituloOrden'>Su orden:</h2>
        <div className='divDataCompra'>
          
          <p className ="unidadesTotalPhone">- Items: {valorDelContexto.arrayDeObjetosDeProductosAgregados.length}</p>
          <p className ="unidadesTotalPhone">- Total Unidades: {unidadesTotal}</p>
        </div>
        <p className ="montoTotalPhone">Monto Total: Ar$ {MontoTotal}</p>
      
      </div>

      <div className="divCheckOut-remove">
        <Link to="/checkOut" className="checkOut-button"><i class="fa-solid fa-money-bill"></i>  CheckOut</Link>
                                                                                
        <button className="remove-button" onClick={() => valorDelContexto.clearCart()}>Limpiar carrito</button> 
      </div>
    </div>  
</div>    

  )
}

export default Cart;
