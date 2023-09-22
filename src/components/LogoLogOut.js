import React from 'react';
import '../assets/css/NavBar.css';
import { useContext } from 'react';
import { contexto } from './CustomProvider';
import { Link } from 'react-router-dom';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function LogoLogOut() {
  const navigate = useNavigate();
  const valorDelContexto = useContext(contexto);

     

  return (
    <div>
      <li><button className="logout-button" onClick={handleLogout} ><i className="fa-solid fa-arrow-right-from-bracket"></i></button></li>
    </div>
  );
}

export default LogoLogOut;