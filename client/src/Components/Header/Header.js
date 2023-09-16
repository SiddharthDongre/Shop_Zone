import React from 'react';
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">

        <div className="header-1">
          <div className="header-1-logo">
            <Link to="#"><i className="fab fa-shopify"></i> <span className="header-1-logo-span">Shop <span className="header-1-logo-span-zone">Zone</span> </span></Link>
          </div>
        </div>

        <div className="header-2">
          <div className="header-2-form">
            <form action="#" id="header-2-form">
              <label htmlFor="header-2-form-search"><i className="fas fa-search header-2-form-search"></i></label>
              <input type="text" id="header-2-form-search" name="header-2-form-search" placeholder="Search Here..." />
              <label htmlFor="header-2-form-search"><i className="fas fa-regular fa-microphone header-2-form-microphone"></i></label>
            </form>
          </div>
        </div>

        <div className="header-3">
          <div className="header-3-icons-1 header-3-icons-all"><Link to="#"><i className="fas fa-heart"></i></Link></div>
          <div className="header-3-icons-2 header-3-icons-all"><Link to="#"><i className="fas fa-shopping-cart"></i></Link></div>
          <div className="header-3-icons-3 header-3-icons-all"><Link to="#"><i className="fas fa-user"></i></Link></div>
        </div>

      </header>
    </>
  );
};

export default Header;
