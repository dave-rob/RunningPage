import React from 'react';
import '../../styles/Landing.css' // Import the CSS file
import { BrowserRouter,Link } from 'react-router-dom'; // Use Link for navigation
import { Image } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <BrowserRouter>
      <header className="header">
      <div className="logo">
        <Link to="/"><Image src='/images/runlogo.png'width={"100px"}></Image></Link>
      </div>
      <nav className="main-menu">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Past Races</Link></li>
        </ul>
      </nav>
    </header>
    </BrowserRouter>

  );
};

export default Navbar;

