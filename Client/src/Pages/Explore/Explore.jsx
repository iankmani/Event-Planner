// Explore.js
import React, { useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import useStore from '../../Store/store.js'; 
import Header from '../../Components/Header/Header.jsx';
import './Explore.css';

const Explore = () => {
  const events = useStore((state) => state.events);
  const setEvents = useStore((state) => state.setEvents);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/GetAllEvents');
        const data = await response.json();
        setEvents(data.events); 
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [setEvents]);

  return (
    <>
    <Header />
    <div className="explore-page">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))
      ) : (
        <p>No events found</p>
      )}
    </div>
    </>
  );
};

export default Explore;
