import React, { useEffect, useState } from 'react';
import AdminEventCard from '../EventCard/AdminEventCard.jsx'
// import { useEventStore } from '../../Store/EventStore';
import { apiUrl } from '../../Utils/config.js';


const AdminEventList = () => {
//   const EventCards = useEventStore((state) => state.EventCards);

  const [events, setEvents] = useState([]);
  

  const fetchEvents = async() => {
    try {
      const response = await fetch(`${apiUrl}/api/users/GetAllEvents`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
          
      });
      const data = await response.json();
      setEvents(response.data.events);
      console.log(data)
    //   setEvents(response.data.events)
    } catch (error) {
      console.log(error)
    }
  }
  console.log("these are evente",events)

  useEffect(() => {
    fetchEvents();
  }, [])

  return (
    <div>
     
    </div>
  );
};

export default AdminEventList;
