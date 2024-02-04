import { create } from "zustand";
import axios from "axios";

const useOrderStore = create((set) => ({
  selectedAddressId: null,
  setSelectedAddressId: (addressId) => set({ selectedAddressId: addressId }),
  postSelectedAddress: async (addressId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/orders",
        { addressId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Address posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting address:", error.message);
    }
  },
}));

export default useOrderStore;
