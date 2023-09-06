import React from 'react'
import {createContext} from 'react';
import  { useState } from 'react';
import Contador from './Contador';

export const contexto = createContext()     // 3) Crear contexto y permitir exportarlo como variable.

const Provider = contexto.Provider          // 4) Sacar 'Provider' de adentro del Contexto creado.


const CustomProvider = (props) => {         // 1) Creo ESTE archivo con componente CustomProvider.
                                            // 2) Colocar al componente 'Provider' donde convenga, englobando a los C hijos que se requiera (En este caso dentro de App, englobando a 'NavBar', 'Main' y 'Footer')
  const [cantidadCart, setcantidadCart] = useState([])
  console.log("cantidadCartTotal :", cantidadCart)



  const addItem = (item,cantidadConfirmada) => {

    setcantidadCart(prev => [...prev, {...item,cantidadConfirmada}])
 
  }


    return (  
      

      <Provider value = {{addItem}}> {/* 5) Se usa el 'Provider' dentro del return. Le provee a la parte de la aplicacion que englobe el CustomProvider, del valor del Contexto, a traves de 'value'.*/}
          
          {props.children}     {/* Children -> C hijos que engloba 'CustomProvider' y a partir de los cuales se puede acceder por 'props' a 'value' globalmente. */}
          
      </Provider>

    )
  }

  export default CustomProvider;