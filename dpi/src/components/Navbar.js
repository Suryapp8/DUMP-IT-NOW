import React from "react";
import "../css/Nav.css";
import dustbin from "../images/dustbin.png";
import din from "../images/din.jpg";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
              
          <div className="logo">
            <img src={dustbin} alt="din" />
          </div>
              
          <ul className="nav-links">
                  
            <input type="checkbox" id="checkbox_toggle" />
                  
            <label for="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
                  
            <div className="menu">
                      
              <li>Our mission and vision</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>About us</li>
              <li className="last-line">For a lifelong relationship</li>
                    
            </div>
                
          </ul>
            
        </nav>
      </div>
    </>
  );
}

export default Navbar;
