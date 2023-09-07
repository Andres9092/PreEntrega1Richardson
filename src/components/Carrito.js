import React, { useState } from 'react';
import {useContext} from 'react';
import {contexto} from './CustomProvider';



function CartItem() {
  
  const valorDelContexto = useContext(contexto)   //valorDelContexto va sin llaves, porque estoy llamando a una variable, no una funcion como en el caso de {addItem}


  console.log('valorDelContexto :', valorDelContexto)
  console.log('valorDelContexto.cantidadItemsDistintosAgregados :', valorDelContexto.cantidadItemsDistintosAgregados.length)

  return (

    <div className="cart-item">

        <div>
          <p>Cantidad de items distintos agregados: {valorDelContexto.cantidadItemsDistintosAgregados.length}</p>
          <p>Cantidad total de unidades agregadas: {valorDelContexto.cantidadTotalProductosAgregados}</p>
          <p>Total de su compra: Ar$ {valorDelContexto.montoTotalProductosAgregados}</p>

        </div>




      {/* <img src={item.foto} alt={item.nombre} />

      <div className="item-details">

        <span className="item-name">{item.nombre}</span>
        <span className="item-price">${item.precio}</span>

        <div className="item-quantity">

          <button onClick={() => onDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item)}>+</button>

        </div>

        <button className="remove-button" onClick={() => onRemove(item)}>Remove</button> */}

      
      
    </div>
  );
}

export default CartItem;

// function Carrito() {

//   const [cartItems, setCartItems] = useState(

//   [
//     {
//     id: 1,
//     nombre: 'Taormina',
//     descripcion: 'A',
//     tamanio: 'M',
//     precio: 3500,
//     foto:ramo1,
//     eucalipto: 'si',
//     quantity: 2

//   },
//   {
//     id: 2,
//     nombre: 'Bellagio',
//     descripcion: 'B',
//     tamanio: 'M',
//     precio: 6000,
//     foto:ramo2,
//     eucalipto: 'si',
//     quantity: 2

//   },
//   {
//     id: 3,
//     nombre: 'Milano',
//     descripcion: 'C',
//     tamanio: 'L',
//     precio: 2000,
//     foto:ramo3,
//     eucalipto: 'no',
//     quantity: 4

//   },
//   {
//     id: 4,
//     nombre: 'Eucalipto',
//     descripcion: 'D',
//     tamanio: 'L',
//     precio: 4300,
//     foto:ramo4,
//     eucalipto: 'no',
//     quantity: 6

//   },
//   {
//     id: 5,
//     nombre: 'Eucalipto',
//     descripcion: 'D',
//     tamanio: 'L',
//     precio: 3600,
//     foto:ramo5,
//     eucalipto: 'si',
//     quantity: 7

//   },{
//     id: 6,
//     nombre: 'Eucalipto',
//     descripcion: 'D',
//     tamanio: 'M',
//     precio: 5200,
//     foto:ramo6,
//     eucalipto: 'no',
//     quantity: 1

//   },{
//     id: 7,
//     nombre: 'Eucalipto',
//     descripcion: 'D',
//     tamanio: 'M',
//     precio: 2600,
//     foto:ramo7,
//     eucalipto: 'si',
//     quantity: 3

//   },
//   {
//     id: 8,
//     nombre: 'Eucalipto',
//     descripcion: 'D',
//     tamanio: 'M',
//     precio: 4500,
//     foto:ramo8,
//     eucalipto: 'no',
//     quantity: 5

//   }])



//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
//   };


//   const handleIncrement = (item) => {
//     const updatedCart = cartItems.map((cartItem) =>
//       cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//     );
//     setCartItems(updatedCart);
//   };


//   const handleDecrement = (item) => {
//     if (item.quantity > 1) {
//       const updatedCart = cartItems.map((cartItem) =>
//         cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//       );
//       setCartItems(updatedCart);
//     }
//   };


//   const handleRemove = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCart);
//   };



//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>

//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <CartItem
//             key={item.id}
//             item={item}
//             onRemove={handleRemove}
//             onIncrement={handleIncrement}
//             onDecrement={handleDecrement}
//           />
//         ))}
//       </div>

//       <div className="cart-total">
//         <span>Total: ${getTotalPrice()}</span>
//       </div>

//     </div>
//   );
// }

// export default Carrito;
