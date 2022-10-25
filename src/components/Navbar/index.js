
import React, {useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import '../../../src/css/styles.css';


 
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  window.addEventListener('resize', closeMenu);
  return (
      <Nav>
        <button className='hamburgerButton' onClick={handleToggle}>
          <Bars/>
        </button>
        <NavMenu className={navbarOpen ? " showMenu" : ""}>
          <NavLink onClick={() => closeMenu()} to='/' end>
              HOME
          </NavLink>
          <NavLink onClick={() => closeMenu()} to='/pages/about'>
              ABOUT
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default Navbar;