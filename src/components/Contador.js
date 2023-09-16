import React from 'react';
import  { useState } from 'react';
import { Button } from 'react-bootstrap'
import '../assets/css/Contador.css';


function Contador({nombrePropHandleCallback,stock,initial}) { 

    const [contador, setContador] = useState(initial); 

    const sumar = () => {
        if(contador < stock) {  
            setContador(contador + 1)
        }}


    const restar = () => {
        if(contador > 1) { 
        setContador(contador - 1)
        }}

    const resetear = () => setContador(0)
    
    const handleConfirmar = () => { 
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
                                      
            <button className="botonAgregarCarritoDesktop" onClick={handleConfirmar} disabled = {!stock}><i class="fa-solid fa-cart-plus"></i> Agregar al carrito</button>
        </div>
       
       
    </div>
  )
}

export default Contador