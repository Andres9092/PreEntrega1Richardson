import React, { useState } from 'react';
import ramo1 from '../assets/images/Ramo1.jpg';
import ramo2 from '../assets/images/Ramo2.jpg';
import ramo3 from '../assets/images/Ramo3.jpg';
import ramo4 from '../assets/images/Ramo4.jpg';
import ramo5 from '../assets/images/Ramo5.jpg';
import ramo6 from '../assets/images/Ramo6.jpg';
import ramo7 from '../assets/images/Ramo7.jpg';
import ramo8 from '../assets/images/Ramo8.jpg';


function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  
  return (
    <div className="cart-item">
      <img src={item.foto} alt={item.nombre} />
      <div className="item-details">
        <span className="item-name">{item.nombre}</span>
        <span className="item-price">${item.precio}</span>
        <div className="item-quantity">
          <button onClick={() => onDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item)}>+</button>
        </div>
        <button className="remove-button" onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
}

function Carrito() {

  const [cartItems, setCartItems] = useState(

  [
    {
    id: 1,
    nombre: 'Taormina',
    descripcion: 'A',
    tamanio: 'M',
    precio: 3500,
    foto:ramo1,
    eucalipto: 'si',
    quantity: 2

  },
  {
    id: 2,
    nombre: 'Bellagio',
    descripcion: 'B',
    tamanio: 'M',
    precio: 6000,
    foto:ramo2,
    eucalipto: 'si',
    quantity: 2

  },
  {
    id: 3,
    nombre: 'Milano',
    descripcion: 'C',
    tamanio: 'L',
    precio: 2000,
    foto:ramo3,
    eucalipto: 'no',
    quantity: 4

  },
  {
    id: 4,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'L',
    precio: 4300,
    foto:ramo4,
    eucalipto: 'no',
    quantity: 6

  },
  {
    id: 5,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'L',
    precio: 3600,
    foto:ramo5,
    eucalipto: 'si',
    quantity: 7

  },{
    id: 6,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 5200,
    foto:ramo6,
    eucalipto: 'no',
    quantity: 1

  },{
    id: 7,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 2600,
    foto:ramo7,
    eucalipto: 'si',
    quantity: 3

  },
  {
    id: 8,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 4500,
    foto:ramo8,
    eucalipto: 'no',
    quantity: 5

  }])



  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };


  const handleIncrement = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCart);
  };


  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedCart);
    }
  };


  const handleRemove = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };



  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>

      <div className="cart-total">
        <span>Total: ${getTotalPrice()}</span>
      </div>

    </div>
  );
}

export default Carrito;
