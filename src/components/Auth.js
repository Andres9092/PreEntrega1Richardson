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



function Auth({ user }) {
    return (
      <div>
        <h2>Bienvenido, {user.email}</h2>
        {/* Agrega aquí el contenido autenticado */}
      </div>
    );
  }
  
  export default Auth;