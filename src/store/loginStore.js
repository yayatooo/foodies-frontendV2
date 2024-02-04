import { create } from "zustand";

const loginStore = create((set) => ({
  user: null,

  login: (userData) => set({ user: userData }),

  logout: () => set({ user: null }),

  initialize: () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      set({ user: storedUser });
    }
  },
}));

export default loginStore;

// const loginStore = create((set) => ({
//   token: localStorage.getItem("token") || null,
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   setAuthData: (token, user) => set({ token, user }),
//   logout: () => set({ token: null, user: null }),
// }));

// export const { setAuthData, logout } = loginStore;
