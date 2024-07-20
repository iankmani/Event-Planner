import React from "react";
import useStore from "../../Store/store";
import "./CreateEvent.css";
import EventCard from "../EventCard/EventCard";
const CreateEvent = () => {
  const setEventCard = useStore((state) => state.setEventCard);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, imageUrl, description, location, dateTime } =
      e.target.elements;
    setEventCard({
      data: {
        Title: title.value,
        ImageUrl: imageUrl.value,
        Description: description.value,
        Location: location.value,
        DateTime: dateTime.value,
      },
    });

    // console.log(title.value)
    // console.log(imageUrl.value)
    // console.log(description.value)
    // console.log(location.value)
    // console.log(dateTime.value)
  };
  return (
    <form onSubmit={handleSubmit} className="createEventPage">
      <div className="createEventForm">
        <input
          className="CreateEventInputs"
          type="text"
          name="title"
          placeholder="Title"
          // value={formData.Title}
          // onChange={handleChange}
        />
        <input
          className="CreateEventInputs"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          // value={formData.ImageUrl}
          // onChange={handleChange}
        />
        <input
          className="CreateEventInputs"
          type="text"
          name="description"
          placeholder="Description"
          // value={formData.Description}
          // onChange={handleChange}
        />
        <input
          className="CreateEventInputs"
          type="text"
          name="location"
          placeholder="Location"
          // value={formData.Location}
          // onChange={handleChange}
        />
        <input
          className="CreateEventInputs"
          type="text"
          name="dateTime"
          placeholder="Date and Time"
          // value={formData.DateTime}
          // onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CreateEvent;
