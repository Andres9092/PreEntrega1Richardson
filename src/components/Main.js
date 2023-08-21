import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetail from './ItemDetail';
import ItemCategory1 from './ItemCategory1';
import ItemCategory2 from './ItemCategory2';
import '../assets/css/Main.css'
import { Route, Routes, Link } from 'react-router-dom';


function Main() { 
    return (  
        <div className="mainContainer">
       

            <Routes>
              

                             {/*If URL del navegador = al path, entonces mostrar el Componente deseado. */}
                <Route path = "/" exact={true}   element = {<ItemListContainer greeting = "Bienvenido!"/>}/> 

                <Route path = "/item" element = {<ItemListContainer/>}/>       

                <Route path = "/item/:id" element = {<ItemDetail/>}/>     {/* id es la 'clave' del 'value' capturado por en URL por useParams */}
                
                <Route path = "/categorias/1" element = {<ItemCategory1/>}/>
                <Route path = "/categorias/2" element = {<ItemCategory2/>}/>      

                <Route path = "/carrito" element = {<p>Hola</p>} />   

                <Route path = "/favoritos" element = {<p>Hola</p>} />   

                <Route path = "/ofertas" element = {<p>Hola</p>}/>   

                <Route path = "/sucursales" element = {<p>Hola</p>} />   

                <Route path = "/preguntas" element = {<p>Hola</p>}/>                   

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