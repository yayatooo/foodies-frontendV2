import { create } from "zustand";
import axios from "axios";

const useInvoiceStore = create((set) => ({
  invoice: [],
  setInvoice: (data) => set({ invoice: data }),
  getDataInvoice: async (token) => {
    try {
      const response = await axios.get("http://localhost:3000/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      set({ invoice: data });
    } catch (error) {
      console.error("Error fetching invoice data:", error.message);
    }
  },
}));

export default useInvoiceStore;
