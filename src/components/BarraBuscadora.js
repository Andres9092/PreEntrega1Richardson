import React from 'react';
import '../assets/css/BarraBuscadora.css';



function BarraBuscadora({ onSearch }) {  // 'onSearch'  --> prop pasada por C. Padre


    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);   //setea para 'searchTerm', a traves de 'setSearchTerm', el valor capturado por el input.
      };
    
      const handleSearchClick = () => {  //al clickear, se le pasa al C. padre, el valor actualizado de 'searchTerm' para la prop 'onSearch' recibida, es decir un Producto deseado.
        onSearch(searchTerm);
      };



  return (

    <div className="barraBuscadora">                                                             
                                                                                            {/* Tambien puede escribirse directamente aqui: onChange={(e) => setSearchTerm(e.target.value)} */}
        <input type="text" className="textoBuscarEnBarra" placeholder="Buscar..." value = {searchTerm} onChange={handleInputChange}/>

        <button  className="botonSearch-Desktop" onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass botonSearchDektop"></i></button>
    
    </div>
  );
}

export default BarraBuscadora;
