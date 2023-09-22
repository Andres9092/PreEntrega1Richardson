import React from 'react'
import '../assets/css/NavBar.css';
import imagenlogo from '../assets/images/logoEnj.png';
import CartWidget from './CartWidget';
import NavInferior from './NavInferior';
import LogoWapp from './LogoWapp';
import LogoFavoritos from './LogoFavoritos';
import LogoCreateUser from './LogoCreateUser';
import LogoLogIn from './LogoLogIn';
import LogoLogOut from './LogoLogOut';
import SideBar from './SideBar';
import {Link} from 'react-router-dom';
import BarraBuscadora from './BarraBuscadora';
import {contexto} from './CustomProvider';
import { useContext } from 'react'


function NavBar() { 

    const {handleSearch} = useContext(contexto)

   
    const valorDelContexto = useContext(contexto)


    const handleLogout = async () => {
        console.log('Logging out user...');
        
        if (auth.currentUser) { // Check if a user is signed in
          console.log('User is signed in:', auth.currentUser);
          
          try {
            await signOut(auth); // Sign out the user
            console.log('User successfully logged out');
            navigate('/'); // Redirect to the home page or any other desired page after logout
          } catch (error) {
            console.error('Logout Error:', error.code, error.message);
            // Handle logout error if needed
          }
        } else {
          console.log('No user is signed in.');
        }
      };
   
 
    return (  
     
        <header className="Header">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/> 
  
            <div className="NavHeader">

                
                <div className="burger-logo-Phone">   
                                                             
                    <button className="burger-button" onClick={ valorDelContexto.toggleSidebar }>
                                &#9776; 
                    </button>
                                          
                    <SideBar isOpen={valorDelContexto.isSidebarOpen} onClose={valorDelContexto.toggleSidebar} />
                    
                    <Link to ="/">
                        <img className="logoEnjDeco" src={imagenlogo} alt="Imagen Logo Enjoying Deco"/>
                    </Link>
                </div>

                <div>                   
                    <BarraBuscadora onSearch = {handleSearch} />  
                </div>

                    
                <div  className="linksyCarritoPhone">   
                    <div className="linksPhone">
                        
                        <ul className = "logosMargenDerechoPhone">

                       
                            <li><a className="iconoBuscarMargenDerecho" href="https://api.whatsapp.com/send?phone=+5491168532662" target="_blank"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                            
                            
                            <LogoWapp/> 
                            <LogoFavoritos/> 
                            <LogoLogIn/>    
                            <Link to ="/logOut"><LogoLogOut  logOut={handleLogout}/></Link>                         
                            <LogoCreateUser/> 
                 
                        </ul>

                    </div>
                                          
                    <div>
                        <CartWidget/>        
                    </div>
               
                </div>
            
            </div>
                <NavInferior/> 
        </header>
    )
  }
  
  export default NavBar;