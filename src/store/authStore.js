import { create } from "zustand";

const useAuthStore = create((set) => ({
  fullName: "",
  email: "",
  password: "",
  setField: (field, value) => set({ [field]: value }),
}));

export default useAuthStore;
