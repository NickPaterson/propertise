import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons';
import { faBars, faCircleXmark, faXmark } from '@fortawesome/pro-regular-svg-icons';
import Logo from './propertise-logo';

const NavBar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  
    const handleThemeToggle = () => {
        document.body.classList.toggle("dark");
    }
    const toggleSearch = (): void => {
      setIsSearchOpen(!isSearchOpen);
      if (isNavOpen) setIsNavOpen(false);
    };
  
    const openNav = (): void => {
      setIsNavOpen(true);
      if (isSearchOpen) setIsSearchOpen(false);
    };
  
    const closeNav = (): void => {
      setIsNavOpen(false);
    };
  

  return (
    <nav className={`nav ${isSearchOpen ? 'openSearch' : ''} ${isNavOpen ? 'openNav' : ''}`}>
      <button className="navOpenBtn" onClick={openNav}><FontAwesomeIcon icon={faBars} /></button>
      
      <Link to="/" className="logo">
        <Logo />
        Propertise
        </Link>

      <ul className="nav-links">
        <button className="navCloseBtn" onClick={closeNav}><FontAwesomeIcon icon={faCircleXmark} /></button>
        <li><Link to="/">Buy</Link></li>
        <li><Link to="/">Sale</Link></li>
        <li><Link to="/">Estate Agents</Link></li>
        
      </ul>

      <div className='nav-end'>
        <button  onClick={toggleSearch}>
            { isSearchOpen 
                ? <FontAwesomeIcon icon={faXmark} />
                : <FontAwesomeIcon icon={faMagnifyingGlass} /> 
            }
        </button>
        <div className="search-box">
            <input type="text" placeholder="Search Properties" />
        </div>
        <div 
            id="themeToggler" 
            className="theme-toggler" 
            onClick={handleThemeToggle} 
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleThemeToggle();
                }
            }}
            role="button" 
            tabIndex={0}
        ></div>
      </div>
      
    </nav>
  );
};

export default NavBar;

