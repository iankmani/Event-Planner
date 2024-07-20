import React from 'react';
import './EventCard.css';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePendingActions } from 'react-icons/md';

const EventCard = ({ title, imageUrl, description, location, dateTime }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="image" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="card-location">
          <p><FaLocationDot /> {location}</p>
        </div>
        <div className="card-date">
          <p><MdOutlinePendingActions /> {dateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
