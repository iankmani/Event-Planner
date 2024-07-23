import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

 export const useUserStore = create(devtools(persist(
  (set) => ({
    user: {},
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }),
  { name: 'user-storage' } 
)));

export default useUserStore;

   

