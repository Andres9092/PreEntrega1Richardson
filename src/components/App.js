import React from 'react'
import '../assets/css/App.css';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import CustomProvider from './CustomProvider';

function App() { 
  return (  
    
    
    <BrowserRouter className="App"> 

      <CustomProvider>     
          
          <NavBar></NavBar> 

          <Main></Main>      
          
          <Footer></Footer>

      </CustomProvider>

    </BrowserRouter>
  )
}

export default App;
