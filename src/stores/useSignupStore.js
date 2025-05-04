import { create } from "zustand";

const useSignupStore = create((set) => ({
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true", // 저장된 상태 불러오기
  userId: localStorage.getItem("userId") || "",

  setIsLoggedIn: (status) => {
    localStorage.setItem("isLoggedIn", status);
    set({ isLoggedIn: status });
  },

  setUserId: (id) => {
    localStorage.setItem("userId", id);
    set({ userId: id });
  },

  logout: () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    set({ isLoggedIn: false, userId: "" });
  }
}));

export default useSignupStore;
