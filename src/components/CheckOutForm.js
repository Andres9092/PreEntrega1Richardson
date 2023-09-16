import { useState } from "react";
import React from 'react'
import '../assets/css/CheckOutForm.css';

function CheckOutForm({onConfirm}) {  

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  console.log('nombre: ', nombre)
  console.log('telefono: ', telefono)
  console.log('email: ', email)
  console.log('errors: ', errors)

  const validateForm = () => { 
    const errors = {};  


    if (nombre.trim().length < 8 ) { 
    errors.nombre = "El campo 'Nombre' es obligatorio y debe tener al menos 8 caracteres."; 
    }

    if (!telefono.trim()) {
      errors.telefono = "El campo 'Telefono' es obligatorio.";
    }

    if (!email.includes("@")) {
      errors.email = "El campo 'E-mail' es obligatorio es y debe contener el caracter '@'."
    }

    
    return errors; 
}


    const handleConfirm = (event) => {   
    event.preventDefault();

    const validationErrors = validateForm();  
    console.log('validationErrors :', validationErrors)

    if (Object.keys(validationErrors || {}).length === 0) { 
      
      const userData = { 
        nombre,
        telefono,
        email,
      };
      console.log("userDataCreado:", userData)
      
      onConfirm(userData);
      
      
    } else {
      setErrors(validationErrors); 
    }
  };

  const handleCancel = (event) => {  
    event.preventDefault();
                                   
    setNombre("");  
    setTelefono("");
    setEmail("");
    setErrors({});
  };

  return (  
          
    
    <form className="formulario">
      
        <div className="divLabels">
          <label className="labelValues">Nombre</label>  
        </div>
        <div className="divInputs">
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="inputValues" placeholder="Escriba su nombre..."/>
            {errors.nombre && (<p className="textoError">{errors.nombre}</p>)}
        </div>

        <div className="divLabels">
          <label className="labelValues">Telefono</label>
        </div>
        <div className="divInputs">
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="inputValues" placeholder="011-6854-4567..."/>
          {errors.telefono && (<p className="textoError">{errors.telefono}</p>)}
        </div>

        <div className="divLabels">  
          <label className="labelValues">Email</label>
        </div>  
        <div className="divInputs">  
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="inputValues" placeholder="Escriba su E-mail..."/>
          {errors.email && (<p className="textoError">{errors.email}</p>)}
        </div>
                                                             
        <button className="botonSubmit" type="submit" onClick={handleConfirm}>Submit</button>
        
        <button className="botonCancel" type="button" onClick={handleCancel} > Cancel </button>

    </form>
  );

}
export default CheckOutForm;