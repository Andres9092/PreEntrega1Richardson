import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import CustomProvider from './CustomProvider';

function App() { 
  return (  
    
    
    <BrowserRouter className="App"> {/* Etiqueta unica que contiene la aplicacion completa. Dentro del C Padre App(), se incluyen el resto de los Componentes Hijos de la aplicacion, sobre los cuales iran nuevos C Hijos ta su vez. */}

      <CustomProvider>       {/* C que posibilita la obtencion de variable global, en sus C hijos, a partir del Provider creado en el Contexto.*/}
          
          <NavBar></NavBar>  {/* C Padre que contiene a Compts hijos 'CartsWidget', 'NavInferior' en su interior. */}

          <Main></Main>      {/* C que define las rutas de las vistas que cambian en la aplicacion */}
          
          <Footer></Footer>

      </CustomProvider>

    </BrowserRouter>
  )
}

export default App;
