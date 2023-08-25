import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';

function App() { 
  return (  
    
    
    <BrowserRouter className="App"> {/* Etiqueta unica que contiene la aplicacion completa. Dentro del C Padre App(), se incluyen el resto de los Componentes Hijos de la aplicacion, sobre los cuales iran nuevos C Hijos ta su vez. */}

        <NavBar></NavBar>  {/* C Padre que contiene a Compts hijos 'CartsWidget', 'NavInferior' en su interior. */}

        <Main></Main>      {/* C que define las rutas de las vistas que cambian en la aplicacion */}
        
        <Footer></Footer>

    </BrowserRouter>
  )
}

export default App;
