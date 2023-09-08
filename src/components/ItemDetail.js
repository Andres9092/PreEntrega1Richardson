import React, { useContext } from 'react'
import '../assets/css/ItemDetail.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Contador from './Contador';
import {useParams} from 'react-router-dom'; 
import {db} from '../firebase';
import {getDoc, collection, doc} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import BarsLoader from 'react-loaders-kit/lib/bars/BarsLoader'
import {contexto} from './CustomProvider';


function ItemDetail({contador}) { //El componente hijo 'Contador' le pasa al C padre 'ItemDetail' la prop del C hijo Contador.

    const {id} = useParams()   //Se captura el id pasado por ruta desde ItemDetailContainer ->  Link to ={`/objetoProductoos/${item.id}`}
    console.log('id :', id)   //id : 1cVNWdY0BDnjelTnoAfL -> el value es el pasado inicialmente por props 'nombrePropobjetoProductos'y de value 'objetoProductos' desde ItemListContainer a ItemDetailContainer, y luego de ItemDetailContainer a ItemDetail por ruta ->  Link to ={`/objetoProductoos/${item.id}`}

    const [objetoProducto, setobjetoProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState("")

    const loaderProps = {    //seteo de Loader
      loading,
      size: 40,
      duration: 1,
      colors: ['#c99d0b', '#cfab35']}
  
    const {addItem} = useContext(contexto)    //StateUpLifting -> //Se importa la funcion global exportada 'addItem' del contexto creado en el Compon 'CustomProvider'
    
      
    useEffect( () => {
      
      const objetoProductoCollection = collection(db, 'objetoProductoos')  
      const referenciaDelDocumento = doc(objetoProductoCollection, id)  //Busca en la coleccion 'objetoProductoos', el 'documento' de objetoProductoo cuyo 'id' coincide con el captado por el useParams.

      console.log('referenciaDelDocumento :', referenciaDelDocumento)

      const consulta = getDoc (referenciaDelDocumento)   //la consulta es 'getDoc' no 'getDocs', porque se trae 1 solo objetoProductoo de Firestore.
      console.log('consulta :', consulta)

      consulta
          .then((res)  => {
            console.log('res :', res)
            console.log('res.data) :', res.data)  //Devuelve la data asociada al objetoProductoo seleccionado por id.
            setobjetoProducto(res.data())  //actualiza valor para 'objetoProducto' cuyo valor inicial es 'vacio', ofreciendo la data asociada al mismo.
          })

          .catch((error) => {
            console.log('Dio Mal')
          })
          setError(error)
        

          setTimeout(() => {      // seteo del funcionamiento del Loader programado. Corta el Loader luego de 1000 ms cambiando el edo a 'false'
            setLoading(false)
          },1000)
    
  }, []);
                                                  // Contador devuelve a C ItemDetail -> nombrePropHandleCallback(contador) que es (cantidadDeCadaProductooConfirmadaPorElContador)
      const handleCallback = (cantidadDeCadaobjetoProductooConfirmadaPorElContador) => {  //'cantidadConfirmada' trae el valor seteado de 'contador' en el C hijo 'Contador'

        setCantidad(cantidadDeCadaobjetoProductooConfirmadaPorElContador)  // setea nuevo valor a 'cantidad'
        console.log("La cantidad confirmada por el contador es: ", cantidadDeCadaobjetoProductooConfirmadaPorElContador )
        
        
       console.log("objetoProducto: ", objetoProducto )
       console.log("objetoProducto.precio: ", objetoProducto.precio)
      
       addItem(objetoProducto,cantidadDeCadaobjetoProductooConfirmadaPorElContador)  //Se devuelve a la funcion importada 'addItem' del C. Padre, los valores 'objetoProducto' y 'cantidadDeCadaobjetoProductooConfirmadaPorElContador'
      }
 
    return (  
        
    <div className="ItemDet">  
    
                                         
        <BarsLoader {...loaderProps} />     {/*Implementacion del Loader seteado por 1000ms inicialemente */}
        
        <div className="divContenedorPhone">

            <div className = "nombreVolverPhone">        
                    
                <h1 className="nombreProdPhone">-{objetoProducto.nombre}-</h1>
                <Link to ="/"> <Button className="botonVolverPhone"><i class="fa-solid fa-arrow-rotate-left"></i> Productos</Button></Link>
                
            </div>
            
            <div className="divFotoDetailPhone">                  
                        
                <img className="ramoPhone" src={objetoProducto.foto} alt={objetoProducto.nombre}/>
                            
            </div>  
            
            
            <div className = "detailProdPhone">    
                <p className="frasePrecioUnitario">Precio unitario:</p>               
                <p className="precioProdPhone" >Ar$ {objetoProducto.precio}</p>
                <p className="tamanioProdPhone">Tamanio: {objetoProducto.tamanio}</p>
                
            </div>
             
            <div>
              <Link to ="/favoritos"> <Button className="botonFavoritoPhone"><i class="fa-solid fa-regular fa-heart"></i>  Agregar a Favoritos </Button> </Link >
                                    
            </div>

            
            <div className = "botonesDetallePhone"> 


                <div className = "contadorStockPhone">
                    <div className = "numeroStock" style = {{color : objetoProducto.stock == 0 ? "red" : "green"}}> {objetoProducto.stock} </div>
                    <Button className="botonUnidadesDisponiblesPhone">Stock</Button>
                </div>     
                <p>---------------------------</p>
                <div className = "contadorProdAgregados">
                                                                {/* 'cantidad' seteada en 0 inicialmente */}
                      <p>Unidades confirmadas: {cantidad} </p>    
                </div>
                <br></br>     
                                
                <div>
                  {  
                    cantidad > 0 ? (  // Inicialmente el link no se ve ya que 'cantidad = 0' y se muestra el boton del Comp Contador 'Agregar al carrito'. Al re setearse el valor de 'cantidad', se muestra el link 'Terminar compra' y desaparece el boton 'Agregar al carrito'
                    <Link to ="/carrito" className="botonTerminarCompra"><i class="fa-solid fa-money-check-dollar"></i> Finalizar compra</Link>
                    ) : (
                        <Contador  nombrePropHandleCallback = {handleCallback} stock = {objetoProducto.stock} initial ={1}/>  /* Le paso al C hijo Contador la prop  'nombrePropHandleCallback' cuyo contenido es la funcion 'handleCallback', 'stock' e 'initial' -> seteado por default en 1.  */
                    )
                   }
                </div>
                <br></br>
                                                      {/* // 'Total' Inicialmente seteado en 0 */}
                 <div className = "precioTotal">   
                    <p className = "precioTotal" >Total: $ {objetoProducto.precio * cantidad} </p>
                 </div>             
                <br></br>

            </div>


            <div className = "divDescripProdPhone"> 

                <p className="descripPhone"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.

                    Size approximately 35cm high x 35cm wide. </p>
            </div>

        </div>


        {/* -----------------------------------------DESKTOP----------------------------------------- */}
  
        <div className="divContenedorDesktop">
            
            <div className="divFotoDesktop">                  
                        
                <img className="ramoDesktop" src={objetoProducto.foto} alt={objetoProducto.nombre}/>
                                    
            </div>  

            <div className="divCuerpoDerechoDesktop">
                
                <div className = "divCuerpoVolverDesktop">        
                         
                        <div className = "divDetailProdDesktop">  

                            <h1 className="nombreProdDesktop">-{objetoProducto.nombre}-</h1>       
                            

                            <div className = "divPrecioDektop"> 
                                <p className="frasePrecioUnitario">Precio unitario:</p>     
                                <p className="precioDesktop">Ar$ {objetoProducto.precio}</p>
                            </div>

                            <div className = "divTamanioDektop"> 
                                <p className="tamanioProd">Tamanio:{objetoProducto.tamanio}</p>
                            </div>
                            <br/>
                            <div>
                                    <Link to ="/favoritos"> <Button className="botonFavoritosDesktop"><i class="fa-solid fa-regular fa-heart"></i>  Agregar a Favoritos </Button> </Link >
                                    
                            </div>
                                    
                            <div className = "botonesDetalleDesktop"> 

                                <div className = "contadorStockDesktop">
                                    <div className = "numeroStock" style = {{color : objetoProducto.stock == 0 ? "red" : "green"}}> {objetoProducto.stock} </div>
                                    <Button className="botonUnidadesDisponiblesDesktop">Stock</Button>
                                </div> 
                                <br></br>   
                                <p>---------------------------</p>

                                <div className = "contadorProdAgregados">
                                  <p>Unidades confirmadas: {cantidad} </p>
                                </div>                        
                                <br></br>
                                
                               
                                <div className = "precioTotal">  
                                    <p className = "precioTotal">Total: $ {objetoProducto.precio * cantidad}</p>
                                </div> 
                              
                                <br></br>
                                <div>
                                  {  
                                    cantidad > 0 ? (
                                          <Link to ="/carrito" className="botonTerminarCompra"><i class="fa-solid fa-money-check-dollar"></i> Finalizar compra</Link>  /* Le paso al C hijo Contador la prop  'nombrePropHandleCallback' cuyo contenido es la funcion 'handleCallback'  */
                                    ) : (
                                        <Contador  nombrePropHandleCallback = {handleCallback} stock = {objetoProducto.stock} initial ={1}/>  
                                    )
                                  }
                                </div>
                                <br></br>
                            </div>
                            <br></br>
                            <div className = "divDescripDektop"> 
                                <p className="descripDesk"> Soft pastel tones set in a mini gold pot with a wooden stand. Featuring preserved Colombian Roses, Hydrangeas, Ruscus, Ming Ferns and Palms.
                            
                                Size approximately 35cm high x 35cm wide. </p>
                            </div>
                        
                        </div> 

                </div>

                <div>
                    <Link to ="/"> <Button className="botonVolverDesktop"><i class="fa-solid fa-arrow-rotate-left"></i> objetoProductoos</Button></Link>
                </div>

                
            </div>
        </div>
    </div>  
    )
  }
  
  export default ItemDetail;