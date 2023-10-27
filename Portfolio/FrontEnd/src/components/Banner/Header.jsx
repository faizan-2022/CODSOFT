import React, { useState } from 'react'
import {
  Container,
  Logo,
  Nav
} from "./HeaderStyles";

const Header = () => {
    const [bar, setBar] = useState(false);
  
    const toggleNavbar = () => {
      setBar(!bar);
    };
  
    return (
      <Container bar={bar}>
        <Logo>
            <img loading="lazy" height="60" width="65" src='images/MF.webp' alt='MF' />
          <h1 style={{ textDecoration: 'none', color: 'white' }}>Portfolio</h1>
        </Logo>
        <Nav bar={bar}>
          <span>
            <a href="#home" onClick={toggleNavbar}>
              Home
            </a>
          </span>
          <span>
            <a href="#service" onClick={toggleNavbar}>
              Services
            </a>
          </span>
          <span>
            <a href="#project" onClick={toggleNavbar}>
              Projects
            </a>
          </span>
          <span>
            <a href="#client" onClick={toggleNavbar}>
              Testimonials
            </a>
          </span>
          <span>
            <a href="#footer" onClick={toggleNavbar}>
              Contact
            </a>
          </span>
        </Nav>
        <div onClick={toggleNavbar} className="bars">
          <div className="bar"></div>
        </div>
      </Container>
    );
  };
  

export default Header