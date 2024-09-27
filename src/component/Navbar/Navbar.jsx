import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="wrapper_nav">
        <NavLink to="/" className="logo">
          Bis<span>Lite</span>
        </NavLink>
        <div
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-items ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <NavLink className="main_link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="main_link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink className="main_link" to="/services">
              Services
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="sub_link" to="/services/web-design">
                  Web Design
                </NavLink>
              </li>
              <li>
                <NavLink className="sub_link" to="/services/wordpress-design">
                  Wordpress Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="sub_link"
                  to="/services/mobile-app-development"
                >
                  Mobile App Development
                </NavLink>
              </li>
              <li>
                <NavLink className="sub_link" to="/services/internet-marketing">
                  Internet Marketing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="sub_link"
                  to="/services/social-media-management"
                >
                  Social Media Management
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="main_link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="main_link" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="main_link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
