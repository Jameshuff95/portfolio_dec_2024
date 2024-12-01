import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../CSS/Nav.css';

const Nav = () => {
  const [theme, setTheme] = useState('dark');
  const [menuVisible, setMenuVisible] = useState(false);

  const themeBtnRef = useRef(null);

  useEffect(() => {
    const switchTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.addEventListener('click', switchTheme);
    }

    return () => {
      if (themeBtn) {
        themeBtn.removeEventListener('click', switchTheme);
      }
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav id="nav">
      <div id="alt_nav" className={menuVisible ? 'visible' : 'hidden'}>
        <Link to="/" className="alt_nav_link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/About" className="alt_nav_link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/Projects" className="alt_nav_link" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/Contact" className="alt_nav_link" onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <span id="theme_span">
        <i
          id="theme_icon"
          ref={themeBtnRef}
          className={`bi bi-${theme === 'dark' ? 'moon' : 'sun'}-fill`}
        />
      </span>
      <NavLink to="/" className="nav_link">
        Home
      </NavLink>
      <NavLink to="/About" className="nav_link">
        About
      </NavLink>
      <NavLink to="/Projects" className="nav_link">
        Projects
      </NavLink>
      <NavLink to="/Contact" className="nav_link">
        Contact
      </NavLink>
      <i id="menu_icon" className="bi bi-list" onClick={toggleMenu}></i>{' '}
      {/* Added click event */}
    </nav>
  );
};

export default Nav;
