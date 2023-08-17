import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetail from './ItemDetail';
import '../assets/css/Main.css'
import { Route, Routes } from 'react-router-dom';


function Main() { 
    return (  
        <div className="mainContainer">
            
            
            <Routes>

                             {/*If URL del navegador = al path, entonces mostrar el Componente deseado. */}
                <Route path = "/" element = {<ItemListContainer greeting = "Bienvenido!"/>}/> 

                <Route path = "/productos" element = {<ItemListContainer/>}/>       

                <Route path = "/productos/:id" element = {<ItemDetail/>}/>  
                
                <Route path = "/categorias/:id" element = {<p>Hola</p>}/>   

                <Route path = "/favoritos" element = {<p>Hola</p>} />   

                <Route path = "/ofertas" element = {<p>Hola</p>}/>   

                <Route path = "/sucursales" element = {<p>Hola</p>} />   

                <Route path = "/preguntas" element = {<p>Hola</p>}/>   

                <Route path = "/carrito" element = {<p>Hola</p>} />   

                <Route path = "/blog" element = {<p>Hola</p>} />   

                <Route path = "/contacto" element = {<p>Hola</p>} />   

                <Route path = "*" element = {<p>Not Found - 404</p>} />   


            </Routes>

            
            {/*<ItemListContainer greeting = "Bienvenido!"> </ItemListContainer> 
                                     paso al C hijo de su interior (ItemListContainer) la props llamada 'greeting' y su valor 'Bienvenido'. La props es un objeto, clave -valor.*/}
        </div>
    )
  }
  
  export default Main;