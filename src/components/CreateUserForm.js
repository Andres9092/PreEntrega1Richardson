// import { useState } from "react";
// import React from 'react'
// import '../assets/css/CreateUserForm.css';

// //recive prop 'onConfirm' del C. padre 'CheckOut'.
// function CreateUserForm({onConfirm}) {  

//   const [nombre, setNombre] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   console.log('nombre: ', nombre)
//   console.log('telefono: ', telefono)
//   console.log('email: ', email)
//   console.log('password: ', password)
//   console.log('errors: ', errors)

//   const validateFormUser = () => { //Fc que analiza los valores ingresados como 'values' en los inputs del formulario y devuelve 'errores' en caso de existir.
//     const errors = {};  // creo constante 'errors' de tipo 'objeto', vacia inicialmente.
    
//     // Seria: -> error = {
//     //   nombre : "El campo 'Nombre' es obligatorio",
//     //   telefono : El campo 'Telefono' es obligatorio",
//     //   email :  "El campo 'E-mail' es obligatorio",
//     // }


//     if (nombre.trim().length < 8 ) {  //si no existe el value del nombre en el formulario (al valor le paso el metodo .trim() para remover los espacios ingresados posibles en blanco.)
//     errors.nombre = "El campo 'Nombre' es obligatorio y debe tener al menos 8 caracteres.";  // agrego 'key' -> 'nombre' con value
//     }

//     if (!telefono.trim()) {
//       errors.telefono = "El campo 'Telefono' es obligatorio.";
//     }

//     if (!email.includes("@")) {
//       errors.email = "El campo 'E-mail' es obligatorio es y debe contener el caracter '@'."
//     }

//     if (password.length < 10) {
//         errors.password = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
//       }

//     if (("/[A-Z]/").test(password)) {
//         errors.password = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
//       }

//       if (("/[a-z]/").test(password)) {
//         errors.password = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
//       }

//       if (("/\d/.").test(password)) {
//         errors.password = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
//       }

//       if (("/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/").test(password)) {
//         errors.password = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
//       }

//     return errors;  // devolucion de la funcion: todo el objeto 'errors' completo con los errores que se hayan detectado. 
// }


//     const handleConfirm = (event) => {   // event.preventDefault()  -> previene del comportamiento por default, es decir de enviar la informacion al clickear 'submit'
//     event.preventDefault();

//     const validationErrorsUser = validateFormUser();  //Guardo la cte de la funcion creada que devuelve el objeto 'errors'
//     console.log('validationErrorsUser :', validationErrorsUser)

//     if (Object.keys(validationErrorsUser || {}).length === 0) {  //Analiza la cte creada y revisa que no exista 'errors' -> busca que no existan 'keys' en el objeto 'errors', es decir que el objeto: { }
      
//       const userDataCreateUser = { // creo cte de tipo 'objeto' con la data ingresada por formulario
//         nombre,
//         telefono,
//         email,
//         password
//       };
//       console.log("userCreadoEnFormulario:", userDataCreateUser)
      
//       onConfirm(userDataCreateUser); //devuelve al C. padre 'CreateUser' la prop 'onConfirm' con el valor para 'createOrder' -> 'userData'
      
      
//     } else {
//       setErrors(validationErrorsUser); //re-setea el valor de la constante 'errors' que inicialmente esta vacia y dispara los alerts cargados en los inputs del formu -> {errors.nombre && (<p className="textoError">{errors.nombre}</p>)}
//     }
//   };

//   const handleCancel = (event) => {  //funcion que previene el envio de informacion del formulario. Setea todos los campos en vacio.
//     event.preventDefault();
//                                     //Al clickear el 'cancel' re-setea las constates de los inputs a 'vacio' -> vacia los campos del formulario.
//     setNombre("");  
//     setTelefono("");
//     setEmail("");
//     setPassword("");
//     setErrors({});
//   };

//   return (  //planteo el cuerpo del formulario->  labels + inputs.
//             // value = {valor ingresado por formulario}
//             // {errors.nombre &&   -> condicional que confirma si existe el tipo de error y devuelve su mensaje respectivo del objeto 'errors'
//             //onChange => listen to an input’s change in value by providing the attribute onchange.\
//             //onChange generates an Event, and you access the value by event.target.value ...
//                         // event: {
//                         //   target: {
//                         //     value: "string"
//                         //   }
//                         // }
            
//             //onChange={({ e }) => setNombre(e.target.value)} -> setea a la cte 'nombre' el valor ingresado y capturado del input.
//             //onClick={handleConfirm}  -> al evento 'click' llama a la funcion declarada 'handleConfirm'
          
    
//     <form className="formulario">
      
//         <div className="divLabels">
//           <label className="labelValues">Nombre</label>  
//         </div>
//         <div className="divInputs">
//           <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="inputValues" placeholder="Escriba su nombre..."/>
//             {errors.nombre && (<p className="textoError">{errors.nombre}</p>)}
//         </div>

//         <div className="divLabels">
//           <label className="labelValues">Telefono</label>
//         </div>
//         <div className="divInputs">
//           <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="inputValues" placeholder="011-6854-4567..."/>
//           {errors.telefono && (<p className="textoError">{errors.telefono}</p>)}
//         </div>

//         <div className="divLabels">  
//           <label className="labelValues">Email</label>
//         </div>  
//         <div className="divInputs">  
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="inputValues" placeholder="Escriba su E-mail..."/>
//           {errors.email && (<p className="textoError">{errors.email}</p>)}
//         </div>

//         <div className="divLabels">  
//           <label className="labelValues">Contraseña</label>
//         </div>  
//         <div className="divInputs">  
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="inputValues" placeholder="Escriba su contraseña..."/>
//           {errors.password && (<p className="textoError">{errors.password}</p>)}
//         </div>

//                                                               {/* handleConfirm -> fc que analiza si existe errores de validacion, crea cte con data 'userData' y genera -> onConfirm(userData) */}
//         <button className="botonSubmit" type="submit" onClick={handleConfirm}>Submit</button>
        
//         <button className="botonCancel" type="button" onClick={handleCancel} > Cancel </button>

//     </form>
//   );

// }
// export default CreateUserForm;y