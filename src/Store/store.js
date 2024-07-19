import { create } from "zustand";
import CultureSunday from "../assets/CultureSunday.jpeg";

const useStore = create((set) => ({
  eventCard: {
    Title: "Cultural Sunday",
    Description: "have fun in the event",
    DateTime: "30th July 7AM",
    Location: "Nairobi",
    ImageUrl: [CultureSunday],
  },
  setEventCard: (eventCard) => set({ eventCard }),
}));

export default useStore;
