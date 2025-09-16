import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/recipes", label: "Recipes" },
    { path: "/create", label: "Create" },
  ];

  return (
    <div className="hd__container">
      <div className="navbar__wrapper">
        <Link to="/">
          <img
            src="../assets/images/logo.svg"
            alt="site-logo"
            width={260}
            height={40}
          />
        </Link>

        {/* Desktop menu */}
        <ul className="pages__list">
          {navLinks.map((link) => (
            <NavLink key={link.path} className="pages__item" to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </ul>

        <Link to="/recipes" className="btn navbar__btn">
          Browse recipes
        </Link>

        {/* Mobile menu */}
        <div className="hamburger__wrapper">
          <button onClick={toggleMenu}>
            <img
              className="hamburger__icon"
              src="../assets/images/icon-hamburger-menu.svg"
              alt="menu"
            />
          </button>

          {isOpen && (
            <div className="pages__wrapper">
              <ul className="pages">
                {navLinks.map((link) => (
                  <li key={link.path} className="page">
                    <NavLink to={link.path}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
              <Link to="/recipes" className="btn navbar__btn__tab">
                Browse recipes
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
