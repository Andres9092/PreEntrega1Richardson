import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {Timestamp,addDoc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import {db} from '../firebase';   // serverTimestamp -> da objeto fecha de la maquina del servidor al momento de utilizarlo. Necesario para guardar fecha y hora de la compra.
import CheckOutForm from "./CheckOutForm";
//import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
import '../assets/css/CheckOut.css';
import 'firebase/firestore'; // Import other Firebase services you need
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

  const productosOriginalesBaseDatos = collection(db, "products")  //traigo todos la coleccion de 'productos' existentes en la BD. NO tiene la data directamente.
  
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

  const createOrder = async ({ nombre, telefono, email }) => { //{ name, phone, email } provienen de -> <CheckoutForm onConfirm={createOrder} /> , donde createOrder -> tiene la info de la cte creada 'userData' y tiene esos valores.
    setLoading(true); //activo el 'loader'.

    // try {
    //   tryCode - Code block to run
    // }
    // catch(err) {
    //   catchCode - Code block to handle errors
    // }
    // finally {
    //   finallyCode - Code block to be executed regardless of the try result
    // }
    var timestamp = Timestamp.fromDate(new Date()); //fecha de servidor.
    var date = new Date(timestamp.toMillis());   //transformo fecha

    const formattedDate = date.toLocaleDateString('es-ES')  //transformo fecha a string para poder ser leida.
    const formattedTime = date.toLocaleTimeString('es-ES')

  
    try {
      const ordenCreada = {  //creo objeto con data.
        cliente: {          // data traida por props del C. hijo formulario.
          nombre,
          telefono,
          email,
        },
        itemsAgregados: valorDelContexto.arrayDeObjetosDeProductosAgregados,

        dataDate: formattedDate,  //crea fecha y hora por servidor, de la orden creada.
        dataTime: formattedTime,
        
      };
      console.log("ordenCreadaEnCheckOut:", ordenCreada)

      //console.log("ordenCreadaEnCheckOut.itemsAgregados:", ordenCreada.itemsAgregados[0].cantidadConfirmadaPorElContadorDelProducto)
  
   
                                    //writeBatch(db) -> If you do not need to read any documents in your operation set, you can execute multiple write operations as a single batch that contains any combination of set(), update(), or delete() operations.
      const batch = writeBatch(db);

      const productosFueraDeStock = [];

      const idProductosAgregadosAlCarrito = valorDelContexto.arrayDeObjetosDeProductosAgregados.map((prod) => prod.id);   //objeto de productos agregados al Carrito -> devuelve el 'id'
      //console.log("idProductosAgregadosAlCarrito:", idProductosAgregadosAlCarrito)
   
     //obtengo 'QuerySnapshot' de productos de la BD original que coinciden con los agregados al carrit -> Comparo base completa de prods con los Agregados al Carrito. -> NO DEVUELVE LOS PRODS DIRECTAMETNE.
     //IMPORTANTE: expresion funciona si: los 'id' de los productos cargados en la BD Firestore, son de tipo 'String'.
      const productosEnBDCoincidentesAgregadosAlCarrito = await getDocs(     
        query(productosOriginalesBaseDatos, where(documentId(), "in", idProductosAgregadosAlCarrito))
      );

      //console.log("productosEnBDCoincidentesAgregadosAlCarrito:", productosEnBDCoincidentesAgregadosAlCarrito)

      const { docs } = productosEnBDCoincidentesAgregadosAlCarrito;

          //Barro los productos productos Agregados Al Carrito Coincidentes En BD y para cada uno:
      
        docs.forEach((doc) => {  ///De cada producto DE LA BD, que coinciden con los agregados al carrito, obtengo la 'data()' y el 'stock'
        const dataDelDocEnDB = doc.data();
       
        const stockProductoEnDB = dataDelDocEnDB.stock;

        const productoAgregadoACarritoExistenteEnDB = valorDelContexto.arrayDeObjetosDeProductosAgregados.find((prod) => prod.id === doc.id); //devuelve 1 prod por cada vuelta del forEach.
        //console.log("productoAgregadoACarritoExistenteEnDB:", productoAgregadoACarritoExistenteEnDB)
       
        const prodQuantityProductoAgregadoACarrito = productoAgregadoACarritoExistenteEnDB?.cantidadConfirmadaPorElContadorDelProducto;
        //console.log("prodQuantityProductoAgregadoACarrito:", prodQuantityProductoAgregadoACarrito) // la cantidad seleccionada por el usuario del producto agregado y existente en la DB.

        if (stockProductoEnDB >= prodQuantityProductoAgregadoACarrito) {    // si el stock de un producto de la DB coincidente con el agregado por el cliente al carrito, es >= a la cantidad seleccionada por el usuario del producto agregado.
          batch.update(doc.ref, { stock: stockProductoEnDB - prodQuantityProductoAgregadoACarrito }); //actualiza el Stock del producto ageregado al Carrito, en la BD.
        } else {
          productosFueraDeStock.push({ id: doc.id, ...dataDelDocEnDB });
        }     
    } 
      );

      if (productosFueraDeStock.length === 0) {
        await batch.commit();

        const coleccionDeOrdenesDeVentasEnDB = collection(db, "ordenes_ventas"); //creo coleccion en DB 'ordenes_ventas'

        const ordenCreadaEnDB = await addDoc(coleccionDeOrdenesDeVentasEnDB, ordenCreada); //agrego documento con data de 'ordenCreada' a la coleccion creada en FireStore 'coleccionDeOrdenesDeVentasEnDB  -> 'ordenes_ventas'

        setIdOrden(ordenCreadaEnDB.id);  // re-setea el valor 'vacio' de 'id' de 'idOrden'
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
      setError("Error de procesamiento de orden."); //setea el valor de 'error', si no hay un resultado en el 'try' 
      console.error(error);
    }
    finally {  
      setLoading(false);  //corta el 'loader' mas all del resultado del 'try'.
    }
  };



  

  if (loading) {  // Si loading:true -> seteo el 'loader' con sus propiedades directamente, fuera del return. En otros C, lo incorporo dentro del return como <BarsLoader {...loaderProps} />
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
    return (   // el return devuelve info directamente.
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
                                                                                      {/*arrayDeObjetosDeProductosAgregados -> [{…}, {…}] -> por eso como se mapea cada objeto para ir imprimiendo cada Card, se barre cada posicion 'i' -> arrayDeObjetosDeProductosAgregados[i]*/} 
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

             {/* paso prop 'onConfirm' con valor 'createOrder' al Compo hijo 'CheckOutForm' */}
             {/* El Compo hijo 'CheckOutForm' le devuelve a C. CheckOut', la cte creada 'userData' a traves de onConfirm(userData), al clickear Submit y correr la Fc 'handleConfirm'  */}
      <CheckOutForm onConfirm = {createOrder} />  

    </div>
  );
};

export default CheckOut;