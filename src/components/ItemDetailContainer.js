import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Item.css'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import '../assets/css/ItemDetail.css';


function ItemDetailContainer(props){ 
    console.log('props :', props)

return(   

        <section className="ContenedorDeTarjetas">
         
               
            {props.nombrePropProducts.length === 0  

                ? <p>Cargando...</p>
                : props.nombrePropProducts.map(  
                    (item,i) => {
                        console.log(item,i)
                        return(
                            <div key={i} className="boxTarjeta">
                            
                                <div className="imagenProdCard">
                                    <img className="imagenProd" src = {item.foto} alt="Imagen del producto"/>
                                </div>
                                        
                                <div className="nombreDescripcion">
                                        <p className="nombreProd">-{item.nombre}-</p>
                                </div>
                                <div className="precioTamanio">
                                        <p className="precioProd"> $ {item.precio}</p>
                                        <p className="tamanioProd">Tamanio: {item.tamanio}</p>
                                </div>

                                <br></br>
                                <div className="stock">
                                    
                                        <p style = {{color : item.stock == 0 ? "red" : "green"}}>Stock: {item.stock}</p> 
                                </div>

                               
                                    <Link to ={`/productos/${item.id}`}> <Button className="botonDetalle">
                                        Ver Detalle     
                                    </Button> </Link >
                               
      
                
                            </div>
                        )
                    }
                )
                } 
        </section>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ItemDetailContainer.defaultProps = {
    nombre: 'Nombre no disponible',
    descripcion: 'Descripcion no disponible',
    tamanio: 'Tamanio no disponible',
    precio: 'Precio no disponible' ,
    foto: 'Foto no disponible' 
}

/* PROPTYPES */

ItemDetailContainer.propTypes = {
    attributes: PropTypes.shape({
        foto: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        tamanio: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        precio: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired        
    })
}

export default ItemDetailContainer;