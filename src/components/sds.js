import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from "./Alert";
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader';
import { getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';
import { useContext } from "react";
import { contexto } from './CustomProvider';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth functions

const Login = () => {
  const { /* Any context values you need */ } = useContext(contexto);
  const history = useHistory(); // For redirecting after successful login

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('E-mail invalido')
        .required('E-mail requerido'),
      password: Yup.string()
        .required('La contraseña es obligatoria'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log('values Formulario :', values);
      setLoading(true);

      try {
        const coleccionDePerfilesCreadosEnDB = collection(db, "alta_usuarios");

        const q = query(
          coleccionDePerfilesCreadosEnDB,
          where("cliente.email", "==", values.email)
        );

        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
          setAlertMessage("Usuario no encontrado.");
          setShowAlert(true);
          setLoading(false);
          return;
        }

        // Authenticate the user with Firebase
        try {
          // Replace with your Firebase authentication code
          await signInWithEmailAndPassword(auth, values.email, values.password);
          // If authentication is successful, you can redirect or set user context values
          history.push('/dashboard'); // Redirect to the dashboard or any other page
        } catch (error) {
          console.error('Error al autenticar con Firebase:', error);
          setAlertMessage("Error al iniciar sesión. Verifique sus credenciales.");
          setShowAlert(true);
        }

      } catch (error) {
        console.error('Error al intentar autenticar:', error);
      } finally {
        setLoading(false);
        resetForm()
      }
    }
  });

  return (
    <div className="divPaginaLogin">
      <h2 className="tituloLogin">Iniciar Sesión</h2>
      
      <form onSubmit={formik.handleSubmit} className='formularioLogin'>
        {showAlert && (<Alert message={alertMessage} onClose={() => setShowAlert(false)} />)}
        <div className="divLabels">
          <label className="labelValues">Email</label>
        </div>
        <div className='divInputs'>
          <input className="inputValuesLogin" id="email" name="email" type="email" placeholder="E-mail..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? <p className="textoErrorLogin">{formik.errors.email}</p> : null}
        </div>
        <div className="divLabels">
          <label className="labelValues">Contraseña</label>
        </div>
        <div className='divInputs'>
          <input className="inputValuesLogin" id="password" name="password" type="password" placeholder="Contraseña..." onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          {formik.touched.password && formik.errors.password ? <p className="textoErrorLogin">{formik.errors.password}</p> : null}
        </div>
        <button type='submit' className="botonSubmitLogin"><i className="fa-solid fa-sign-in"></i> Iniciar Sesión</button>
        <Link to="/createUser" ><button className="botonCrearCuenta"><i className="fa-solid fa-user-plus"></i> Crear Cuenta</button></Link>
      </form>
    </div>
  );
}

export default Login;