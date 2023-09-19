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
  

  const validationSchema = Yup.object().shape({

    name: Yup.string()
      .required('Name is required')
      .min(10, 'Password must be at least 10 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    telefono: Yup.string()
      .required('Telefono is required'),
    password: Yup.string()
      .min(10, 'Password must be at least 10 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });


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