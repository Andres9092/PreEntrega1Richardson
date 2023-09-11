import { useContext, useState } from "react";
import {contexto} from './CustomProvider';
import {serverTimestamp,addDoc,collection,documentId,query,where,writeBatch,getDocs} from "firebase/firestore";
import { db } from "../db/firebaseConfig";   // serverTimestamp -> da objeto fecha de la maquina del servidor al momento de utilizarlo. Necesario para guardar fecha y hora de la compra.
import CheckoutForm from "./CheckoutForm";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Checkout = () => {

  const [idOrden, setIdOrden] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productosOriginalesBaseDatos = collection(db, "products")  //traigo todos los documentos 'productos' existentes en la collection 'products' de la BD.

  const valorDelContexto = useContext(contexto) 

  const createOrder = async ({ nombre, telefono, email }) => { //{ name, phone, email } provienen de -> <CheckoutForm onConfirm={createOrder} /> , donde createOrder -> userData y tiene esos valores.
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
    
    try {
      const ordenCreada = {  //creo objeto con data.
        cliente: {          // data traida por props del C. hijo formulario.
          nombre,
          telefono,
          email,
        },
        itemsAgregados: valorDelContexto.arrayDeObjetosDeProductosAgregados,
        //montototal: montototal,
        data: serverTimestamp.fromDate(new Date()),  //crea fecha y hora por servidor, de la orden creada.
      };

                                    //writeBatch(db) -> If you do not need to read any documents in your operation set, you can execute multiple write operations as a single batch that contains any combination of set(), update(), or delete() operations.
      const batch = writeBatch(db);

      const productosFueraDeStock = [];

      const productosAgregadosAlCarrito = valorDelContexto.arrayDeObjetosDeProductosAgregados.map((prod) => prod.id);   //objeto de productos agregados al Carrit.
      console.log("productosAgregadosAlCarrito:", productosAgregadosAlCarrito)

      const productosAgregadosAlCarritoCoincidentesEnBD = await getDocs(     //obtengo productos de la BD original que coinciden con los agregados al carrito.
        query(productosOriginalesBaseDatos, where(documentId(), "in", productosAgregadosAlCarrito))
      );

      console.log("productosAgregadosAlCarritoCoincidentesEnBD:", productosAgregadosAlCarritoCoincidentesEnBD)

      const { docs } = productosAgregadosAlCarritoCoincidentesEnBD;

//Barro los productos productos Agregados Al Carrito Coincidentes En BD y para cada uno:
      
docs.forEach((doc) => {  ///De cada producto obtengo la 'data()' y el 'stock'
        const dataDelDocEnDB = doc.data();
        const stockProductoEnDB = dataDelDocEnDB.stock;

        const productoAgregadoACarritoExistenteEnDB = valorDelContexto.arrayDeObjetosDeProductosAgregados.find((prod) => prod.id === doc.id);
        console.log("productoAgregadoACarritoExistenteEnDB:", productoAgregadoACarritoExistenteEnDB)
       
        const prodQuantity = productoAgregadoACarritoExistenteEnDB?.cantidadConfirmadaPorElContadorDelProducto;
        console.log("prodQuantity:", prodQuantity) // la cantidad seleccionada por el usuario del producto agregado y existente en la DB.

        if (stockProductoEnDB >= prodQuantity) {    // si el stock de un producto de la DB coincidente con el agregado por el cliente al carrito, es >= a la cantidad seleccionada por el usuario del producto agregado.
          batch.update(doc.ref, { stock: stockProductoEnDB - prodQuantity });
        } else {
          productosFueraDeStock.push({ id: doc.id, ...dataDelDocEnDB });
        }
      });

      if (productosFueraDeStock.length === 0) {
        await batch.commit();

        const coleccionDeOrdenesDeVentasEnDB = collection(db, "ordenes_ventas"); //creo coleccion en DB 'ordenes_ventas'

        const ordenCreadaEnDB = await addDoc(coleccionDeOrdenesDeVentasEnDB, ordenCreada); //agrego documento con data de 'ordenCreada' a la coleccion creada 'coleccionDeOrdenesDeVentasEnDB'

        setIdOrden(ordenCreadaEnDB.id);
        clearvalorDelContexto.arrayDeObjetosDeProductosAgregados();

      } else {
        setError("Some products are out of stock.");
      }

    } 
    
    catch (error) {
      setError("An error occurred while processing your order."); //setea el valor de 'error'
      console.error(error);

    }
    
    finally {  
      setLoading(false);  //corta el 'loader' mas all del resultado del 'try'.
    }
  };


  if (loading) {  // Si loading:true -> seteo el 'loader' con sus propiedades directamente, fuera del return. En otros C, lo incorporo dentro del return como <BarsLoader {...loaderProps} />
    return (
      <>
        <h1 className="text-center py-4 text-5xl bg-[#F3F4F6]">
        Por favor, espere. Su orden esta siendo procesada en estos momentos.
        </h1>
        <div className="my-5 flex justify-center">
          <BarLoader color="#111312" height={7} width={100} className="my-5" />
        </div>
      </>
    );
  }

  if (orderId) {
    return (   // el return devuelve info directamente.
      <>
        <p className="fraseCompra">Gracias por confiar en nosotros!</p>
        <h1 className="fraseNroCompra">
         Su numero de compra es: {orderId}
        </h1>
        
        <Link to="/" className="linkALandingProductos"><button className="botonSeguirComprando">
            Seguir comprando </button></Link>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center py-14 mb-2 text-5xl bg-[#F3F4F6]">CheckOut</h1>
      {error && (
        <p className="text-center text-red-500 text-lg mt-4">{error}</p>
      )}

            {/* paso prop 'onConfirm' con valor 'createOrder' al Compo hijo 'CheckoutForm' */}
      <CheckoutForm onConfirm={createOrder} />  
    </>
  );
};

export default Checkout;