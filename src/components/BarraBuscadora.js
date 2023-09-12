import React from 'react';
import '../assets/css/BarraBuscadora.css';
import {contexto} from './CustomProvider';
import { useContext } from 'react'
import { useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

function BarraBuscadora({ onSearch }) {  // 'onSearch'  --> prop pasada por C. Padre 'BarraBuscadora'

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);   //setea para 'searchTerm', a traves de 'setSearchTerm', el valor capturado por el input.
      };

      console.log('handleInputChange :', searchTerm) 
    
      const handleSearchClick = () => {  //al clickear, se le pasa al C. padre 'NavBar', el valor actualizado de 'searchTerm' para la prop 'onSearch' recibida, es decir un Producto deseado a ser buscado/ filtrado.
        onSearch(searchTerm);
      };

      console.log('handleSearchClick :', searchTerm) 

  return (

    <div className="barraBuscadora">                                                             
                                                                                            {/* Tambien puede escribirse directamente aqui: onChange={(e) => setSearchTerm(e.target.value)} */}
        <input type="text" className="textoBuscarEnBarra" placeholder="Buscar..." value = {searchTerm} onChange={handleInputChange}/>

        <Link className="categoria" to = "/filtroBarraBuscadora"><button  className="botonSearch-Desktop" onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass botonSearchDektop"></i></button></Link >
    
    </div>
  );
}

export default BarraBuscadora;
