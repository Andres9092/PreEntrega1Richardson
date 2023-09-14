import React from 'react'
import {createContext} from 'react';
import  { useState } from 'react';

export const contexto = createContext()     // 3) Crear Contexto y permitir exportarlo como variable.

const Provider = contexto.Provider          // 4) Sacar 'Provider' de adentro del Contexto creado.


const CustomProvider = (props) => {         // 1) Creo ESTE archivo con componente NORMAL CustomProvider.
                                            // 2) Colocar al componente creado CustomProvider 'Provider' donde convenga, englobando a los C hijos que se requiera (En este caso dentro de App, englobando a 'NavBar', 'Main' y 'Footer')
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);   

  const toggleSidebar = () => { 
    setSidebarOpen(!isSidebarOpen); //re-setea el edo de 'isSidebarOpen' a 'True'
  };

  const [searchTerminoBuscadoEnBarra, setSearchTerminoBuscadoEnBarra] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange'];


  const handleSearch = (terminoBuscadoEnBarra) => {  //'terminoBuscadoEnBarra' es el valor obtenido en C. de barra buscadora -> 'searchTerm'
    setSearchTerminoBuscadoEnBarra(terminoBuscadoEnBarra);  // setea valor para 'searchTerminoBuscadoEnBarra' con valor importado de 

  console.log('searchTerminoBuscadoEnBarra :',searchTerminoBuscadoEnBarra)

  const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(terminoBuscadoEnBarra.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };
  console.log('filteredItems :',filteredItems)



  const [arrayDeObjetosDeProductosAgregados, setArrayDeObjetosDeProductosAgregados] = useState([])
  console.log("arrayDeObjetosDeProductosAgregados :", arrayDeObjetosDeProductosAgregados)
  console.log("arrayDeObjetosDeProductosAgregados-Length :", arrayDeObjetosDeProductosAgregados.length)
    
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
  
}

  const removeFromCart = (product) => {  
  
    const cartUpdated = arrayDeObjetosDeProductosAgregados.filter((prod) => prod.id !== product.id)
    setArrayDeObjetosDeProductosAgregados(cartUpdated) //actualizo array.
    }

  const clearCart = (product) => {  // 

    setArrayDeObjetosDeProductosAgregados([])

  }
    
  
   
  const valorDelContexto = {   //variable, con funciones, a ser exportada a los C. hijos
    
    addItem:addItem,
    clearCart:clearCart,
    removeFromCart:removeFromCart,
    handleSearch:handleSearch,
    toggleSidebar:toggleSidebar,
    filteredItems,    
    searchTerminoBuscadoEnBarra,
    isSidebarOpen,
    arrayDeObjetosDeProductosAgregados: arrayDeObjetosDeProductosAgregados,
    user : "fg"    
  }
  
    return (  
                                            //  5) Se usa el 'Provider' dentro del return. Le provee a la parte de la aplicacion que englobe el CustomProvider, en este caso los children, del valor del Contexto, a traves de 'value'.

      <Provider value = {valorDelContexto}> 
                                            {/* Children -> C hijos que engloba 'CustomProvider' y a partir de los cuales se puede acceder por 'props' a 'value' globalmente. */}
          {props.children}     
          
      </Provider>

    )
  }

  export default CustomProvider;