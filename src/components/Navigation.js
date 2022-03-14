import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { useLocation } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const domainUrl = "https://ngoako.dev/";
  console.log(pathname);

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
                <svg
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </Tippy>
          ) : (
            <Tippy content="Open menu">
              <button
                className="menu"
                onClick={toggleMenu}
                aria-label="Open menu button"
              >
                <svg
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </Tippy>
          )}
          <Tippy content="Home">
            <a href="/" className="home" aria-label="home">
              <svg
                aria-hidden="true"
                role="img"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59l7-7l7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                  fill="currentColor"
                ></path>
              </svg>
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
          <a href={pathname === "/" ? "#about" : `${domainUrl}#about`}>About</a>
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
                <svg
                  // aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="4.983"
                    cy="5.009"
                    r="2.188"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Tippy>
            <Tippy content="Send email">
              <a
                href="mailto:ngoakor12@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Send email"
              >
                <svg
                  // aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Tippy>
            <Tippy content="Github profile">
              <a
                href="https://github.com/Ngoakor12"
                target="_blank"
                rel="noreferrer"
                aria-label="Github profile"
              >
                <svg
                  // aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Tippy>
          </div>
          {/* <Tippy content="Toggle darkmode">
            <button className="darkmode-toggle" aria-label="darkmode toggle">
              <svg
                // aria-hidden="true"
                role="img"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10.007 10.007 0 0 0 2.583-4.491a1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343a7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483a10.027 10.027 0 0 0 2.89 7.848a9.972 9.972 0 0 0 7.848 2.891a8.036 8.036 0 0 1-1.484 2.059z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </Tippy> */}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
