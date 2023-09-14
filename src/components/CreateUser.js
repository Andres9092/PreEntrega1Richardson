// import React, { useState } from 'react';
// import '../assets/css/Login.css';
// import '../assets/css/CreateUser.css';
// import CreateUserForm from "./CreateUserForm";

// const CreateUser = () => {


//   const valorDelContexto = useContext(contexto) 

//   const [loading, setLoading] = useState(false);
//   const [nombreClienteCreado, setNombreClienteCreado] = useState("");
//   const [telefonoClienteCreado, setTelefonoClienteCreado] = useState("");
//   const [emailClienteCreado, setEmailClienteCreado] = useState("");
//   const [passwordClienteCreado, setPasswordClienteCreado] = useState("");
//   const [fechaClienteCreado, setFechaClienteCreado] = useState("");
//   const [horaCompraClienteCreado, setHoraClienteCreado] = useState("");
//   const [idPerfilCreado, setIdPerfilCreado] = useState("");
//   const [errors, setErrors] = useState({});


//   const createOrder = async ({ nombre, telefono, email, password}) => { //{ name, phone, email } provienen de -> <CheckoutForm onConfirm={createOrder} /> , donde createOrder -> tiene la info de la cte creada 'userData' y tiene esos valores.
//     setLoading(true); //activo el 'loader'.


//     var timestamp = Timestamp.fromDate(new Date()); //fecha de servidor.
//     var date = new Date(timestamp.toMillis());   //transformo fecha

//     const formattedDate = date.toLocaleDateString('es-ES')  //transformo fecha a string para poder ser leida.
//     const formattedTime = date.toLocaleTimeString('es-ES')



//     try {
//       const perfilCreado = {  //creo objeto con data.
//         cliente: {          // data traida por props del C. hijo formulario.
//           nombre,
//           telefono,
//           email,
//           password
//         },
        
//         dataDate: formattedDate,  //crea fecha y hora por servidor, de la orden creada.
//         dataTime: formattedTime,
        
//       };
      
//       console.log("perfilCreadoEnCreateUser:", perfilCreado)




//       const coleccionDePerfilesCreadosEnDB = collection(db, "alta_usuarios"); //creo coleccion en DB 'alta_usuarios'

//       const perfilCreadoEnDB = await addDoc(coleccionDePerfilesCreadosEnDB, perfilCreado); //agrego documento con data de 'perfilCreado' a la coleccion creada en FireStore 'coleccionDePerfilesCreadosEnDB  -> 'alta_usuarios'

//       setIdPerfilCreado(perfilCreadoEnDB.id);  // re-setea el valor 'vacio' de 'id' de 'idPerfilCreado'
//       valorDelContexto.clearCart();

     
//       setFechaClienteCreado(ordenCreada.dataDate)
//       setHoraClienteCreado(ordenCreada.dataTime)
//       setNombreClienteCreado(ordenCreada.cliente.nombre)
//       setTelefonoClienteCreado(ordenCreada.cliente.telefono)
//       setEmailClienteCreado(ordenCreada.cliente.email)
//       setPasswordClienteCreado(ordenCreada.cliente.email)

 



//     } else {
//       setError("Some products are out of stock.");
//     }
//   } 
  
//   catch (error) {
//     setError("Error de procesamiento de solicitud de alta de usuario."); //setea el valor de 'error', si no hay un resultado en el 'try' 
//     console.error(error);
//   }
//   finally {  
//     setLoading(false);  //corta el 'loader' mas all del resultado del 'try'.
//   }
// };


// if (loading) {  // Si loading:true -> seteo el 'loader' con sus propiedades directamente, fuera del return. En otros C, lo incorporo dentro del return como <BarsLoader {...loaderProps} />
//   return (
//     <>
//       <h1 className="avisoOrdenProcesada">
//         Por favor, espere. Sus datos estan siendo procesados en estos momentos. Muchas gracias.
//       </h1>
//       <div className="my-5 flex justify-center">
//         <BarsLoader {...loaderProps} />
//       </div>
//     </>
//   );
// }


// if (idOrden) {
//   return (   // el return devuelve info directamente.
//     <div className="divDetalleCompra">
//       <p className="fraseCompra"><i class="fa-solid fa-hands-clapping"></i>  Felicitaciones! </p>
//       <p className="fraseCompra">Su compra fue procesada con exito!</p>
//       <p className="fraseCompra">Gracias por confiar en nosotros!</p>
     
//       <Link to="/login" ><button className="botonSeguirComprandoDetalle"> Iniciar Sesion </button></Link> 

//     </div>
//     )
//   }


//   return (
//           <div className="divPaginaCheckOut">

//             <h1 className="tituloCheckOut">Crear Usuario</h1>
//             {error && (<p className="text-center text-red-500 text-lg mt-4">{error}</p>)}

//                   {/* paso prop 'onConfirm' con valor 'crearCuenta' al Compo hijo 'CreateUserForm' */}
//                   {/* El Compo hijo 'CreateUserForm' le devuelve a C. CreateUser', la cte creada 'userDataCreateUser' a traves de onConfirm(userDataCreateUser), al clickear Submit y correr la Fc 'handleConfirm'  */}
//             <CreateUserForm onConfirm = {crearCuenta} />  

//           </div>
//           );
//           };

// export default CreateUser;