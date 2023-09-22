import React from 'react';
import { signOut } from 'firebase/auth'; // Import the signOut function from Firebase Auth
import { auth } from '../firebase'; // Import Firebase auth object
import { useNavigate } from 'react-router-dom';

const LogOut = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      await signOut(auth); // Sign out the user
      navigate('/'); // Redirect to the home page or any other desired page after logout
    } catch (error) {
      console.error('Logout Error:', error.code, error.message);
      // Handle logout error if needed
    }
  };

  return (
    <button className="logout-button" onClick={handleLogout}> Log Out </button>
  );
};

export default LogOut;