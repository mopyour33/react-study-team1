import { create } from "zustand";

const useSignupStore = create((set) => ({
  isLoggedIn: false,
  //수정
  userId: '',
  setUserId: (status) => set({ userId: status }),
  //수정
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),  
}));

export default useSignupStore;
