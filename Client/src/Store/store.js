
import { create } from "zustand";
import CultureSunday from "../assets/CultureSunday.jpeg";

const useStore = create((set) => ({
  events: [
    {
      Title: "Cultural Sunday",
      Description: "Have fun in the event",
      DateTime: "30th July 7AM",
      Location: "Nairobi",
      ImageUrl: [CultureSunday],
    },
  ],
  setEvents: (events) => set({ events }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
}));

export default useStore;
