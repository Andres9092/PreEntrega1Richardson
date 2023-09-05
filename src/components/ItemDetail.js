import React from 'react'
import '../assets/css/ItemDetail.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'
import ramo1 from '../assets/images/Ramo1.jpg';
import ramo2 from '../assets/images/Ramo2.jpg';
import ramo3 from '../assets/images/Ramo3.jpg';
import ramo4 from '../assets/images/Ramo4.jpg';
import ramo5 from '../assets/images/Ramo5.jpg';
import ramo6 from '../assets/images/Ramo6.jpg';
import ramo7 from '../assets/images/Ramo7.jpg';
import ramo8 from '../assets/images/Ramo8.jpg';
import {useParams} from 'react-router-dom'; 
import {db} from '../firebase';
import {getDoc, collection, doc} from 'firebase/firestore';
import {useEffect, useState} from 'react';

{/*
const products =  [
    {
    id: 1,
    nombre: 'Taormina',
    descripcion: 'A',
    tamanio: 'M',
    precio: 3500,
    foto:ramo1,
    eucalipto: 'si',
    stock: 10

  },
  {
    id: 2,
    nombre: 'Bellagio',
    descripcion: 'B',
    tamanio: 'M',
    precio: 6000,
    foto:ramo2,
    eucalipto: 'si',
    stock: 2

  },
  {
    id: 3,
    nombre: 'Milano',
    descripcion: 'C',
    tamanio: 'L',
    precio: 2000,
    foto:ramo3,
    eucalipto: 'no', 
    stock: 1

  },
  {
    id: 4,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'L',
    precio: 4300,
    foto:ramo4,
    eucalipto: 'no',
    stock: 10

  },
  {
    id: 5,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'L',
    precio: 3600,
    foto:ramo5,
    eucalipto: 'si',
    stock: 8

  },{
    id: 6,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 5200,
    foto:ramo6,
    eucalipto: 'no',
    stock: 0

  },{
    id: 7,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 2600,
    foto:ramo7,
    eucalipto: 'si',
    stock: 0

  },
  {
    id: 8,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 4500,
    foto:ramo8,
    eucalipto: 'no',
    stock: 4

  }]*/};


function ItemDetail() { 

    const {id} = useParams()   
    console.log('id :', id)   //id : 1cVNWdY0BDnjelTnoAfL -> el value es el pasado desde por 'products' desde ItemListContainer


  //const resultado = useParams()   // useParams() ES UN OBJETO. Captura el objeto obtenido por la ruta. VALORES POSIBLES PARA EL OBJETO useParams.-> {} si se pasa la ruta /, {id: M} si se pasa la ruta /categoria/M, {id: L} si se pasa la ruta /categoria/L}
  //console.log('resultado: ', resultado)

  //const id = resultado.id //Accedo a =l value de la key.
  //console.log('id: ',id)   
    
    const [product, setProduct] = useState([])
    const [error, setError] = useState("")
  
  {/*Hook para ejecutar la funcion 1 vez unicamente, que cambia el estado inicial vacio de 'products', por medio de setProduct con la data array traida de la variable creada dentro de la funcion. */}
   
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
            setProduct(res.data())
          })

          .catch((error) => {
            console.log('Dio Mal')
          })
          setError(error)
        
                   
          //const productsDetalle = products.find((prod) => prod.id === Number(id)); // barro la data y me quedo con el objeto cuyo id == id capturado por el useParams
                                                                                      
          //console.log('producto :', productsDetalle)
          
        {/*  getProducts (products)  */}
    
  }, []);

      
    
  {/* id es la 'clave' del 'value' a capturar por URL del objeto useParams, cuando apreto el boton 'ver detalle' que esta asociado a la ruta "/productos/:id"*/}


    return (  
        
      
    <div className="ItemDet">  
   
  
        <div className="divContenedorPhone">

            
            <div className = "nombreVolverPhone">        
                    
                <h1 className="nombreProdPhone">{product.nombre}</h1>
                <Link to ="/"> <Button className="botonVolverPhone">Volver a Listado</Button></Link>
                
            </div>
            
            <div className="divFotoDetailPhone">                  
                        
                <img className="ramoPhone" src={product.foto} alt={product.nombre}/>
                            
            </div>  
            
            
            <div className = "detailProdPhone">                   
                <p className="precioProdPhone" >${product.precio}</p>
                <p className="tamanioProdPhone">Tamanio: {product.tamanio}</p>
                
            </div>

            
            <div className = "botonesDetallePhone"> 

                <div>
                    <Link to ="/carrito"> <Button className="botonAgregarCarrito">Agregar al Carrito </Button> </Link >
                    
                </div>


                <div className = "contadorStockPhone">
                    <div className = "numeroContador" style = {{color : product.stock == 0 ? "red" : "green"}}> {product.stock} </div>
                    <Link to ="/"> <Button className="botonUnidadesDisponiblesPhone">Stock</Button></Link >
                </div>                 


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
                                <p className="precioDesktop">${product.precio}</p>
                            </div>

                            <div className = "divTamanioDektop"> 
                                <p className="tamanioProd">Tamanio:{product.tamanio}</p>
                            </div>

                            <br/>
                            <br/>
                                    
                            <div className = "botonesDetalleDesktop"> 

                                <div>
                                    <Link to ="/carrito"> <Button className="botonAgregarCarritoDesktop">Agregar al Carrito </Button> </Link >
                                    
                                </div>

                                <div className = "contadorStockDesktop">
                                    <div className = "numeroContador" style = {{color : product.stock == 0 ? "red" : "green"}}> {product.stock} </div>
                                    <Link to ="/products"> <Button className="botonUnidadesDisponiblesDesktop">Stock</Button></Link >
                                </div>                 
                        
                                

                            </div>

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