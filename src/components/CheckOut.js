import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {Timestamp,addDoc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import {db} from '../firebase';
import CheckOutForm from "./CheckOutForm";
import { Link } from "react-router-dom";
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
import '../assets/css/CheckOut.css';
import 'firebase/firestore'; 
import DownloadButton from './DownloadButton';


function CheckOut() {

  const valorDelContexto = useContext(contexto) 
  
  const [idOrden, setIdOrden] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [fechaCompra, setFechaCompra] = useState("");
  const [horaCompra, setHoraCompra] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [montoTotal, setMontoTotal] = useState("");
  const [unidadesTotal, setUnidadesTotal] = useState("");
  const [productos, setProductos] = useState("");

  const productosOriginalesBaseDatos = collection(db, "products") 

  const purchaseResult = {
    Numero_Orden: idOrden,
    Fecha:fechaCompra,
    Hora: horaCompra,
    Telefono:telefono,
    Email:email,
    Monto_Total:montoTotal,
    Unidades_Total:unidadesTotal
  }
  console.log("purchaseResult:", purchaseResult)
  
  const loaderProps = {
    loading,
    size: 40,
    duration: 1,
    colors: ['#c99d0b', '#cfab35']
}

  const createOrder = async ({ nombre, telefono, email }) => {
    setLoading(true); 

    
    var timestamp = Timestamp.fromDate(new Date()); 
    var date = new Date(timestamp.toMillis());   

    const formattedDate = date.toLocaleDateString('es-ES')  
    const formattedTime = date.toLocaleTimeString('es-ES')

  
    try {
      const ordenCreada = {  
        cliente: {         
          nombre,
          telefono,
          email,
        },
        itemsAgregados: valorDelContexto.arrayDeObjetosDeProductosAgregados,

        dataDate: formattedDate, 
        dataTime: formattedTime,
        
      };
      console.log("ordenCreadaEnCheckOut:", ordenCreada)

     
   
                                
      const batch = writeBatch(db);

      const productosFueraDeStock = [];

      const idProductosAgregadosAlCarrito = valorDelContexto.arrayDeObjetosDeProductosAgregados.map((prod) => prod.id);   
     
      const productosEnBDCoincidentesAgregadosAlCarrito = await getDocs(     
        query(productosOriginalesBaseDatos, where(documentId(), "in", idProductosAgregadosAlCarrito))
      );



      const { docs } = productosEnBDCoincidentesAgregadosAlCarrito;

        
      
        docs.forEach((doc) => {  
        const dataDelDocEnDB = doc.data();
       
        const stockProductoEnDB = dataDelDocEnDB.stock;

        const productoAgregadoACarritoExistenteEnDB = valorDelContexto.arrayDeObjetosDeProductosAgregados.find((prod) => prod.id === doc.id); 
      
       
        const prodQuantityProductoAgregadoACarrito = productoAgregadoACarritoExistenteEnDB?.cantidadConfirmadaPorElContadorDelProducto;
      

        if (stockProductoEnDB >= prodQuantityProductoAgregadoACarrito) {    
          batch.update(doc.ref, { stock: stockProductoEnDB - prodQuantityProductoAgregadoACarrito }); 
        } else {
          productosFueraDeStock.push({ id: doc.id, ...dataDelDocEnDB });
        }     
    } 
      );

      if (productosFueraDeStock.length === 0) {
        await batch.commit();

        const coleccionDeOrdenesDeVentasEnDB = collection(db, "ordenes_ventas"); 

        const ordenCreadaEnDB = await addDoc(coleccionDeOrdenesDeVentasEnDB, ordenCreada); 

        setIdOrden(ordenCreadaEnDB.id);  
        valorDelContexto.clearCart();


        
        const montoTotal$ = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
          (total, item) => total + item.precio * item.cantidadConfirmadaPorElContadorDelProducto, 0)
      
        const unidadesTotal = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
            (total, item) => total + item.cantidadConfirmadaPorElContadorDelProducto, 0)
        

        
        setFechaCompra(ordenCreada.dataDate)
        setHoraCompra(ordenCreada.dataTime)
        setNombreCliente(ordenCreada.cliente.nombre)
        setTelefono(ordenCreada.cliente.telefono)
        setEmail(ordenCreada.cliente.email)
        setMontoTotal(montoTotal$)
        setUnidadesTotal(unidadesTotal)
        setProductos(valorDelContexto.arrayDeObjetosDeProductosAgregados)
       

   
      } else {
        setError("Some products are out of stock.");
      }
    } 
    
    catch (error) {
      setError("Error de procesamiento de orden."); 
      console.error(error);
    }
    finally {  
      setLoading(false); 
    }
  };



  

  if (loading) {  
    return (
      <>
        <h1 className="avisoOrdenProcesada">
          Por favor, espere. Su orden esta siendo procesada en estos momentos. Muchas gracias.
        </h1>
        <div className="my-5 flex justify-center">
          <BarsLoader {...loaderProps} />
        </div>
      </>
    );
  }


  if (idOrden) {
    return (   
      <div className="divDetalleCompra">
        <p className="fraseCompra"><i class="fa-solid fa-hands-clapping"></i>  Felicitaciones! </p>
        <p className="fraseCompra">Su compra fue procesada con exito!</p>
        <p className="fraseCompra">Gracias por confiar en nosotros!</p>
        <br></br>
        <h1 className="fraseNroCompra">Su numero de compra es:</h1>
        <div className="divIdNro">
          <p className="nroCompra">{idOrden}</p>
        </div>
        
        <p className="titulos">Cliente:</p>
        <div className="divDatosCliente">
          <p className="titulosCompra">Nombre: {nombreCliente}</p>
          <p className="titulosCompra">Telefono: {telefono}</p>
          <p className="titulosCompra">E-mail: {email}</p>
        </div>
        <p className="fraseDatosCompra">Compra:</p>
        <div className="divDatosFechaHoraCompra">
          <p className="fechaCompra">Fecha de compra: {fechaCompra}</p>
          <p className="HoraCompra">Hora de compra: {horaCompra}</p>
          <p className="HoraCompra">Monto total: $ {montoTotal}</p>
          <p className="HoraCompra">Total unidades: {unidadesTotal}</p>
        </div>

        <p className="titulos">Productos:</p>
      
        {productos.map(   
                  (item,i) => {
                     console.log('item,i :', item,i)
                     return(
                         
                         <div key={i} className="boxCartCardsCart">
                         
                             <div className="divImagenProdCardCartPhone">
                                 <img className="imagenProdCardCartPhone" src = {item.foto} alt="Imagen del producto"/>
                             </div>
                                     
                             <div className="divColumnasPhone">
                                    <p className="titulosColumnas">Producto</p>
                                     <p className="dataColumnas">{item.nombre}</p>
                             </div>

                             <div className="divColumnasPhone">
                                     <p className="titulosColumnas">Unidad</p>
                                     <p className="dataColumnas"> $ {item.precio}</p>
                                     
                             </div>  
                                                                      
                             <div className="divColumnasPhone">
                                     <p className="titulosColumnas">Cantidad</p>    
                                                                                     
                                     <p className="dataColumnas"> {productos[i].cantidadConfirmadaPorElContadorDelProducto}</p>
                                   
                             </div>  

                             

                             <div className="precioTamanio">
                                     <p className="titulosColumnas">Subtotal</p>
                                     <p className="dataColumnas">$ {item.precio * productos[i].cantidadConfirmadaPorElContadorDelProducto}</p>
                             </div>    
                            
             
                         </div>
                     )
                 }
             )}

  
        <div className="divBotonDescarga">
        
          <DownloadButton purchaseResult ={purchaseResult} fileName="comprobante_compra.json" />

        </div>   
        <Link to="/" ><button className="botonSeguirComprandoDetalle"> Seguir comprando </button></Link>
                 
              

      </div>
      )
    }
 
  return (
    <div className="divPaginaCheckOut">

      <h1 className="tituloCheckOut">CheckOut</h1>
      {error && (<p className="text-center text-red-500 text-lg mt-4">{error}</p>)}

      <CheckOutForm onConfirm = {createOrder} />  

    </div>
  );
};

export default CheckOut;