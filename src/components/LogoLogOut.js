import React from 'react';
import '../assets/css/NavBar.css';
import { useContext, useState, useEffect } from 'react';
import { contexto } from './CustomProvider';
import 'firebase/compat/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function LogoLogOut() {
  const navigate = useNavigate();
  const valorDelContexto = useContext(contexto);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    // Check if a user is currently authenticated when the component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    return () => {
      // Unsubscribe from the auth state listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    console.log('Logging out user...');

    try {
      await auth.signOut(); // Sign out the user using Firebase's auth object
      console.log('User successfully logged out');
      navigate('/'); // Redirect to the home page or any other desired page after logout
    } catch (error) {
      console.error('Logout Error:', error.code, error.message);
      // Handle logout error if needed
    }
  };

  return (
    <div>
      {isLoggedIn && valorDelContexto.user ? ( // Check both Firebase and context login status
        <li>
          <button className="logout-button" onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </li>
      ) : null}
    </div>
  );
}

export default LogoLogOut;