import React, { useState } from 'react';
import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import {Link} from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    try {

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,mail, password }),
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
        <label className="titulosLabel" htmlFor="username">Nombre de usuario: </label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>

      <div className ="divCorreo">
        <label className="titulosLabel" htmlFor="mail">Correo electrónico: </label>
        <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}/>
      </div>

      <div className ="divPassword">
        <label  className="titulosLabel" htmlFor="password">Contraseña: </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      </div>

      <button className="botonLogin" onClick={handleLogin}>Login</button>

      <Link to ="/createUser" className="botonCrearUsuario"><button >Crear usuario</button></Link>

    </div>

  );
};

export default Login;