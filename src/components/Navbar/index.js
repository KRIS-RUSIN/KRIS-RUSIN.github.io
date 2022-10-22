
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
  
function Navbar() {
  return (
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' end>
              HOME
          </NavLink>
          <NavLink to='/pages/about'>
              ABOUT
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default Navbar;