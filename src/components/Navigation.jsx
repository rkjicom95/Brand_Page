import React from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  console.log(location.pathname)
  return (
    <nav className="container">
      <div>
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul >
        <li>
          <Link to="/" className={`text ${location.pathname==='/'?'active':""}`} >Home</Link>
        </li>
        <li>
          <Link to="/location" className={`text ${location.pathname==='/location'?'active':""}`}>Location</Link>
        </li>
        <li>
          <Link to="/about" className={`text ${location.pathname==='/about'?'active':""}`} >About</Link>
        </li>
        <li>
          <Link to="/contact" className={`text ${location.pathname==='/contact'?'active':""}`}>Contact</Link>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
