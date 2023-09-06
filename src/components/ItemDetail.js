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


function ItemDetail({contador}) { //StateUpLifting. Le paso al C padre 'ItemDetail' la prop del C hijo Contador.

    const {id} = useParams()   
    console.log('id :', id)   //id : 1cVNWdY0BDnjelTnoAfL -> el value es el pasado desde por 'products' desde ItemListContainer.

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [cantidad, setCantidad] = useState(0)
    
    const loaderProps = {
      loading,
      size: 40,
      duration: 1,
      colors: ['#c99d0b', '#cfab35']}
  
    const {addItem} = useContext(contexto)

    console.log('addItem :',addItem)
      
    useEffect( () => {
      
      const productCollection = collection(db, 'productos')
      const referenciaDelDocumento = doc(productCollection, id)

      console.log('referenciaDelDocumento :', referenciaDelDocumento)

      const consulta = getDoc (referenciaDelDocumento)   //la consulta es 'getDoc' no 'getDocs', porque se trae 1 solo producto de Firestore.
      console.log('consulta :', consulta)

      consulta
          .then((res)  => {
            console.log('res :',res)
            console.log('res.data) :', res.data)
            setProduct(res.data())  //actualiza  valor para 'product'
          })

          .catch((error) => {
            console.log('Dio Mal')
          })
          setError(error)
        

          setTimeout(() => {
            setLoading(false)
          },1000)
    
  }, []);

      const handleCallback = (cantidadConfirmada) => {  //'cantidadConfirmada' trae el valor seteado en el C hijo 'Contador'

        setCantidad(cantidadConfirmada)  // setea nuevo valor a 'cantidad'
        console.log("La cantidad confirmada es: ", cantidadConfirmada )
        
        
        const item ={                             //creo item con caracteristicas del producto y la cantidad confirmada del mismo.
          product
          
       }
       console.log("item: ", item )
       console.log("item.product.precio: ", item.product.precio)
      
       addItem(item,cantidadConfirmada)
      
      }
 
    return (  
        
    <div className="ItemDet">  
   
            
        <BarsLoader {...loaderProps} />
        <div className="divContenedorPhone">

            
            <div className = "nombreVolverPhone">        
                    
                <h1 className="nombreProdPhone">{product.nombre}</h1>
                <Link to ="/"> <Button className="botonVolverPhone">Volver a Listado</Button></Link>
                
            </div>
            
            <div className="divFotoDetailPhone">                  
                        
                <img className="ramoPhone" src={product.foto} alt={product.nombre}/>
                            
            </div>  
            
            
            <div className = "detailProdPhone">    
                <p className="frasePrecioUnitario">Precio unitario:</p>               
                <p className="precioProdPhone" >Ar$ {product.precio}</p>
                <p className="tamanioProdPhone">Tamanio: {product.tamanio}</p>
                
            </div>
             
            <div>
              <Link to ="/favoritos"> <Button className="botonFavoritoPhone"><i class="fa-solid fa-regular fa-heart"></i>  Agregar a Favoritos </Button> </Link >
                                    
            </div>

            
            <div className = "botonesDetallePhone"> 


                <div className = "contadorStockPhone">
                    <div className = "numeroStock" style = {{color : product.stock == 0 ? "red" : "green"}}> {product.stock} </div>
                    <Button className="botonUnidadesDisponiblesPhone">Stock</Button>
                </div>     
                <p>---------------------------</p>
                <div className = "contadorProdAgregados">
                      <p>Unidades confirmadas: {cantidad} </p>
                </div>
                <br></br>     
                                
                <div>
                  {  
                    cantidad > 0 ? (  // Inicialmente el link no se ve ya que 'cantidad = 0' y se muestra el boton del Comp COntador 'Agregar al carrito'. Al re setearse el valor de 'cantidad', se muestra el link 'Terminar compra' y desaparece el boton 'Agregar al carrito'
                    <Link to ="/carrito" className="botonTerminarCompra"><i class="fa-solid fa-money-check-dollar"></i> Finalizar compra</Link>
                    ) : (
                        <Contador  nombrePropHandleCallback = {handleCallback} stock = {product.stock} initial ={1}/>  /* Le paso al C hijo Contador la prop  'nombrePropHandleCallback' cuyo contenido es la funcion 'handleCallback'  */
                    )
                   }
                </div>
                <br></br>
               
                 <div className = "precioTotal">
                    <p className = "precioTotal" >Total: $ {product.precio * cantidad} </p>
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
                        
                <img className="ramoDesktop" src={product.foto} alt={product.nombre}/>
                                    
            </div>  

            <div className="divCuerpoDerechoDesktop">
                
                <div className = "divCuerpoVolverDesktop">        
                         
                        <div className = "divDetailProdDesktop">  

                            <h1 className="nombreProdDesktop">{product.nombre}</h1>       
                            

                            <div className = "divPrecioDektop"> 
                                <p className="frasePrecioUnitario">Precio unitario:</p>     
                                <p className="precioDesktop">Ar$ {product.precio}</p>
                            </div>

                            <div className = "divTamanioDektop"> 
                                <p className="tamanioProd">Tamanio:{product.tamanio}</p>
                            </div>
                            <br/>
                            <div>
                                    <Link to ="/favoritos"> <Button className="botonFavoritosDesktop"><i class="fa-solid fa-regular fa-heart"></i>  Agregar a Favoritos </Button> </Link >
                                    
                            </div>
                                    
                            <div className = "botonesDetalleDesktop"> 

                                <div className = "contadorStockDesktop">
                                    <div className = "numeroStock" style = {{color : product.stock == 0 ? "red" : "green"}}> {product.stock} </div>
                                    <Button className="botonUnidadesDisponiblesDesktop">Stock</Button>
                                </div> 
                                <br></br>   
                                <p>---------------------------</p>

                                <div className = "contadorProdAgregados">
                                  <p>Unidades confirmadas: {cantidad} </p>
                                </div>                        
                                <br></br>
                                
                               
                                <div className = "precioTotal">  
                                    <p className = "precioTotal">Total: $ {product.precio * cantidad}</p>
                                </div> 
                              
                                <br></br>
                                <div>
                                  {  
                                    cantidad > 0 ? (
                                          <Link to ="/carrito" className="botonTerminarCompra"><i class="fa-solid fa-money-check-dollar"></i> Finalizar compra</Link>  /* Le paso al C hijo Contador la prop  'nombrePropHandleCallback' cuyo contenido es la funcion 'handleCallback'  */
                                    ) : (
                                        <Contador  nombrePropHandleCallback = {handleCallback} stock = {product.stock} initial ={1}/>  
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
                    <Link to ="/"> <Button className="botonVolverDesktop">Volver a Listado</Button></Link>
                </div>

                
            </div>
        </div>
    </div>  
    )
  }
  
  export default ItemDetail;