import React from 'react';
import "./Footer_2.css";
import { Link } from 'react-router-dom';

const Footer_2 = () => {
  return (
    <>
      <footer id="footer-2">

        <div className="footer-2-div-1"><h1><i className="fab fa-shopify"></i> Shop <span className="footer-2-div-1-span">Zone</span></h1></div>

        <div className="footer-2-div-2">

          <div className="footer-2-div-2-1 footer-2-div-2-all">
            <h2>Here some space for Adds</h2>
          </div>

          <div className="footer-2-div-2-2 footer-2-div-2-all">
            <h2>Get to know us</h2>
            <ul>
              <li><Link to="#"><i className="fas fa-user"></i> About Us</Link></li>
              <li><Link to="#"><i className="fas fa-briefcase"></i> Our Services</Link></li>
              <li><Link to="#"><i className="fas fa-envelope"></i> Contact Us</Link></li>
              <li><Link to="#"><i className="fas fa-handshake"></i> Our Clients</Link></li>
            </ul>
          </div>

          <div className="footer-2-div-2-3 footer-2-div-2-all">
            <h2>Make Money with us</h2>
            <ul>
              <li><Link to="#"><i className="fas fa-dollar-sign"></i> Sell on Shop Zone</Link></li>
              <li><Link to="#"><i className="fas fa-ad"></i> Advertise your products</Link></li>
              <li><Link to="#"><i className="fas fa-rupee-sign"></i> Get jobs on Shop Zone</Link></li>
            </ul>
          </div>

          <div className="footer-2-div-2-4 footer-2-div-2-all">
            <h2>Connect with us</h2>
            <ul>
              <li><Link to="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
              <li><Link to="#"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
              <li><Link to="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
              <li><Link to="#"><i className="fab fa-whatsapp"></i> What's App</Link></li>
              <li><Link to="tel:+917415747504"><i className="fas fa-phone-alt"></i> +91 7415747504</Link></li>
            </ul>
          </div>

          <div className="footer-2-div-2-5 footer-2-div-2-all">
            <h2>Here some space for Adds</h2>
          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer_2
