import React from "react";
import logo from "../../assets/headerlogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
// import {user, clearUser} from '../../Store/UserStore.js'
import {useUserStore} from '../../Store/UserStore'
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Header.css";

const Header = () => {
  const notifysucess = () => {
    toast.success("You have been logged out!", {
      position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate =useNavigate();
  const handleLogOutUser = ()=> {
    clearUser();
    notifysucess();
    navigate("/")

  }
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
              <Link to="/explore">Explore</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="/createEvent">Create Event</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="/admin">about Us</Link>
            </li>
            <button className="Header_page_navigations__list__item" onClick={handleLogOutUser}>
              Log Out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
