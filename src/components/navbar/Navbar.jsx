import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wmai">What is ModernAI?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="modernai__navbar">
      <div className="modernai__navbar-links">
        <div className="modernai__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='modernai__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className="modernai__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="modernai__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="modernai__navbar-menu_container scale-up-center">
            <div className="modernai__navbar-menu_container-links">
              <Menu />
              <div className="modernai__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar