import React from 'react'
import {createContext} from 'react';
import  { useState } from 'react';

export const contexto = createContext()     // 3) Crear Contexto y permitir exportarlo como variable.

const Provider = contexto.Provider          // 4) Sacar 'Provider' de adentro del Contexto creado.


const CustomProvider = (props) => {         // 1) Creo ESTE archivo con componente NORMAL CustomProvider.
                                            // 2) Colocar al componente creado CustomProvider 'Provider' donde convenga, englobando a los C hijos que se requiera (En este caso dentro de App, englobando a 'NavBar', 'Main' y 'Footer')
  
  const [cantidadItemsDistintosAgregados, setCantidadItemsDistintosAgregados] = useState([])
  console.log("cantidadItemsDistintosAgregados :", cantidadItemsDistintosAgregados)
  console.log("cantidadItemsDistintosAgregados-Length :", cantidadItemsDistintosAgregados.length)
    
  const [cantidadTotalProductosAgregados, setCantidadTotalProductosAgregados] = useState(0)
  console.log("cantidadTotalProductosAgregados :", cantidadTotalProductosAgregados)

  const [montoTotalProductosAgregados, setMontoTotalProductosAgregados] = useState(0)
  console.log("montoTotalProductosAgregados :", montoTotalProductosAgregados)




  const addItem = (product,cantidadConfirmadaPorElContador) => {  // Funcion 'addItem' a pasarle a C hijos children que engloba el Provider, para que al interacturar con los hijos, en este caso con ItemDetail, la cual le devuelve 2 valores a la funcion (product,cantidadConfirmadaPorElContador) y se actualice el valor de 'cantidadCart'

    
    setCantidadItemsDistintosAgregados(prev => [...prev, {...product,cantidadConfirmadaPorElContador}]) // Guarda la sumatoria de productos 'item' y cantidades seleccionadas 'cantidadConfirmada' para cada caso y actualiza 'cantidadItemsDistintosAgregados'
    setCantidadTotalProductosAgregados(cantidadTotalProductosAgregados + cantidadConfirmadaPorElContador) // Guarda la sumatoria de productos 'cantidadConfirmadaPorElContador' 
    setMontoTotalProductosAgregados(montoTotalProductosAgregados + (cantidadConfirmadaPorElContador * product.precio))  //Guarda la sumatoria total de monto de productos agregados, a traves de ( 'cantidadConfirmadaPorElContador' * el precio de cada producto) para cada producto.

  }

  const removeItem = (product,cantidadItemsDistintosAgregados) => {  
  
    const cartUpdated = cantidadItemsDistintosAgregados.filter((prod) => prod.id !== product.id)
    console.log('cartUpdated :', cartUpdated)
    setCantidadItemsDistintosAgregados(cartUpdated) 
   
    //setCantidadTotalProductosAgregados(0)
    //setMontoTotalProductosAgregados([])

    }



  const clearCart = (product) => {  // 

    setCantidadItemsDistintosAgregados([])
    setCantidadTotalProductosAgregados(0)
    setMontoTotalProductosAgregados([])

  }


   const valorDelContexto = {   //variable, con funciones, a ser exportada a los C. hijos
    
    addItem:addItem,
    removeItem:removeItem,
    clearCart:clearCart,
    removeItem:removeItem,
    cantidadItemsDistintosAgregados: cantidadItemsDistintosAgregados,
    cantidadTotalProductosAgregados:cantidadTotalProductosAgregados, 
    montoTotalProductosAgregados: montoTotalProductosAgregados,
    user : "fg"    
  }
  
  console.log('valorDelContexto :', valorDelContexto)

    return (  
                                            //  5) Se usa el 'Provider' dentro del return. Le provee a la parte de la aplicacion que englobe el CustomProvider, en este caso los children, del valor del Contexto, a traves de 'value'.

      <Provider value = {valorDelContexto}> 
                                            {/* Children -> C hijos que engloba 'CustomProvider' y a partir de los cuales se puede acceder por 'props' a 'value' globalmente. */}
          {props.children}     
          
      </Provider>

    )
  }

  export default CustomProvider;