import { useState } from "react";
import React from 'react'
import '../assets/css/CheckOutForm.css';

//recive prop 'onConfirm' del C. padre CheckOut.
function CheckOutForm({onConfirm}) {  

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  console.log('nombre: ', nombre)
  console.log('telefono: ', telefono)
  console.log('email: ', email)
  console.log('errors: ', errors)

  const validateForm = () => { //Fc que analiza los valores ingresados como 'values' en los inputs del formulario y devuelve 'errores' en caso de existir.
    const errors = {};  // creo constante 'errors' de tipo objeto, vacia inicialmente.
    
    // error = {
    //   nombre : "El campo 'Nombre' es obligatorio",
    //   telefono : El campo 'Telefono' es obligatorio",
    //   email :  "El campo 'E-mail' es obligatorio",
    // }


    if (!nombre.trim() ) {  //si no existe el value del nombre en el formulario (al valor le paso el metodo .trim() para remover los espacios ingresados posibles en blanco.)
      errors.nombre = "El campo 'Nombre' es obligatorio";  // agrego 'key' -> 'nombre' con value
    }
    
    if (nombre.trim().length < 15 ) {  //si no existe el value del nombre en el formulario (al valor le paso el metodo .trim() para remover los espacios ingresados posibles en blanco.)
    errors.nombre = "El campo 'Nombre' debe tener al menos 10 caracteres.";  // agrego 'key' -> 'nombre' con value
      }
    if (!telefono.trim()) {
      errors.telefono = "El campo 'Telefono' es obligatorio.";
    }

    if (!email.trim()) {
      errors.email = "El campo 'E-mail' es obligatorio.";
    }

    if (!email.includes("@")) {
      errors.email = "El campo 'E-mail' debe contener el caracter '@'."
    }


    return errors;  // devolucion de la funcion: todo el objeto 'errors' completo con los errores que se hayan detectado.
  
}


    const handleConfirm = (event) => {   // event.preventDefault()  -> previene del comportamiento por default, es decir de enviar la informacion al clickear 'submit'
    event.preventDefault();

    const validationErrors = validateForm();  //Guardo la cte de la funcion creada que devuelve el objeto 'errors'
    console.log('validationErrors :', validationErrors)

    if (Object.keys(validationErrors || {}).length === 0) {  //Analiza la cte creada y revisa que no exista 'errors' -> busca que no existan 'keys' en el objeto 'errors', es decir que el objeto: { }
      
      const userData = { // creo cte de tipo 'objeto' con la data ingresada por formulario
        nombre,
        telefono,
        email,
      };
      console.log("userData:", userData)
      
      const handleConfirm = () => {
        onConfirm(userData); //devuelve al C. padre la prop 'onConfirm' con el valor para 'createOrder' -> 'userData'
      }
    } else {
      setErrors(validationErrors); //re setea el valor de la constante 'errors' que inicialmente esta vacia y dispara los alerts cargados en los inputs del formu -> {errors.nombre && (<p className="textoError">{errors.nombre}</p>)}
    }
  };

  const handleCancel = (event) => {  //funcion que previene el envio de informacion del formulario. Setea todos los campos en vacio.
    event.preventDefault();
                                    //Al clickear el 'cancel' re setea las constates de los inputs a 'vacio'.
    setNombre("");  
    setTelefono("");
    setEmail("");
    setErrors({});
  };

  return (  //planteo el cuerpo del formulario->  labels + inputs.
            // value = {valor ingresado por formulario}
            // {errors.nombre &&   -> condicional que confirma si existe el tipo de error y devuelve su mensaje respectivo del objeto 'errors'
            //onChange => listen to an input’s change in value by providing the attribute onchange.\
            //onChange generates an Event, and you access the value by event.target.value ...
                        // event: {
                        //   target: {
                        //     value: "string"
                        //   }
                        // }
            
            //onChange={({ target }) => setNombre(target.value)} -> setea a la cte 'nombre' el valor ingresado y capturado del input.
            //onClick={handleConfirm}  -> al evento 'click' llama a la funcion declarada 'handleConfirm'
          
    
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