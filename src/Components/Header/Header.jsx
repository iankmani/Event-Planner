import React from "react";
import logo from "../../assets/headerlogo.jpeg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header_page">
      <div className="Header_page__container">
        <div className="Header_page__container_top">
          <div className="Header-image">
            <img src={logo} alt="logo of the header" className="Header_img" />
          </div>
          <div className="header-name">
            <h1>Event-planner</h1>
          </div>
        </div>

        <div className="Header_page_navigations">
          <ul className="Header_page_navigations__list">
            <li className="Header_page_navigations__list__item">
              <Link to="">Explore</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="">Create Event</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="">about Us</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
