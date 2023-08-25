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


let products = [
    {
    id: 1,
    nombre: 'Taormina',
    descripcion: 'A',
    tamanio: 'M',
    precio: 3500,
    foto:ramo1,
    eucalipto: 'si'

  },
  {
    id: 2,
    nombre: 'Bellagio',
    descripcion: 'B',
    tamanio: 'M',
    precio: 6000,
    foto:ramo2,
    eucalipto: 'si'

  },
  {
    id: 3,
    nombre: 'Milano',
    descripcion: 'C',
    tamanio: 'L',
    precio: 2000,
    foto:ramo3,
    eucalipto: 'no'

  },
  {
    id: 4,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'L',
    precio: 4300,
    foto:ramo4,
    eucalipto: 'no'

  },
  {
    id: 5,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'L',
    precio: 3600,
    foto:ramo5,
    eucalipto: 'si'

  },{
    id: 6,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 5200,
    foto:ramo6,
    eucalipto: 'no'

  },{
    id: 7,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 2600,
    foto:ramo7,
    eucalipto: 'si'

  },
  {
    id: 8,
    nombre: 'Eucalipto',
    descripcion: 'D',
    tamanio: 'M',
    precio: 4500,
    foto:ramo8,
    eucalipto: 'no'

  }] 


function ItemDetail() { 
                                     {/* id es la 'clave' del 'value' a capturar por URL del objeto useParams*/}
    const {id} = useParams()   
    console.log(id)

    const producto = products.find((prod) => prod.id === Number(id));   {/* barro la data y me quedo con el objeto cuyo id == id capturado por el useParams*/}

    return (  
      
    <div className="ItemDet">  
  
        <div className="divContenedorPhone">

            
            <div className = "nombreVolverPhone">        
                    
                <h1 className="nombreProdPhone">{producto.nombre}</h1>
                <Link to ="/"> <Button className="botonVolverPhone">Volver a Listado</Button></Link>
                
            </div>
            
            <div className="divFotoDetailPhone">                  
                        
                <img className="ramoPhone" src={producto.foto} alt={producto.nombre}/>
                            
            </div>  
            
            
            <div className = "detailProdPhone">                   
                <p className="precioProdPhone" >${producto.precio}</p>
                <p className="tamanioProdPhone">Tamanio: {producto.tamanio}</p>
                
            </div>

            
            <div className = "botonesDetallePhone"> 

                <div>
                    <Link to ="/carrito"> <Button className="botonAgregarCarrito">Agregar al Carrito </Button> </Link >
                    
                </div>


                <div className = "contadorStockPhone">
                    <div className = "numeroContador"> 1 </div>
                    <Link to ="/"> <Button className="botonUnidadesDisponiblesPhone">Unidades disponibles</Button></Link >
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
                        
                <img className="ramoDesktop" src={producto.foto} alt={producto.nombre}/>
                                    
            </div>  

            <div className="divCuerpoDerechoDesktop">
                
                <div className = "divCuerpoVolverDesktop">        
                         
                        <div className = "divDetailProdDesktop">  

                            <h1 className="nombreProdDesktop">{producto.nombre}</h1>       
                            

                            <div className = "divPrecioDektop"> 
                                <p className="precioDesktop">${producto.precio}</p>
                            </div>

                            <div className = "divTamanioDektop"> 
                                <p className="tamanioProd">Tamanio:{producto.tamanio}</p>
                            </div>

                            <br/>
                            <br/>
                                    
                            <div className = "botonesDetalleDesktop"> 

                                <div>
                                    <Link to ="/carrito"> <Button className="botonAgregarCarritoDesktop">Agregar al Carrito </Button> </Link >
                                    
                                </div>

                                <div className = "contadorStockDesktop">
                                    <div className = "numeroContador"> 1 </div>
                                    <Link to ="/products"> <Button className="botonUnidadesDisponiblesDesktop">Unidades disponibles</Button></Link >
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