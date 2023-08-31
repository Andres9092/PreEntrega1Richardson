import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetail from './ItemDetail';
import ItemCategory from './ItemCategory';
import Ejemplo from './Ejemplo';
import Carrito from './Carrito';
import Login from './Login';
import '../assets/css/Main.css'
import { Route, Routes, Link } from 'react-router-dom';


function Main() { 
    return (  
        <div className="mainContainer">
       

            <Routes>
                                              

                             {/*If URL del navegador = al path, entonces mostrar el Componente deseado. */}
                <Route path = "/" exact={true}   element = {<ItemListContainer />}/>   {/*Si le paso por la ruta, dentro de ItemListContainer -> greeting = "Bienvenido!", lo puedo tomar por props. */}              

                <Route path = "/productos/:id" element = {<ItemDetail/>}/>     {/* id es la 'clave' del 'value' capturado por en URL por useParams */}
                
                <Route path = "/categorias/:id" element = {<ItemCategory/>}/>
                                                                                        {/* <Route path = "/categorias/:id" element = {<ItemCategory2/>}/>       */}

                <Route path = "/carrito" element = {<Carrito/>} />   

                <Route path = "/favoritos" element = {<p>Hola</p>} />   

                <Route path = "/ofertas" element = {<Ejemplo/>}/>   

                <Route path = "/sucursales" element = {<p>Hola</p>} />   

                <Route path = "/preguntas" element = {<p>Hola</p>}/>                   

                <Route path = "/blog" element = {<p>Hola</p>} />   

                <Route path = "/contacto" element = {<p>Hola</p>} />   

                <Route path = "/Login" element = {<Login/>} /> 

                <Route path = "*" element = {<p>Not Found - 404</p>} />   


            </Routes>

            
            {/*<ItemListContainer greeting = "Bienvenido!"> </ItemListContainer> 
                                     paso al C hijo de su interior (ItemListContainer) la props llamada 'greeting' y su valor 'Bienvenido'. La props es un objeto, clave -valor.*/}
        </div>
    )
  }
  
  export default Main;