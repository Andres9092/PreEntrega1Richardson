import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Item.css'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import '../assets/css/ItemDetail.css';





function ItemDetailContainer(props){ /* Las props vienen definidas por el Componente padre ItemListContainer, que contienen la data importada nombrePropProducts = {products} */
    console.log(props)

return(   

        <section className="ContenedorDeTarjetas">
         
               
            {props.nombrePropProducts.length === 0  /* Si el array 'nombrePropProducts' esta vacio */

                ? <p>Cargando...</p>
                : props.nombrePropProducts.map(   /* Si el array 'nombrePropProducts' NO ESTA vacio, mapeo cada objeto del array y crea la tarjeta con la data respectiva a cada 'value' para cada 'key' */
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


                                <div className="stock">
                                        <p className="precioProd"> $ {item.stock}</p>  {/*Condicional color stock segun prop item.stock*/}
                                        <p style = {{color : item.stock == 0 ? "red" : "green"}}>Stock: {item.stock}</p> 
                                </div>

                               
                                    <Link to ={`/productos/${item.id}`}> <Button className="botonDetalle"> {/* Al darle click al boton, redirije a la ruta ->  /item/:id , es decir conduce al Comp ItemDetail, definido en C Main. Cada id sera capturado luego de la URL por el useParams y reflejado en Comp ItemDetail */}
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