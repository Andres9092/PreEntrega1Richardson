import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {Timestamp,addDoc,doc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import {db} from '../firebase';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
//import { useHistory } from 'react-router-dom';
import 'firebase/compat/auth';                // resolvio problema /compat
import 'firebase/compat/firestore';           // resolvio problema /compat
import firebase from 'firebase/compat/app';   // resolvio problema /compat
import { useFormik } from 'formik';
import * as Yup from 'yup'; // You can still use Yup for validation
import Alert from "./Alert";


const CreateUser = () => {

  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fechaClienteCreado, setFechaClienteCreado] = useState("");
  const [horaCompraClienteCreado, setHoraClienteCreado] = useState("");
  const [idPerfilCreado, setIdPerfilCreado] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
            nombre: "",
            email: "",
            telefono: "",
            password: "",
            confirmPassword: ''
    },

    validationSchema : Yup.object().shape({

        nombre: Yup.string()
          .required('El nombre de usuario es olbigatorio')
          .min(10, 'El nombre de usuario debe contener al menos 10 caracteres'),
        email: Yup.string()
          .email('E-mail invalido')
          .required('E-mail requerido'),
        telefono: Yup.string()
          .required('Telefono requerido'),
        password: Yup.string()
          .min(10, 'La contraseña debe contener al menos 10 caracteres')
          .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayuscula')
          .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minuscula')
          .matches(/\d/, 'La contraseña debe contener al menos un numero')
          .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/, 'La contraseña debe contener al menos un caracter especial')
          .required('La contraseña es obligatoria'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Las contraseñas ingresadas deben coincidir')
          .required('Las confirmacion de contraseña es requerida'),
        
        }),
  
    onSubmit: async   (values,  { resetForm }) => {
        console.log('values Formulario :', values);
        
        setLoading(true);
       
      try {

        
        const coleccionDePerfilesCreadosEnDB = collection(db, "alta_usuarios"); 

        // Query Firestore to check if a user with the same email exists
        const q = query(
          coleccionDePerfilesCreadosEnDB,
          where("cliente.email", "==", values.email)
        );

        const querySnapshot = await getDocs(q)

        // Check if there are any matching documents
        if (!querySnapshot.empty) {

          setAlertMessage("Un usuario con el mismo correo electrónico ya existe.");
          setShowAlert(true);
          console.log("Perfil existente:", alert)
          setLoading(false);
          
          return;
        }

        var timestamp = Timestamp.fromDate(new Date()); 
        var date = new Date(timestamp.toMillis());   
      
        const formattedDate = date.toLocaleDateString('es-ES')  
        const formattedTime = date.toLocaleTimeString('es-ES')

        const perfilCreado = {  
          cliente: {        
            nombre: values.nombre,
            email: values.email,
            telefono: values.telefono,
            password:values.password
          },
          
          dataDate: formattedDate, 
          dataTime: formattedTime,
          
        };

      console.log("perfilCreadoEnCreateUser:", perfilCreado)

       // Perform Firestore write operations within a batch
       const batch = writeBatch(db);

       // Example: Add a document to the batch
       const perfilCreadoDocRef = await addDoc(coleccionDePerfilesCreadosEnDB, perfilCreado);

       batch.set(perfilCreadoDocRef, perfilCreado);

       // Commit the batch
       await batch.commit();

         // Get the Firestore-generated ID from the document reference
        const generatedId = perfilCreadoDocRef.id;

        // Set the generated ID to state
        setIdPerfilCreado(generatedId);
     
        setSubmitted(true);

        setIdPerfilCreado(perfilCreadoDocRef.id); 
        setNombre(perfilCreado.cliente.nombre);  
        setTelefono(perfilCreado.cliente.telefono);
        setEmail(perfilCreado.cliente.email);
        setPassword(perfilCreado.cliente.password);
        setFechaClienteCreado(perfilCreado.dataDate)
        setHoraClienteCreado(perfilCreado.dataTime)
          
        console.log('idPerfilCreado :', generatedId);
        console.log('Data ingresada a Firestore satisfactoriamente');


      
      } catch (error) {
        console.error('Error al intentar cargar la data a Firestore:', error);

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
    
    setNombre("");
    setTelefono("");
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
        <div className="divPaginaCheckOut">

            <h2 className="tituloCreacionUsiario"> Creacion de usuario</h2>
                {submitted ? (
                    <div>
                      <p>Usuario creado con exito!</p>
                      <p>Nombre de Usuario: {nombre}</p>
                      <p>Telefono: {telefono}</p>
                      <p>Email: {email}</p>
                      <p>Fecha: {fechaClienteCreado}</p>
                      <p>Hora: {horaCompraClienteCreado}</p>

                 
                      <Link to="/login" ><button className="botonSeguirComprandoDetalle"> Iniciar Sesion </button></Link> 
                    </div>
                 
                ) : (

                  <form onSubmit = {formik.handleSubmit} className='formularioAlta'>

                      <div className="divLabels">
                          <label className="labelValues"> Nombre</label>  
                      </div>

                      <div className='divInputs'>
                          <input className="inputValuesAlta"  id="nombre" name="nombre" type="text" placeholder="Nombre..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nombre} />
                          {formik.touched.nombre && formik.errors.nombre ? <p className="textoErrorAlta">{formik.errors.nombre}</p> : null}
                      </div>

                      <div className="divLabels">
                        <label className="labelValues"> Telefono</label>
                      </div>

                      <div className='divInputs'>
                          <input className="inputValuesAlta" id="telefono" name="telefono" type="text" placeholder="Telefono..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.telefono} />
                          {formik.touched.telefono && formik.errors.telefono ? <p className="textoErrorAlta">{formik.errors.telefono}</p> : null}
                      </div>

                      <div className="divLabels">  
                        <label className="labelValues"> Email</label>
                      </div> 

                      <div className='divInputs'>
                          <input className="inputValuesAlta"  id="email" name="email" type="email" placeholder="E-mail..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                          {formik.touched.email && formik.errors.email ? <p className="textoErrorAlta">{formik.errors.email}</p> : null}
                      </div>

                      <div className="divLabels">  
                        <label className="labelValues"> Contraseña</label>
                      </div>  

                      <div className='divInputs'>
                          <input className="inputValuesAlta" id="password" name="password" type="password" placeholder="Contraseña..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                          {formik.touched.password && formik.errors.password ? <p className="textoErrorAlta">{formik.errors.password}</p> : null}
                      </div>

                      <div className="divLabels">  
                        <label className="labelValues"> Confirmar contraseña</label>
                      </div>  

                      <div className='divInputs'>
                          <input className="inputValuesAlta" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirmar Contraseña..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className="textoErrorAlta">{formik.errors.confirmPassword}</p> : null}
                      </div>

                      <button type='submit' className="botonSubmitAlta"><i class="fa-solid fa-user-plus"></i>  CREAR</button>

                      <button className="botonCancel" type="button" onClick={handleCancel}><i class="fa-sharp fa-solid fa-trash"></i> LIMPIAR </button>

                      <Link to="/login" ><button className="botonIniciarSesion"><i class="fa-solid fa-right-to-bracket"></i> INICIAR SESION </button></Link> 

                      {showAlert && (<Alert message={alertMessage} onClose={() => setShowAlert(false)} /> )}


                  </form>
            )}
        </div>
          
          
    )
}

export default CreateUser;