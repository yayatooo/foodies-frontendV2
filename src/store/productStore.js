import { create } from "zustand";
import axios from "axios";
// import { data } from "autoprefixer";

const productStore = create((set) => ({
  data: [],
  isLoading: false,
  isError: false,

  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("http://localhost:3000/product/");
      set({ data: response.data.products, isLoading: false, isError: false });
    } catch (error) {
      set({ isLoading: false, isError: true });
      console.error("Error fetching data:", error);
    }
  },
}));

export default productStore;
