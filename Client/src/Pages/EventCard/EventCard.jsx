import React from "react";
import "./EventCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import useStore from "../../Store/store";

const EventCard = () => {
  const event = useStore((state) => state.eventCard);
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={event.ImageUrl} alt={event.Title} className="Image" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h1>{event.Title}</h1>
        </div>
        <div className="card-description">
          <p>{event.Description}</p>
        </div>
        <div className="card-location">
          <p>
            <FaLocationDot /> {event.Location}
          </p>
        </div>
        <div className="card-date">
          <p>
            <MdOutlinePendingActions /> {event.DateTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
