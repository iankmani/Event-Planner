import React from 'react'
import logo from "../../assets/headerlogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import {useUserStore} from '../../Store/UserStore'
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminHeader = () => {
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
  const navigate = useNavigate();
  const handleLogOutUser = () => {
    clearUser();
    notifysucess();
    navigate("/")
  }
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
              <Link to="/admin-create-event">Create Event</Link>
            </li>
            <li className="Header_page_navigations__list__item">
              <Link to="#">Manage Users</Link>
            </li>
            <button className="Header_page_navigations__list__item" onClick={handleLogOutUser}>
              Log Out
            </button>
          </ul>
        </div>
    </div>
  )
}

export default AdminHeader