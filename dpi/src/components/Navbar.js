import React from "react";
import "../css/Nav.css";
import logo from "../images/logo.png";
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
                  Our mission and Vision
                </Link>
              </li>
              <li>
                <Link className="links" to="/mission">
                  Services
                </Link>
              </li>
              <li className="links">About us</li>
              <li className="last-line links">For a lifelong relationship</li>
                    
            </div>
                
          </ul>
            
        </nav>
      </div>
    </>
  );
}

export default Navbar;
