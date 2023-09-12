import React from 'react';
import  { useState } from 'react';
import { Button } from 'react-bootstrap'
import '../assets/css/Contador.css';


function Contador({nombrePropHandleCallback,stock,initial}) { //recibe de C padre la prop 'nombrePropHandleCallback' , ademas de las props 'stock','initial'

    const [contador, setContador] = useState(initial);   // valor de 'contador' por default: 1

    const sumar = () => {
        if(contador < stock) {  //validaciones de Stock
            setContador(contador + 1)
        }}


    const restar = () => {
        if(contador > 1) { //validaciones de Stock, no puede ser negativo el contador.
        setContador(contador - 1)
        }}

    const resetear = () => setContador(0)
    
    const handleConfirmar = () => { //StateUpLifting. Le devuelve al C. ItemDetail padre la misma prop 'nombrePropHandleCallback' recibida inicialmente, pero actualizada con el valor de 'contador'
        nombrePropHandleCallback(contador)  
    }


  return (

    <div className="divContador">
        <div className="funcionContador">
           
            <button  className="botonesContador" onClick={restar}> - </button>
            <p className="numeroContador">{contador}</p>
            <button className="botonesContador"onClick={sumar}> + </button>
            
        </div>
        <button  className="botonResetear" onClick={resetear}> Resetear </button>
        <br></br>
        
        <div>
                                        {/*Si no existe stock no se activa el boton -> disabled = {!stock}> */}
            <button className="botonAgregarCarritoDesktop" onClick={handleConfirmar} disabled = {!stock}><i class="fa-solid fa-cart-plus"></i> Agregar al carrito</button>
        </div>
       
       
    </div>
  )
}

export default Contador