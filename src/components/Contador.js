import React from 'react';
import  { useState } from 'react';
import { Button } from 'react-bootstrap'
import '../assets/css/Contador.css';


function Contador(props) {

    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const resetear = () => setContador(0)
    
    const handleConfirmar = () => {
        props.handleCallback(contador)
    }


  return (

    <div className="divContador">
        <div className="funcionContador">
            <button className="botonesContador"onClick={sumar}> + </button>
            <p className="numeroContador">{contador}</p>
            <button  className="botonesContador" onClick={restar}> - </button>
        </div>
        <button  className="botonResetear" onClick={resetear}> Resetear </button>
        <br></br>
        
        <div>
            <button onClick={handleConfirmar}> Confirmar </button>
        </div>
       
       
    </div>
  )
}

export default Contador