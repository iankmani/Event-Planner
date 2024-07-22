import React from 'react'
import logo from "../../assets/headerlogo.jpeg";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="admin-header">
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
              <Link to="/manage-events">Manage Events</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="/createEvent">Create Event</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="#">Manage Users</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default AdminHeader