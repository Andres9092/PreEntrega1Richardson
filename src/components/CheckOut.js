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

  const productosOriginalesBaseDatos = collection(db, "products")  //traigo los documentos 'productos' existentes en la collection 'products' de la BD.

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

      const outOfStock = [];

      const productosAgregadosAlCarrito = valorDelContexto.arrayDeObjetosDeProductosAgregados.map((prod) => prod.id);   

      const productsAddedFromFirestore = await getDocs(
        query(productosOriginalesBaseDatos, where(documentId(), "in", productosAgregadosAlCarrito))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, ordenCreada);

        setOrderId(orderAdded.id);
        clearCart();

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