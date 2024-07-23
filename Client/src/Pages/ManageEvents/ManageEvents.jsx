import React, { useEffect, useState } from 'react'
import AdminEventCard from '../EventCard/AdminEventCard.jsx'
import { useEventStore } from '../../Store/EventStore'
import { apiUrl } from '../../Utils/config.js'
import AdminHeader from '../../Components/AdminHeader/AdminHeader.jsx'

// import "./Explore.css"
// import axios from 'axios'
// import Header from '../../Components/Header/Header'

const ManageEvents = () => {
  const EventCards = useEventStore((state)=>state.EventCards);
  console.log(EventCards)

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
      setEvents(data.events || []);
      console.log(data)
      // setEvents(response.data.events)
    } catch (error) {
      console.log(error)
    }
  }
console.log(events)
  useEffect(() => {
    fetchEvents();
  }, [])
  return (
    <>
    {/* <Header/> */}
    <AdminHeader/>
    
    <div className="explore-container">
    
   {events.map((event, i) => (
      <>
      <AdminEventCard
      key={event.id}
      id={event.id}
      title={event.title}
      description={event.description}
      imageUrl={event.imageUrl}
      location={event.location}
      dateTime={event.dateTime}
      />
      </>

   )) }
   </div>
    


      
          </>
     
  )
}

export default ManageEvents