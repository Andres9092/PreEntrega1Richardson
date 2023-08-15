import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';

function App() { 
  return (  
    
    
    <BrowserRouter className="App"> {/* Etiqueta unica que contiene la aplicacion completa. Dentro del C Padre App(), se incluyen el resto de los Componentes Hijos de la aplicacion, sobre los cuales iran nuevos C Hijos ta su vez. */}

        <NavBar></NavBar>  {/* C Padre que contiene a C hijo 'CartsWidget' en su interior. */}

        <Main></Main>
        
        <Footer></Footer>

    </BrowserRouter>
  )
}

export default App;
