import React from 'react';
import './Navbar.css';

const Navbar=()=>{
return (
<div className="navbar-container">
<nav className="navbar-main">
    <div><a href="#" >Menu</a></div> 
    <a className="ritual-logo" style={{fontSize:"1.6rem"}}>Ritual</a>
   
          <div><a href="#" >Who We Are</a>
           <a className="cart-logo" style={{padding:"0.8rem 0"}}> <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></a>
</div>
</nav>

</div>
)
}

export default Navbar;