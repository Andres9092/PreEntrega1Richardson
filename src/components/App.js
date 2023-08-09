import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer';

function App() { 
  return (  
    
    <div className="App">   {/* Etiqueta unica que contiene la aplicacion completa. Dentro del C Padre App(), se incluyen el resto de los Componentes Hijos de la aplicacion, sobre los cuales iran nuevos C Hijos ta su vez. */}

        <NavBar>  {/* C Padre que contiene a C hijo 'CartsWidget' en su interior. */}

        </NavBar>

        <ItemListContainer greeting ="Bienvenido!">  {/* Paso al C hijo de su interior (ItemListContainer) la props llamada 'greeting' y su valor 'Bienvenido'. La props es un objeto, clave -valor.*/}

        </ItemListContainer>

        <Footer>

        </Footer>


    </div>
  )
}

export default App;
