import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import CreateUserForm2 from "./CreateUserForm2";
import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {Timestamp,addDoc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import {db} from '../firebase';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'




const CreateUser2 = () => {


  const valorDelContexto = useContext(contexto) 

  const [loading, setLoading] = useState(false);
  const [nombreClienteCreado, setNombreClienteCreado] = useState("");
  const [telefonoClienteCreado, setTelefonoClienteCreado] = useState("");
  const [emailClienteCreado, setEmailClienteCreado] = useState("");
  const [passwordClienteCreado, setPasswordClienteCreado] = useState("");
  const [fechaClienteCreado, setFechaClienteCreado] = useState("");
  const [horaCompraClienteCreado, setHoraClienteCreado] = useState("");
  const [idPerfilCreado, setIdPerfilCreado] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});


  const perfilesOriginalesEnBD = collection(db, "alta_usuarios")

  const loaderProps = {
    loading,
    size: 40,
    duration: 1,
    colors: ['#c99d0b', '#cfab35']
}


  const createUser = async ({nombre, telefono, email, password}) => { 
    setLoading(true); 


    var timestamp = Timestamp.fromDate(new Date()); 
    var date = new Date(timestamp.toMillis());   

    const formattedDate = date.toLocaleDateString('es-ES')  
    const formattedTime = date.toLocaleTimeString('es-ES')



    try {
      const perfilCreado = {  
        cliente: {        
          nombre,
          telefono,
          email,
          password
        },
        
        dataDate: formattedDate, 
        dataTime: formattedTime,
        
      };
      
      console.log("perfilCreadoEnCreateUser:", perfilCreado)

      const batch = writeBatch(db);
      await batch.commit();

      const coleccionDePerfilesCreadosEnDB = collection(db, "alta_usuarios"); 

      const perfilCreadoEnDB = await addDoc(coleccionDePerfilesCreadosEnDB, perfilCreado); 

      setIdPerfilCreado(perfilCreadoEnDB.id);  
    
      setSubmitted(true);
     
      setFechaClienteCreado(perfilCreado.dataDate)
      setHoraClienteCreado(perfilCreado.dataTime)
      setNombreClienteCreado(perfilCreado.cliente.nombre)
      setTelefonoClienteCreado(perfilCreado.cliente.telefono)
      setEmailClienteCreado(perfilCreado.cliente.email)
      setPasswordClienteCreado(perfilCreado.cliente.password)

    
  } 
  
  catch (errors) {
    setErrors("Error de procesamiento de solicitud de alta de usuario."); 
    console.errors(errors);
  }
  finally {  
    setLoading(false);  
  }
};

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

            <h2 className="tituloCreacionUsiario">Creacion de usuario</h2>
                {submitted ? (
                    <div>
                    <p>Usuario creado con exito!</p>
                    <p>Name: {nombreClienteCreado}</p>
                    <p>Email: {emailClienteCreado}</p>
                    <Link to="/login" ><button className="botonSeguirComprandoDetalle"> Iniciar Sesion </button></Link> 
                    </div>
                 
                ) : (

            <CreateUserForm2  onConfirm = {createUser} />  
            )}
        </div>
          
          
    )
}

export default CreateUser2;