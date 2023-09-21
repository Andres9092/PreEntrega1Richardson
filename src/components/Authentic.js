import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/Authentic.css';
import {Link} from 'react-router-dom';


function Auth() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userNombreImportado = queryParams.get('nombre');   //'nombre' es el nombre de las prop recibida por ruta, cuyo contenido es userNombre. Lo guardo a su resultado en una variable 'userNombreImportado'


  return (
    <div  className='divBienvenidaUsuario'>
      <h2 className='tituloBienvenido'>Bienvenido! <i class="fa-regular fa-face-smile"></i></h2>
      <br></br>
      <h2 className='mailBienvenida'>{userNombreImportado}</h2>

      <Link to ="/" ><button className="botonProductos"><i class="fa-solid fa-arrow-right"></i> PRODUCTOS </button></Link>


      <Link to ="/logOut" >CERRAR SESION</Link>

      {/* Add your authenticated content here */}
    </div>
  );
}

export default Auth;

//In the Auth component, we use useLocation() to access the current location and URLSearchParams to parse the query parameters. We then retrieve the email and display it in the component.

//With these changes, when a user successfully signs in, they will be redirected to the Auth component with their email included in the URL as a query parameter, and the Auth component will display the email.





