import React from 'react';
import '../assets/css/BarraBuscadora.css';
import {contexto} from './CustomProvider';
import { useContext } from 'react'
import { useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

function BarraBuscadora({ onSearch }) {  

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);   
      };

      console.log('handleInputChange :', searchTerm) 
    
      const handleSearchClick = () => { 
        onSearch(searchTerm);
      };

      console.log('handleSearchClick :', searchTerm) 

  return (

    <div className="barraBuscadora">                                                             
                                                                                            
        <input type="text" className="textoBuscarEnBarra" placeholder="Buscar..." value = {searchTerm} onChange={handleInputChange}/>

        <Link className="categoria" to = "/filtroBarraBuscadora"><button  className="botonSearch-Desktop" onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass botonSearchDektop"></i></button></Link >
    
    </div>
  );
}

export default BarraBuscadora;
