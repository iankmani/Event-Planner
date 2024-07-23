import React, { useState } from 'react';
import { useEventStore } from '../../Store/EventStore';
import Header from "../../Components/Header/Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./CreateEvent.css";

const CreateEvent = () => {
  const [imageInput, setImageInput] = useState();
  const addEventCard = useEventStore((state) => state.addEventCard);
  const cloudname = "dblm8shnt";
  const uploadPreset = "image Input";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, location, dateTime } = e.target.elements;

    const payload = new FormData();
    payload.append('file', imageInput);
    payload.append('upload_preset', uploadPreset);
    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, payload);
      const imageUrl = response.data.secure_url;
      
      const newEvent = {
        title: title.value,
        imageUrl,
        description: description.value,
        location: location.value,
        dateTime: dateTime.value,
      };

      const eventResponse = await fetch("http://localhost:3000/api/users/CreateEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!eventResponse.ok) throw new Error('Network response was not ok');

      const data = await eventResponse.json();
      addEventCard(data);
      alert("Thanks for adding an Event")
      navigate("/explore");

    } catch (error) {
      console.error("Error creating event:", error.message);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="createEventPage">
        <div className="createEventForm">
          <input
            className="CreateEventInputs"
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            className="CreateEventInputs"
            type="file"
            name="imageUrl"
            placeholder="Image URL"
            onChange={(e) => setImageInput(e.target.files[0])}
          />
          <input
            className="CreateEventInputs"
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            className="CreateEventInputs"
            type="text"
            name="location"
            placeholder="Location"
          />
          <input
            className="CreateEventInputs"
            type="text"
            name="dateTime"
            placeholder="Date and Time"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateEvent;
