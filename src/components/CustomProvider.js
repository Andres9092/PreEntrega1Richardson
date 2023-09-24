import React from 'react'
import {createContext} from 'react';
import  { useState } from 'react';

export const contexto = createContext()    

const Provider = contexto.Provider         


const CustomProvider = (props) => {         

  const [isSidebarOpen, setSidebarOpen] = useState(false);   

  const toggleSidebar = () => { 
    setSidebarOpen(!isSidebarOpen);
  };

  const [searchTerminoBuscadoEnBarra, setSearchTerminoBuscadoEnBarra] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange'];



  const handleSearch = (terminoBuscadoEnBarra) => {  
    setSearchTerminoBuscadoEnBarra(terminoBuscadoEnBarra);  

  console.log('searchTerminoBuscadoEnBarra :',searchTerminoBuscadoEnBarra)



  const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(terminoBuscadoEnBarra.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };
  console.log('filteredItems :',filteredItems)

  console.log('searchTerminoBuscadoEnBarra :',searchTerminoBuscadoEnBarra)

  const [arrayDeObjetosDeProductosAgregados, setArrayDeObjetosDeProductosAgregados] = useState([])
  console.log("arrayDeObjetosDeProductosAgregados :", arrayDeObjetosDeProductosAgregados)
  console.log("arrayDeObjetosDeProductosAgregados-Length :", arrayDeObjetosDeProductosAgregados.length)
    
                    
  const addItem = (product,cantidadConfirmadaPorElContadorDelProducto) => {     
    
    const existingProduct = arrayDeObjetosDeProductosAgregados.find((item) => item.id === product.id);    

    if (existingProduct) {
     
      const updatedCart = arrayDeObjetosDeProductosAgregados.map((item) =>
        item.id === product.id ? { ...item, cantidadConfirmadaPorElContadorDelProducto: item.cantidadConfirmadaPorElContadorDelProducto + cantidadConfirmadaPorElContadorDelProducto } : item
      );
      setArrayDeObjetosDeProductosAgregados(updatedCart);

    } else {
     
      setArrayDeObjetosDeProductosAgregados([...arrayDeObjetosDeProductosAgregados, { ...product, cantidadConfirmadaPorElContadorDelProducto }]);
    }
  
}

  const removeFromCart = (product) => {  
  
    const cartUpdated = arrayDeObjetosDeProductosAgregados.filter((prod) => prod.id !== product.id)
    setArrayDeObjetosDeProductosAgregados(cartUpdated)
    }

  const clearCart = (product) => {  // 

    setArrayDeObjetosDeProductosAgregados([])

  }
  

  const [user, setUser] = useState('');  
  const [displayUser, setDisplayUser] = useState('');  
  
  const userEntered = (nombreUsuarioLogueado) => {  //nombreUsuarioLogueado -> valor traido de userEntered(userNombre)
    setUser(nombreUsuarioLogueado);  
  }
  console.log('user :',user)

  const showUser = (displayUserrName) => {  //nombreUsuarioLogueado -> valor traido de userEntered(userNombre)
    setDisplayUser(displayUserrName);  
  }
  console.log('displayUser :',displayUser)

   
  const valorDelContexto = {  
    
    addItem:addItem,
    clearCart:clearCart,
    removeFromCart:removeFromCart,
    handleSearch:handleSearch,
    toggleSidebar:toggleSidebar,
    userEntered:userEntered,
    showUser:showUser,
    displayUser,
    user,
    filteredItems,    
    searchTerminoBuscadoEnBarra,
    isSidebarOpen,
    arrayDeObjetosDeProductosAgregados: arrayDeObjetosDeProductosAgregados,
   
  }
  
    return (  
                                          

      <Provider value = {valorDelContexto}> 
                                         
          {props.children}     
          
      </Provider>

    )
  }

  export default CustomProvider;