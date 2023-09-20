import React from "react";
import '../assets/css/CreateUser.css';


const Alert = ({ message, onClose }) => {
  return (
    <div className="divCustomAlert">
      
      <p className="mensajeAlertaUsuarioExistente"><i class="fa-solid fa-triangle-exclamation"></i> Atencion !!</p>
      <p className="mensajeAlertaUsuarioExistente">{message}</p>
      <button className="botonCloseAlert" onClick={onClose}><i class="fa-solid fa-circle-xmark icon-bigger"></i></button>

    </div>
  );
};

export default Alert;