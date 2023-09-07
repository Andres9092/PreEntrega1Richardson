import React from 'react'
import {createContext} from 'react';
import  { useState } from 'react';
import Contador from './Contador';

export const contexto = createContext()     // 3) Crear Contexto y permitir exportarlo como variable.

const Provider = contexto.Provider          // 4) Sacar 'Provider' de adentro del Contexto creado.


const CustomProvider = (props) => {         // 1) Creo ESTE archivo con componente NORMAL CustomProvider.
                                            // 2) Colocar al componente creado CustomProvider 'Provider' donde convenga, englobando a los C hijos que se requiera (En este caso dentro de App, englobando a 'NavBar', 'Main' y 'Footer')
  
  const [cantidadCart, setcantidadCart] = useState([])
  console.log("cantidadCartTotal :", cantidadCart)
  


  const addItem = (product,cantidadConfirmadaPorElContador) => {  // Funcion 'addItem' a pasarle a C hijos children que engloba el Provider, para que al interacturar con los hijos, en este caso con ItemDetail, la cual le devuelve 2 valores a la funcion (product,cantidadConfirmadaPorElContador) y se actualice el valor de 'cantidadCart'

    setcantidadCart(prev => [...prev, {...product,cantidadConfirmadaPorElContador}]) // Guarda la sumatoria de productos 'item' y cantidades seleccionadas 'cantidadConfirmada' para cada caso y actualiza 'cantidadCart'
 
  }


    return (  
                                            //  5) Se usa el 'Provider' dentro del return. Le provee a la parte de la aplicacion que englobe el CustomProvider, en este caso los children, del valor del Contexto, a traves de 'value'.

      <Provider value = {addItem}> 
                                            {/* Children -> C hijos que engloba 'CustomProvider' y a partir de los cuales se puede acceder por 'props' a 'value' globalmente. */}
          {props.children}     
          
      </Provider>

    )
  }

  export default CustomProvider;