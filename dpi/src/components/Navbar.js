import React from "react";
import "../css/Nav.css";
import logo from "../images/din-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
              
          <div className="logo">
            <Link to="/">
              <img className="logo-app" src={logo} alt="din" />
            </Link>
          </div>
              
          <ul className="nav-links">
                  
            <input type="checkbox" id="checkbox_toggle" />
                  
            <label htmlFor="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
                  
            <div className="menu">
                      
              <li>
                <Link className="links" to="/mission">
                  Vision
                </Link>
              </li>
              <li>
                <Link className="links" to="/bookslot">
                  Services
                </Link>
              </li>
              <li>
                <Link className="last-line links" to="/valuate">
                  How we valuate
                </Link>
              </li>
              <li className="links">
                <Link className="links" to="/plants">
                  Plant and supplies
                </Link>
              </li>
              <li>
                <Link className="links" to="/about">
                  About us
                </Link>
              </li>
                    
            </div>
                
          </ul>
            
        </nav>
      </div>
    </>
  );
}

export default Navbar;
