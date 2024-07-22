import React, {useState} from 'react'
import { useEventStore } from '../../Store/EventStore';
import Header from "../../Components/Header/Header";
import axios from 'axios'
import "./CreateEvent.css";
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [imageInput, setImageInput] = useState();
  const [imageUrl, setImageUrl] = useState(null);
  const addEventCard = useEventStore((state) => state.addEventCard);
  const EventCards = useEventStore((state)=>state.EventCards);
  const cloudname = "dblm8shnt";
  const uploadPreset = "image Input";
  const navigate = useNavigate();

  const handleUploadImage = async (e)=> {
    e.preventDefault();
    const payload = new FormData();
    payload.append('file', imageInput);
    payload.append('upload_preset', uploadPreset);
    console.log(imageInput)
    try{
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, payload)
      console.log(response.data.secure_url)
      setImageUrl(response.data.secure_url)
    }
    catch(error){
      console.log(error.message)
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, location, dateTime } = e.target.elements;

    const newEvent = {
      title: title.value,
      imageUrl,
      description: description.value,
      location: location.value,
      dateTime: dateTime.value,
    };

    console.log(imageUrl)
    console.log("Submitting event:", newEvent);
    try {
      const response = await fetch("http://localhost:3000/api/users/CreateEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      const data = await response.json()
      console.log(data)
      addEventCard(data)
      navigate("/explore")


      // if (response.ok) {
      //   const createdEvent = await response.json();
      //   console.log("Created event:", createdEvent);
      //   addEventCard(createdEvent);
      //   alert("Event created successfully");
      // } else {
      //   const errorData = await response.json();
      //   console.error("Error response:", errorData);
      //   alert("Something went wrong");
      // }
    } catch (error) {
      console.error("Error creating event:", error.message);
      // alert("Error creating event");
    }
  };
  console.log(EventCards)

  return (
    <>
    <Header/>
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
          onChange={(e) =>{
            setImageInput(
              e.target.files[0]
            )
          }}
        />
         <button onClick={handleUploadImage}>Upload Image</button>
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