import {create} from 'zustand'
import EventCard from '../Pages/EventCard/EventCard'
// import EventCard from '../Pages/EventCard/EventCard'

export const useEventStore = create((set)=>({
   
    EventCards: [],

    actions:{
        addEventCard: (EventCard) => (set((state)=> ({EventCards: [...state.EventCards, EventCard]
        }))
    ),
        DeleteEventCard: (EventCardID) => set((state)=> ({EventCards: state.EventCards.filter((EventCard)=>EventCard.id !== EventCardID)})),
        
    }
    
   


}))
