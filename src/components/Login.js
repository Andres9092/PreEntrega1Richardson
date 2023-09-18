import React, { useState } from 'react';
import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import {Link} from 'react-router-dom';


const Login = () => {

  const [usernameLogin, setUsernameLogin] = useState('');
  const [mailLogin, setMailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [error, setError] = useState('');


  const validateFormUserLogin = () => { 
    const errors = {};  
    
 

    if (nombre.trim().length < 8 ) {  
    errors.nombre = "El campo 'Nombre' es obligatorio y debe tener al menos 8 caracteres.";  
    }

    if (!emailLogin.includes("@")) {
      errors.emailLogin = "El campo 'E-mailLogin' es obligatorio es y debe contener el caracter '@'."
    }

    if (passwordLogin.length < 10) {
        errors.passwordLogin = "El campo 'Contraseña' es obligatorio es y debe contener al menos 10 caracteres."
      }

      if (!(/[A-Z]/).test(passwordLogin)) {
        errors.passwordLogin = "El campo 'Contraseña' es obligatorio y debe contener al menos una letra mayúscula.";
      }
      
      if (!(/[a-z]/).test(passwordLogin)) {
        errors.passwordLogin = "El campo 'Contraseña' es obligatorio y debe contener al menos una letra minúscula.";
      }
      
      if (!(/\d/).test(passwordLogin)) {
        errors.passwordLogin = "El campo 'Contraseña' es obligatorio y debe contener al menos un número.";
      }
      
      if (!(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/).test(passwordLogin)) {
        errors.passwordLogin = "El campo 'Contraseña' es obligatorio y debe contener al menos un carácter especial.";
      }

    return errors;   
}


  const handleLogin = (event) => {  
    event.preventDefault();

    const validationErrorsUserLogin = validateFormUserLogin();  
    console.log('validationErrorsUser :', validationErrorsUser)

    try {

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameLogin,mailLogin, passwordLogin }),
      });

      if (response.ok) {
    
        console.log('Login successful!');
      } else {
   
        const errorData = await response.json();
        setError(errorData.message || 'Login failed.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred during login.');
    }
  };

  return (

    <div className = "divContenedorLogin">
      <h2 className = "loginTitulo">Login</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className ="divNombre">
        <label className="titulosLabel" htmlFor="usernameLogin">Nombre de usuario: </label>
        <input type="text" id="usernameLogin" value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)}/>
      </div>

      <div className ="divCorreo">
        <label className="titulosLabel" htmlFor="mailLogin">Correo electrónico: </label>
        <input type="emailLogin" id="mailLogin" value={mailLogin} onChange={(e) => setMailLogin(e.target.value)}/>
      </div>

      <div className ="divpasswordLogin">
        <label  className="titulosLabel" htmlFor="passwordLogin">Contraseña: </label>
        <input type="passwordLogin" id="passwordLogin" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />

      </div>

      <button className="botonLogin" onClick={handleLogin}>Login</button>

      <Link to ="/createUser" className="botonCrearUsuario"><button >Crear usuario</button></Link>

    </div>

  );
};

export default Login;