import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #00000000;
  height: 85px;
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
  z-index: 12;
  width:calc(100vw - 10rem);
  margin-right: 3rem;
  top: 0;
  }
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 3rem 3rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
  &.active {
    transform: scale(1.5);
  }
  transition: 0.5s all ease-in-out;
  font-weight: bold;
  font-family: Courier New, Courier, monospace;
  font-size: 2em;
  @media screen and (max-width: 768px) {
    padding: 2rem 3rem;
    font-size: 3em;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #000000;
  @media screen and (max-width: 768px) {
      display: inline-block;
      font-size: 3rem;
      margin:0;
      -webkit-tap-highlight-color: transparent;
    }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding:3rem 1.5rem;
  @media screen and (max-width: 768px) {
    display: none;
    padding:6rem 1.1rem;
  }
`;