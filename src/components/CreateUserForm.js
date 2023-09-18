import { useState } from "react";
import React from 'react'
import '../assets/css/CreateUserForm.css';

function CreateUserForm({onConfirm}) {  

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  console.log('nombre: ', nombre)
  console.log('telefono: ', telefono)
  console.log('email: ', email)
  console.log('password: ', password)
  console.log('errors: ', errors)

  const validateFormUser = () => { 
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

    if (password.length < 10) {
        errors.password = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
      }

      if (!(/[A-Z]/).test(password)) {
        errors.password = "El campo 'Contraseña' es obligatorio y debe contener al menos una letra mayúscula.";
      }
      
      if (!(/[a-z]/).test(password)) {
        errors.password = "El campo 'Contraseña' es obligatorio y debe contener al menos una letra minúscula.";
      }
      
      if (!(/\d/).test(password)) {
        errors.password = "El campo 'Contraseña' es obligatorio y debe contener al menos un número.";
      }
      
      if (!(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/).test(password)) {
        errors.password = "El campo 'Contraseña' es obligatorio y debe contener al menos un carácter especial.";
      }

    return errors;   
}


    const handleConfirm = (event) => {  
        event.preventDefault();

    const validationErrorsUser = validateFormUser();  
    console.log('validationErrorsUser :', validationErrorsUser)

    if (Object.keys(validationErrorsUser || {}).length === 0) {  
      
      const userDataCreateUser = { 
        nombre,
        telefono,
        email,
        password,
      };
      console.log("userCreadoEnFormulario:", userDataCreateUser)
      
      onConfirm(userDataCreateUser); 
      
        setNombre("");  
        setTelefono("");
        setEmail("");
        setPassword("");
        setErrors({});
            
    } else {
      setErrors(validationErrorsUser); 
    }
  };

  const handleCancel = (event) => {  
    event.preventDefault();
                                    
    setNombre("");  
    setTelefono("");
    setEmail("");
    setPassword("");
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

        <div className="divLabels">  
          <label className="labelValues">Contraseña</label>
        </div>  
        <div className="divInputs">  
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="inputValues" placeholder="Escriba su contraseña..."/>
          {errors.password && (<p className="textoError">{errors.password}</p>)}
        </div>

                                                            
        <button className="botonSubmit" type="submit" onClick={handleConfirm}>CREAR</button>
        
        <button className="botonCancel" type="button" onClick={handleCancel} > CANCELAR </button>

    </form>
  );

}
export default CreateUserForm;