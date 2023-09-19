// import React, { useState } from 'react';
// import '../assets/css/Login.css';
// import '../assets/css/CreateUser.css';
// import {Link} from 'react-router-dom';
// import '@firebase/firestore'
// import firebase from 'firebase/compat/app';   // resolvio problema /compat
// import 'firebase/compat/auth';                // resolvio problema /compat
// import 'firebase/compat/firestore';           // resolvio problema /compat
// import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { Redirect } from 'react'; // Importa Redirect de react-router-dom
// import {useEffect} from 'react';
// import Auth from './Auth';
// import * as Yup from 'yup';

// const firebaseConfig = {
//   apiKey: "AIzaSyBrbfAbVE9s5z0LCI29ATkFWNxu4RBbbqc",
//   authDomain: "enjoyingdecoproject.firebaseapp.com",
//   projectId: "enjoyingdecoproject",
//   storageBucket: "enjoyingdecoproject.appspot.com",
//   messagingSenderId: "274338518777",
//   appId: "1:274338518777:web:8b37b1e55e3c194e0eb428",
//   measurementId: "G-LVDJD5K69B"
// };


// firebase.initializeApp(firebaseConfig);


// const Login = () => {

  
//   const [loading, setLoading] = useState(false);

//   const [emailLogin, setEmailLogin] = useState('');
//   const [passwordLogin, setPasswordLogin] = useState('');
//   const [user, setUser] = useState(null); // Estado para almacenar la información del usuario autenticado

//   const [error, setError] = useState('');


//   const loaderProps = {
//     loading,
//     size: 40,
//     duration: 1,
//     colors: ['#c99d0b', '#cfab35']
// }


// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(10, 'Password must be at least 10 characters')
//     .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//     .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//     .matches(/\d/, 'Password must contain at least one number')
//     .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/, 'Password must contain at least one special character')
//     .required('Password is required'),
// });

//   const handleLogin = async (event) => {  
//     event.preventDefault();

//       try {
//     // Validate form data
//       await validationSchema.validate(values, { abortEarly: false });
//       await firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin);
         
                
//       // Si el inicio de sesión es exitoso, puedes redirigir al usuario a la página deseada
//     } catch (error) {
//       // Handle validation errors
//       const validationErrors = {};
//       error.inner.forEach((err) => {
//       validationErrors[err.path] = err.message;})

//        // Set validation errors in your component state or display them to the user
//     setError(validationErrors);
//     }
   
//     finally {  
//       setLoading(false);  
//     }
    
 
//   if (loading) {  
//     return (
//       <>
//         <h1 className="avisoProcesamientoLogin">
//           Por favor, espere. Sus datos estan siendo procesados en estos momentos. Muchas gracias.
//         </h1>
//         <div className="my-5 flex justify-center">
//           <BarsLoader {...loaderProps} />
//         </div>
//       </>
//     );
//   }
  
// }

// useEffect(() => {
//   // Agregar un observador para el cambio de estado de autenticación
//   const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
//     if (authUser) {
//       // El usuario está autenticado
//       setUser(authUser);
//     } else {
//       // El usuario no está autenticado
//       setUser(null);
//     }
//   });

//   return () => {
//     // Limpia el observador cuando el componente se desmonta
//     unsubscribe();
//   };
// }, []);

// if (user) {
//   // El usuario está autenticado, redirige a la página deseada o muestra el contenido autenticado
//   return <Auth user={user} />;
// }


// const handleCancel = (event) => {  
//   event.preventDefault();

//   setEmailLogin("");
//   setPasswordLogin("");
//   setError({});
// };



//   return (

//     <div className = "divContenedorLogin">

//       <h2 className = "loginTitulo">Iniciar sesión</h2>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <form onSubmit={handleLogin}>

//         <div className ="divCorreoLogin">
//           <label className="titulosLabel" htmlFor="emailLogin">Correo electrónico: </label>
//           <input type="email" id="emailLogin" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}/>
//         </div>

//         <div className ="divPasswordLogin">
//           <label  className="titulosLabel" htmlFor="passwordLogin">Contraseña: </label>
//           <input type="password" id="passwordLogin" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />

//         </div>

//         <div className ="divBotonesLogin">
//           <button className="botonLogin" type="submit"> LOGIN </button>

//           <button className="botonCancel" type="button" onClick={handleCancel} > CANCELAR </button>


//           <Link to ="/createUser" className="botonCrearUsuario"><button> CREAR USUARIO</button></Link>
//         </div>
//       </form>

//     </div>
     
//   );
// };

// export default Login;


