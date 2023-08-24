import '../assets/css/Burger.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';


function Burger() {


const [open, setOpen] = useState(false)


  return (
    
    <div className="burger-menu">
        
      <button className="botonBurger" open = {open} onClick={() => setOpen(!open)}><i className="fas fa-bars fa-2x"></i></button>

    </div>  
  )
}

export default Burger