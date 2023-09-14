import '../assets/css/Login.css';
import '../assets/css/CreateUser.css';
import CreateUserForm from "./CreateUserForm";
import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {Timestamp,addDoc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import {db} from '../firebase';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'




const CreateUser = () => {


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


  const createUser = async ({nombre, telefono, email, password}) => { //{ name, phone, email } provienen de -> <CheckoutForm onConfirm={createOrder} /> , donde createOrder -> tiene la info de la cte creada 'userData' y tiene esos valores.
    setLoading(true); //activo el 'loader'.


    var timestamp = Timestamp.fromDate(new Date()); //fecha de servidor.
    var date = new Date(timestamp.toMillis());   //transformo fecha

    const formattedDate = date.toLocaleDateString('es-ES')  //transformo fecha a string para poder ser leida.
    const formattedTime = date.toLocaleTimeString('es-ES')



    try {
      const perfilCreado = {  //creo objeto con data.
        cliente: {          // data traida por props del C. hijo formulario.
          nombre,
          telefono,
          email,
          password
        },
        
        dataDate: formattedDate,  //crea fecha y hora por servidor, de la orden creada.
        dataTime: formattedTime,
        
      };
      
      console.log("perfilCreadoEnCreateUser:", perfilCreado)

      const batch = writeBatch(db);
      await batch.commit();

      const coleccionDePerfilesCreadosEnDB = collection(db, "alta_usuarios"); //creo coleccion en DB 'alta_usuarios'

      const perfilCreadoEnDB = await addDoc(coleccionDePerfilesCreadosEnDB, perfilCreado); //agrego documento con data de 'perfilCreado' a la coleccion creada en FireStore 'coleccionDePerfilesCreadosEnDB  -> 'alta_usuarios'

      setIdPerfilCreado(perfilCreadoEnDB.id);  // re-setea el valor 'vacio' de 'id' de 'idPerfilCreado'
    
      setSubmitted(true);
     
      setFechaClienteCreado(perfilCreado.dataDate)
      setHoraClienteCreado(perfilCreado.dataTime)
      setNombreClienteCreado(perfilCreado.cliente.nombre)
      setTelefonoClienteCreado(perfilCreado.cliente.telefono)
      setEmailClienteCreado(perfilCreado.cliente.email)
      setPasswordClienteCreado(perfilCreado.cliente.password)

    

 



  } 
  
  catch (errors) {
    setErrors("Error de procesamiento de solicitud de alta de usuario."); //setea el valor de 'error', si no hay un resultado en el 'try' 
    console.errors(errors);
  }
  finally {  
    setLoading(false);  //corta el 'loader' mas alla del resultado del 'try'.
  }
};



if (loading) {  // Si loading:true -> seteo el 'loader' con sus propiedades directamente, fuera del return. En otros C, lo incorporo dentro del return como <BarsLoader {...loaderProps} />
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




 {/* paso prop 'onConfirm' con valor 'crearCuenta' al Compo hijo 'CreateUserForm' */}
                  {/* El Compo hijo 'CreateUserForm' le devuelve a C. CreateUser', la cte creada 'userDataCreateUser' a traves de onConfirm(userDataCreateUser), al clickear Submit y correr la Fc 'handleConfirm'  */}
            

  return (
        <div className="divPaginaCheckOut">

            <h2>Creacion de usuario</h2>
                {submitted ? (
                    <div>
                    <p>Usuario creado con exito!</p>
                    <p>Name: {nombreClienteCreado}</p>
                    <p>Email: {emailClienteCreado}</p>
                    <Link to="/login" ><button className="botonSeguirComprandoDetalle"> Iniciar Sesion </button></Link> 
                    </div>
                 
                ) : (

            <CreateUserForm onConfirm = {createUser} />  
            )}
        </div>
          
          
    )
}

export default CreateUser;