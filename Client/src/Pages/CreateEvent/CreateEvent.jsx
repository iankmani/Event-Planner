import React, { useState } from 'react';
import { useEventStore } from '../../Store/EventStore';
import Header from "../../Components/Header/Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./CreateEvent.css";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../../Utils/config.js';

const CreateEvent = () => {
  const notifysucess = () => {
    toast.success("Event Creation Successful", {
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
  const notifyerror = () => {
    toast.error("Event Creation Failed", {
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

      const eventResponse = await fetch(`${apiUrl}/api/users/CreateEvent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!eventResponse.ok) throw new Error('Network response was not ok');

      const data = await eventResponse.json();
      addEventCard(data);
      notifysucess()
      // alert("Thanks for adding an Event")
      navigate("/explore");

    } catch (error) {
      console.error("Error creating event:", error.message);
      notifyerror()
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
