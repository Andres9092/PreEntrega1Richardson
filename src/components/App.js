import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

function App() { 
  return (  
    
    
    <BrowserRouter className="App"> {/* Etiqueta unica que contiene la aplicacion completa. Dentro del C Padre App(), se incluyen el resto de los Componentes Hijos de la aplicacion, sobre los cuales iran nuevos C Hijos ta su vez. */}

        <NavBar></NavBar>  {/* C Padre que contiene a C hijo 'CartsWidget' en su interior. */}

        <ItemListContainer greeting ="Bienvenido!"> </ItemListContainer> {/* Paso al C hijo de su interior (ItemListContainer) la props llamada 'greeting' y su valor 'Bienvenido'. La props es un objeto, clave -valor.*/}
        
        <Footer></Footer>

    </BrowserRouter>
  )
}

export default App;
