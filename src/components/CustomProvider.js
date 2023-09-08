import React from 'react'
import {createContext} from 'react';
import  { useState } from 'react';

export const contexto = createContext()     // 3) Crear Contexto y permitir exportarlo como variable.

const Provider = contexto.Provider          // 4) Sacar 'Provider' de adentro del Contexto creado.


const CustomProvider = (props) => {         // 1) Creo ESTE archivo con componente NORMAL CustomProvider.
                                            // 2) Colocar al componente creado CustomProvider 'Provider' donde convenga, englobando a los C hijos que se requiera (En este caso dentro de App, englobando a 'NavBar', 'Main' y 'Footer')
  
  const [arrayDeObjetosDeProductosAgregados, setArrayDeObjetosDeProductosAgregados] = useState([])
  console.log("arrayDeObjetosDeProductosAgregados :", arrayDeObjetosDeProductosAgregados)
  
  
  
  
  console.log("arrayDeObjetosDeProductosAgregados-Length :", arrayDeObjetosDeProductosAgregados.length)
    
  const [cantidadTotalProductosAgregados, setCantidadTotalProductosAgregados] = useState(0)
  console.log("cantidadTotalProductosAgregados :", cantidadTotalProductosAgregados)

  const [montoTotalProductosAgregados, setMontoTotalProductosAgregados] = useState(0)
  console.log("montoTotalProductosAgregados :", montoTotalProductosAgregados)



                    //product -> objeto producto con su data.
  const addItem = (product,cantidadConfirmadaPorElContadorDelProducto) => {  // Funcion 'addItem' a pasarle a C hijos children que engloba el Provider, para que al interacturar con los hijos, en este caso con ItemDetail, la cual le devuelve 2 valores a la funcion (product,cantidadConfirmadaPorElContadorDelProducto) y se actualice el valor de 'cantidadCart'

    
    //setArrayDeObjetosDeProductosAgregados(prev => [...prev, {...product,cantidadConfirmadaPorElContadorDelProducto}]) // Guarda la sumatoria de productos 'item' y cantidades seleccionadas 'cantidadConfirmada' para cada caso y actualiza 'arrayDeObjetosDeProductosAgregados'
    

    const existingProduct = arrayDeObjetosDeProductosAgregados.find((item) => item.id === product.id);
    // Compara el producto seleccionado con su cantidad respectiva al array de objetos ya existente. Inicialmente 'arrayDeObjetosDeProductosAgregados' esta [], por lo que no existe igualdad
    


    if (existingProduct) { //En la 1ra vuelta, agrega el 1er producto, ya que 'existingProduct' no existe. Cuando se confirma un producto repetido, entra a la condicion.
      // Product is already in the cart, update the quantity. A la cantidad original confirmada del prodcuto existente, le agrega la nueva cantidad confirmada para ese mismo producto.
      const updatedCart = arrayDeObjetosDeProductosAgregados.map((item) =>
        item.id === product.id ? { ...item, cantidadConfirmadaPorElContadorDelProducto: item.cantidadConfirmadaPorElContadorDelProducto + cantidadConfirmadaPorElContadorDelProducto } : item
      );
      setArrayDeObjetosDeProductosAgregados(updatedCart);

    } else {
      //El producto no existe en la 1ra vuelta, lo agrega directo -> re setea el valor del array 'ArrayDeObjetosDeProductosAgregados' va pusheando los productos agregados.
      setArrayDeObjetosDeProductosAgregados([...arrayDeObjetosDeProductosAgregados, { ...product, cantidadConfirmadaPorElContadorDelProducto }]);
    }
  

  setCantidadTotalProductosAgregados(cantidadTotalProductosAgregados + cantidadConfirmadaPorElContadorDelProducto) // Guarda la sumatoria de productos 'cantidadConfirmadaPorElContadorDelProducto' 
  setMontoTotalProductosAgregados(montoTotalProductosAgregados + (cantidadConfirmadaPorElContadorDelProducto * product.precio))  //Guarda la sumatoria total de monto de productos agregados, a traves de ( 'cantidadConfirmadaPorElContadorDelProducto' * el precio de cada producto) para cada producto.

}


  const removeItem = (product,arrayDeObjetosDeProductosAgregados) => {  
  
    const cartUpdated = arrayDeObjetosDeProductosAgregados.filter((prod) => prod.id !== product.id)
    console.log('cartUpdated :', cartUpdated)
    setArrayDeObjetosDeProductosAgregados(cartUpdated) 
   
    //setCantidadTotalProductosAgregados(0)
    //setMontoTotalProductosAgregados([])

    }



  const clearCart = (product) => {  // 

    setArrayDeObjetosDeProductosAgregados([])
    setCantidadTotalProductosAgregados(0)
    setMontoTotalProductosAgregados([])

  }


   const valorDelContexto = {   //variable, con funciones, a ser exportada a los C. hijos
    
    addItem:addItem,
    removeItem:removeItem,
    clearCart:clearCart,
    removeItem:removeItem,
    arrayDeObjetosDeProductosAgregados: arrayDeObjetosDeProductosAgregados,
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