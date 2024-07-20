import React from "react";
import "./GetStarted.css";
import image from "../../assets/design.jpeg";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="GetStarted">
      <div className="GetStarted_container">
        <div className="GetStarted_image">
          <img src={image} alt="" className="GetStarted_img" />
        </div>
        <button className="GetStarted_button">
          <Link to="/signup">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
