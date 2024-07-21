import React, {useState} from "react";
import useStore from "../../Store/store";
import Header from "../../Components/Header/Header";
import axios from 'axios'
import "./CreateEvent.css";

const CreateEvent = () => {
  const [imageInput, setImageInput] = useState()
  const addEvent = useStore((state) => state.addEvent);
  const cloudname = "dblm8shnt";
  const uploadPreset = "image Input";

  const handleUploadImage = async ()=> {
    const payload = new FormData();
    payload.append('file', imageInput);
    payload.append('upload_preset', uploadPreset);
    console.log(imageInput)
    try{
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, payload)
      console.log(response.data.secure_url)
    }
    catch(error){
      console.log(error)
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, imageUrl, description, location, dateTime } = e.target.elements;

    const newEvent = {
      title: title.value,
      imageUrl: imageUrl.value,
      description: description.value,
      location: location.value,
      dateTime: dateTime.value,
    };

    console.log("Submitting event:", newEvent);
    try {
      const response = await fetch("http://localhost:3000/api/users/CreateEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const createdEvent = await response.json();
        console.log("Created event:", createdEvent);
        addEvent(createdEvent);
        alert("Event created successfully");
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Error creating event");
    }
  };

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
