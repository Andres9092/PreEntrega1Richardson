import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetail from './ItemDetail';
import ItemCategory from './ItemCategory';
import Ejemplo from './Ejemplo';
import Cart from './Cart';
import Login from './Login';
import CreateUser from './CreateUser';
import CheckOut from './CheckOut';
import Favoritos from './Favoritos';
import ItemFiltrado from './ItemFiltrado';
import '../assets/css/Main.css'
import { Route, Routes, Link } from 'react-router-dom';


function Main() { 
    return (  
        <div className="mainContainer">
       

            <Routes>
                                              

                         
                <Route path = "/" exact={true}   element = {<ItemListContainer />}/> 

                <Route path = "/productos/:id" element = {<ItemDetail/>}/>     
                
                <Route path = "/categorias/:id" element = {<ItemCategory/>}/>                                                             

                <Route path = "/carrito" element = {<Cart/>} />   

                <Route path = "/checkOut" element = {<CheckOut/>} />  
                
                <Route path = "/filtroBarraBuscadora" element = {<ItemFiltrado/>} /> 

                {/* <Route path = "/createUser" element = {<Login/>} />  */}

                <Route path = "/createUser" element = {<CreateUser/>} /> 

                <Route path = "/favoritos" element = {<Favoritos/>}  />   

                <Route path = "/ofertas" element = {<Ejemplo/>}/>   

                <Route path = "/sucursales" element = {<p>Hola</p>} />   

                <Route path = "/preguntas" element = {<p>Hola</p>}/>                   

                <Route path = "/blog" element = {<p>Hola</p>} />   

                <Route path = "/contacto" element = {<p>Hola</p>} />   

                

                <Route path = "*" element = {<p>Not Found - 404</p>} />   


            </Routes>

         
        </div>
    )
  }
  
  export default Main;