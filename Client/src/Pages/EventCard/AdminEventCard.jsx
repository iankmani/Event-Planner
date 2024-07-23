import React from 'react';
import './EventCard.css';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePendingActions } from 'react-icons/md';
import { useEventStore } from '../../Store/EventStore';
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminEventCard = ({ id, title, imageUrl, description, location, dateTime }) => {
    const notifysucess = () => {
        toast.success("Event has been Deleted Successully", {
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
        toast.error("Failed to Delete Event", {
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
    const DeleteEvent = useEventStore((state) => state.DeleteEventCard);
    // console.log(id)
    const handleDeleteEvent = async () => {
        console.log('Deleting event with id:', id);
        DeleteEvent(id);
            //delete request /event/${id}
            const response = await fetch (`http://localhost:3000/api/users/DeleteEvent/${id}`,{
                method: "DELETE",

            })
            
            console.log("here is the response", response)
            const data = await response.json()
            console.log("here is the data", data) 
            if (response.ok) {
                notifysucess();
                // setPhones(phones.filter((current) => current.id !== id));
                // alert("Event deleted successfully");
              } else {
                notifyerror();
              }

    }
  return (



    // <section className='card'>
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
      <button onClick={handleDeleteEvent}>Delete</button>


    </div>
    // </section>
  );
};

export default AdminEventCard;
