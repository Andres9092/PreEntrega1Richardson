import React from 'react'
import '../assets/css/NavBar.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {contexto} from './CustomProvider';


export function CartWidget() { //Si no estoy logueado como 'user' no se muestra el logo de Carrito.

  const valorDelContexto = useContext(contexto) //Se importa la variable global exportada 'valorDelContexto' del contexto creado en el Compon 'CustomProvider'
  
  //const [cantidadTotalProductosCarrito, setCantidadTotalProductosCarrito] = useState(0);

  if ((valorDelContexto.user) === 'admin'){
    console.log('Ud no tiene credenciales para entrar al carrito de compras')
  
    return(
      <h1></h1>
    )
    
  }

  const unidadesTotal = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
    (total, item) => total + item.cantidadConfirmadaPorElContadorDelProducto, 0)
  
  // useEffect(() => {

  //   const newTotalQuantity = valorDelContexto.arrayDeObjetosDeProductosAgregados.reduce(
  //     (total, item) => total + item.cantidadConfirmadaPorElContadorDelProducto,0);
  //   setTotalQuantity(newTotalQuantity);

  // }, [valorDelContexto.arrayDeObjetosDeProductosAgregados]);
  



  
  return (  
      
      <div className="CartW">   
        <ul className = "logoCart">        
            
            <li><Link className="iconoCarrito" to = "/carrito"><i class="fa-solid fa-cart-plus"></i></Link></li>
            <div className="fondoRedondoNumeroCart" >               
              <p className="numeroCart" style = {{color : unidadesTotal === 0 ? "red" : "green"}} >   {/*Condicional de color en linea segun valor de variable global importada */}
                {unidadesTotal}   
                  {/* valorDelContexto es la variable prop global, proveniente de CustomProvider. */}
                  {/* unidadesTotal === 0 ? ---> va con TRIPLE IGUALDAD = */}
               </p>  
            </div>
        </ul>
         
  
      </div>
    )
  }
  
  export default CartWidget;