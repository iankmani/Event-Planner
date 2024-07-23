import { create } from 'zustand';

export const useEventStore = create((set) => ({
  EventCards: [],
  addEventCard: (EventCard) => set((state) => ({
    EventCards: [...state.EventCards, EventCard],
  })),
  DeleteEventCard: (EventCardID) => set((state) => ({
    EventCards: state.EventCards.filter((EventCard) => EventCard.id !== EventCardID),
  })),
}));
