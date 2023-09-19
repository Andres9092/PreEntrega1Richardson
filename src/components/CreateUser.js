import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {Timestamp,addDoc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import {db} from '../firebase';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
//import { useHistory } from 'react-router-dom';
import * as Yup from 'yup'; // You can still use Yup for validation
import 'firebase/compat/auth';                // resolvio problema /compat
import 'firebase/compat/firestore';           // resolvio problema /compat
import firebase from 'firebase/compat/app';   // resolvio problema /compat

const firebaseConfig = {
  apiKey: "AIzaSyBrbfAbVE9s5z0LCI29ATkFWNxu4RBbbqc",
  authDomain: "enjoyingdecoproject.firebaseapp.com",
  projectId: "enjoyingdecoproject",
  storageBucket: "enjoyingdecoproject.appspot.com",
  messagingSenderId: "274338518777",
  appId: "1:274338518777:web:8b37b1e55e3c194e0eb428",
  measurementId: "G-LVDJD5K69B"
};


firebase.initializeApp(firebaseConfig);


const validationSchema = Yup.object().shape({

  nombre: Yup.string()
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

const CreateUser = () => {

  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [fechaClienteCreado, setFechaClienteCreado] = useState("");
  //const [horaCompraClienteCreado, setHoraClienteCreado] = useState("");
  //const [idPerfilCreado, setIdPerfilCreado] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const loaderProps = {
    loading,
    size: 40,
    duration: 1,
    colors: ['#c99d0b', '#cfab35']
}


  //const history = useHistory();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  console.log('formData: ,', formData)

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
}


   
const handleRegistration = async (e) => {
  e.preventDefault();
   
  try {
    // Validate form data
    await validationSchema.validate(formData, { abortEarly: false });

    // Form data is valid, proceed with registration
    const {nombre, telefono, email, password} = formData;

    console.log('userformData: ,', formData)
 // Register user with Firebase Authentication
 const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
 console.log('UserCredential:', userCredential);

 // Log the user's UID
 console.log('User created with UID:', userCredential.user.uid);
  // Optionally, you can also store additional user information in Firestore
  const customDocId = `${nombre}_${email}_${telefono}`;
  
  const userRef = firebase.firestore().collection('users').doc(customDocId);
  
  await userRef.set({
    nombre,
    email,
    telefono,
  })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });

  setSubmitted(true);
  

} catch (error) {
  if (error instanceof Yup.ValidationError) {
    // Handle validation errors
    const newErrors = {};
    error.inner.forEach((err) => {
      newErrors[err.path] = err.message;
    });
    setFormErrors(newErrors);
  } else {
    // Handle other errors
    console.error('Error:', error);
  }
}

finally {  
  setLoading(false);  
}
};

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
     
const handleCancel = (event) => {  
  event.preventDefault();
                                  
  setNombre("");  
  setTelefono("");
  setEmail("");
  setPassword("");

};


  return (
        <div className="divPaginaCheckOut">

            <h2 className="tituloCreacionUsiario">Creacion de usuario</h2>
                {submitted ? (
                    <div>
                    <p>Usuario creado con exito!</p>
                    <p>Name: {formData.nombre}</p>
                    <p>Email: {formData.email}</p>
                    <p>Telefono: {formData.telefono}</p>
                    <Link to="/login" ><button className="botonSeguirComprandoDetalle"> Iniciar Sesion </button></Link> 
                    </div>
                 
                ) : (

                  <form className="formulario">
      
                      <div className="divLabels">
                        <label className="labelValues">Nombre</label>  
                      </div>
                      <div className="divInputs">
                        <input type="text"   name="nombre" value={formData.nombre} onChange={handleChange} required className="inputValues" placeholder="Escriba su nombre..."/>
                          {formErrors.nombre && (<p className="textoError">{formErrors.nombre}</p>)}
                      </div>
              
                      <div className="divLabels">
                        <label className="labelValues">Telefono</label>
                      </div>
                      <div className="divInputs">
                        <input type="tel"   name="telefono" value={formData.telefono} onChange={handleChange} required className="inputValues" placeholder="011-6854-4567..."/>
                        {formErrors.telefono && (<p className="textoError">{formErrors.telefono}</p>)}
                      </div>
              
                      <div className="divLabels">  
                        <label className="labelValues">Email</label>
                      </div>  
                      <div className="divInputs">  
                        <input type="email"  name="email" value={formData.email} onChange={handleChange} required className="inputValues" placeholder="Escriba su E-mail..."/>
                        {formErrors.email && (<p className="textoError">{formErrors.email}</p>)}
                      </div>
              
                      <div className="divLabels">  
                        <label className="labelValues">Contraseña</label>
                      </div>  
                      <div className="divInputs">  
                        <input type="password"  name="password" value={formData.password} onChange={handleChange} required className="inputValues" placeholder="Escriba su contraseña..."/>
                        {formErrors.password && (<p className="textoError">{formErrors.password}</p>)}
                      </div>
              
                     
                      <button className="botonSubmit" type="submit" onClick={handleRegistration}> CREAR </button>
                      
                      <button className="botonCancel" type="button" onClick={handleCancel} > CANCELAR </button>
          
              </form>
            )}
        </div>
          
          
    )
}

export default CreateUser;