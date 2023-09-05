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

    <div>
        <div className="funcionContador">
            <button onClick={sumar}> + </button>
            <p>{contador}</p>
            <button onClick={restar}> - </button>
        </div>
        <br></br>
        <div>
            <button onClick={handleConfirmar}> Confirmar </button>
        </div>
        <br></br>
        <button onClick={resetear}> Resetear </button>
    </div>
  )
}

export default Contador