import React from 'react';
import  { useState } from 'react';
import { Button } from 'react-bootstrap'
import '../assets/css/Contador.css';


function Contador(props) { //recibe de C padre la prop 'nombrePropHandleCallback' 

    const [contador, setContador] = useState(1);

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const resetear = () => setContador(0)
    
    const handleConfirmar = () => { //le devuelve al C padre la misma prop 'nombrePropHandleCallback' con el valor de 'contador'
        props.nombrePropHandleCallback(contador)  
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
            <button onClick={handleConfirmar}> -- Confirmar cantidad --</button>
        </div>
       
       
    </div>
  )
}

export default Contador