import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/ProdCards.css'


function ProdCards(props){ /* Las props vienen definidas por el Componente padre ItemListContainer, que contienen la data importada con el 'fetch' */
    console.log(props)

return(

        <section className="ContenedorDeTarjetas">
         
               
            {props.nombrePropProducts.length ==0

                ? <p>Cargando...</p>
                : props.nombrePropProducts.map(
                    (item,i) => {
                        console.log(item,i)
                        return(
                            <div Key={i} className="boxTarjeta">
                            
                                <div className="imagenProdCard">
                                    <img className="imagenProd" src = {item.foto} alt="Imagen del producto"/>     
                                </div>
                                        
                                <div className="nombreDescripcion">
                                        <p className="nombreProd">-{item.nombre}-</p>
                                        <p className="descripProd">{item.descripcion}</p>
                                </div>
                                <div className="precioTamanio">
                                        <p className="precioProd"> $ {item.precio}</p>
                                        <p className="tamanioProd">Tamanio: {item.tamanio}</p>
                                </div>
                
                            </div>
                        )
                    }
                )
                } 
        </section>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ProdCards.defaultProps = {
    nombre: 'Nombre no disponible',
    descripcion: 'Descripcion no disponible',
    tamanio: 'Tamanio no disponible',
    precio: 'Precio no disponible' ,
    foto: 'Foto no disponible' 
}

/* PROPTYPES */

ProdCards.propTypes = {
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

export default ProdCards;