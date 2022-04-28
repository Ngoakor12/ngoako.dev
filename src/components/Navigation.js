import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { useLocation } from "react-router-dom";
import {
  closeMenuIcon,
  githubIcon,
  mailIcon,
  openMenuIcon,
  homeIcon,
  linkedinIcon,
} from "../svgs";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const domainUrl = "https://ngoako.dev/";

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="nav-wrapper">
      {/* Menu for smaller screens */} 
      <div className={`${isMenuOpen ? "menu-open" : "menu-closed"}`}>
        <a href="/" className="active-nav" onClick={toggleMenu}>
          Home
        </a>
        <a
          href={pathname === "/" ? "#projects" : `${domainUrl}#projects`}
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href={pathname === "/" ? "#about" : `${domainUrl}#about`}
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href={pathname === "/" ? "#contact" : `${domainUrl}#contact`}
          onClick={toggleMenu}
        >
          Contact
        </a>
      </div>
      <nav className="nav">                
        <div className="left-menu">
          {isMenuOpen ? (
            <Tippy content="Close menu">
              <button
                className="menu"
                onClick={toggleMenu}
                aria-label="Close menu button"
              >
                {closeMenuIcon}
              </button>
            </Tippy>
          ) : (
            <Tippy content="Open menu">
              <button
                className="menu"
                onClick={toggleMenu}
                aria-label="Open menu button"
              >
                {openMenuIcon}
              </button>
            </Tippy>
          )}
          <Tippy content="Home">
            <a href="/" className="home" aria-label="home">
              {homeIcon}
            </a>
          </Tippy>
        </div>
        <div className={`main-nav`}>
          <a href="/" className="active-nav">
            Home
          </a>
          <a href={pathname === "/" ? "#projects" : `${domainUrl}#projects`}>
            Projects
          </a>
          <a href={pathname === "/" ? "#about" : `${domainUrl}#about`}>
            About
          </a>
          <a href={pathname === "/" ? "#contact" : `${domainUrl}#contact`}>
            Contact
          </a>
        </div>         
        <div className="secondary-nav">
          <div className="contact-options">
            <Tippy content="Linkedin profile">
              <a
                href="https://www.linkedin.com/in/ngoako-ramokgopa-07b65012a/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin profile"
              >
                {linkedinIcon}
              </a>
            </Tippy>
            <Tippy content="Send email">
              <a
                href="mailto:ngoakor12@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Send email"
              >
                {mailIcon}
              </a>
            </Tippy>
            <Tippy content="Github profile">
              <a
                href="https://github.com/Ngoakor12"
                target="_blank"
                rel="noreferrer"
                aria-label="Github profile"
              >
                {githubIcon}
              </a>
            </Tippy>
          </div>
          {/* <Tippy content="Toggle darkmode">
            <button className="darkmode-toggle" aria-label="darkmode toggle">
              {darkmodeIcon}
            </button>
          </Tippy> */}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
