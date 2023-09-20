import React, { useState } from 'react';
import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import {Link} from 'react-router-dom';
import '@firebase/firestore'
import firebase from 'firebase/compat/app';   // resolvio problema /compat
import 'firebase/compat/auth';                // resolvio problema /compat
import 'firebase/compat/firestore';           // resolvio problema /compat
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from 'react'; // Importa Redirect de react-router-dom
import {useEffect} from 'react';
import * as Yup from 'yup';
import { auth } from '../firebase'; // Import Firebase auth object
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase';
import { useFormik } from 'formik';
import {Timestamp,addDoc,doc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import AlertNoExistente from "./AlertNoExistente";
import { signOut } from 'firebase/auth';

const Login = () => {

const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [fechaClienteCreado, setFechaClienteCreado] = useState("");
  const [horaCompraClienteCreado, setHoraClienteCreado] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");


  const loaderProps = {
    loading,
    size: 40,
    duration: 1,
    colors: ['#c99d0b', '#cfab35']
}


const formik = useFormik({
    initialValues: {
       
            email: "",
            password: "",
          
    },

    validationSchema : Yup.object().shape({

        email: Yup.string()
        .email('E-mail invalido. Debe contener caracter "@"')
          .required('E-mail requerido'),
        password: Yup.string()
          .min(10, 'La contraseña debe contener al menos 10 caracteres')
          .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayuscula')
          .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minuscula')
          .matches(/\d/, 'La contraseña debe contener al menos un numero')
          .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/, 'La contraseña debe contener al menos un caracter especial')
          .required('La contraseña es obligatoria'),
        }),
  
    onSubmit: async   (values,  { resetForm }) => {
                console.log('values Formulario :', values);
                    
                setLoading(true);

                try {

                   // Sign out any previously authenticated user.  The line is placed at the beginning of the onSubmit function, right before the validation and sign-in attempt. This ensures that any previously authenticated user is signed out before a new user's credentials are used to sign in.
                     await signOut(auth);   
                    // Validate form data

                    const coleccionDePerfilesCreadosEnDB = collection(db, "alta_usuarios");

                    // Query Firestore to check if a user with the same email exists
                    // const q = query(coleccionDePerfilesCreadosEnDB, where("cliente.email", "==", values.email));
            
                    // const querySnapshot = await getDocs(q)
            
                    // if (querySnapshot.empty) {
                    //     setAlertMessage("Usuario no encontrado.");
                    //     setShowAlert(true);
                    //     setLoading(false);
                    //     return;
                    // }

                    var timestamp = Timestamp.fromDate(new Date()); 
                    var date = new Date(timestamp.toMillis());   
                  
                    const formattedDate = date.toLocaleDateString('es-ES')  
                    const formattedTime = date.toLocaleTimeString('es-ES')

                    const datosSignIn = {  
                        cliente: {        
                      
                        email: values.email,
                        },
                        
                        dataDate: formattedDate, 
                        dataTime: formattedTime,
                        
                    };
            
                    console.log("datosSignInINgresados:", datosSignIn)

                        try {
                            // Replace with your Firebase authentication code
                            await signInWithEmailAndPassword(auth, values.email, values.password);

                            // If authentication is successful, you can redirect or set user context values
                            navigate.push('/'); // Redirect to the dashboard or any other page

                        } catch (error) {
                            console.error('Error al autenticar con Firebase:', error);
                            setAlertMessage("Error al iniciar sesión. Verifique sus credenciales.");
                            setShowAlert(true);

                        }
        } catch (error) {
            console.error('Error al intentar autenticar:', error);
            setError('Error al iniciar sesión. Verifique sus credenciales.'); // Set the error state
        } finally {
            setLoading(false);
            resetForm()
        }
    
    }

})

    const handleCancel = (event) => {  
        event.preventDefault();
        console.log('CANCEL button clicked');
        // Rest of your cancel logic
        // Reset the form using Formik's resetForm function
        formik.resetForm();
    
        setEmail("");
        setPassword("");
      }
    
    if (loading) {  
      return (
        <>
          <h1 className="avisoOrdenProcesada">
            Por favor, espere. Sus datos estan siendo procesados en estos momentos. Muchas gracias.
          </h1>
          <div className="my-5 flex justify-center">
            <BarsLoader {...loaderProps} />
          </div>
        </>
      );
    }



  return (

    <div className = "divContenedorLogin">

      <h2 className = "loginTitulo">Iniciar sesión</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={formik.handleSubmit} className='formularioLogin'>

        {showAlert && (<AlertNoExistente message={alertMessage} onClose={() => setShowAlert(false)} /> )}


        <div className ="divCorreoLogin">
          <label className="titulosLabel"> Correo electrónico: </label>
          <input type="email" id="email" name="email"  placeholder="E-mail..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
          {formik.touched.email && formik.errors.email ? <p className="textoErrorAlta">{formik.errors.email}</p> : null}
        </div>

        <div className ="divPasswordLogin">
          <label  className="titulosLabel"> Contraseña: </label>
          <input type="password" id="password"  name="password" placeholder="Contraseña..." onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.password} />
          {formik.touched.password && formik.errors.password ? <p className="textoErrorAlta">{formik.errors.password}</p> : null}
        </div>

        <div className ="divBotonesLogin">

          <button className="botonLogin" type="submit"> INICIAR SESION </button>

          <button className="botonCancel" type="button" onClick={handleCancel}><i class="fa-sharp fa-solid fa-trash"></i> LIMPIAR </button>


          <Link to ="/createUser" className="botonCrearUsuario"><button> CREAR USUARIO</button></Link>
        </div>

      </form>

    </div>
     
  );
};

export default Login;


