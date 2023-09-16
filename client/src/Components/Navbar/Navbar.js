import React from 'react';
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">

        <div className="navbar-1">
          <ul className="navbar-1-ul">
            <li className="navbar-1-ul-li-1 navbar-1-ul-li-all"><Link to="#">Home</Link></li>
            <li className="navbar-1-ul-li-2 navbar-1-ul-li-all"><Link to="#">About</Link></li>
            <li className="navbar-1-ul-li-3 navbar-1-ul-li-all"><Link to="#">Contact</Link></li>
            <li className="navbar-1-ul-li-4 navbar-1-ul-li-all"><Link to="#">Services</Link></li>
            <li className="navbar-1-ul-li-5 navbar-1-ul-li-all"><Link to="#">Help</Link></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
