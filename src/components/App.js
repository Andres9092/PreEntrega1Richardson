import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

function App() { 
  return (  
    
    <div className="App">   {/* etiqueta unica que contiene la aplicacion completa */}

        <NavBar>

        </NavBar>

        <ItemListContainer greeting ="Bienvenido!">

        </ItemListContainer>


    </div>
  )
}

export default App;
