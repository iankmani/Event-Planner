import React, { useEffect, useState } from 'react'
import EventCard from '../EventCard/EventCard'
import { useEventStore } from '../../Store/EventStore'

import "./Explore.css"
import axios from 'axios'
import Header from '../../Components/Header/Header'

const Explore = () => {
  const EventCards = useEventStore((state)=>state.EventCards);
  console.log(EventCards)

  const [events, setEvents] = useState([]);

  const fetchEvents = async() => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/GetAllEvents`);
      console.log(response.data.events)
      setEvents(response.data.events)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEvents();
  }, [])
  return (
    <>
    <Header/>
    
    <div className="explore-container">
    
   {events.map((event, i) => (
      <>
      <EventCard
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

export default Explore