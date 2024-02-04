// cartStore.js
import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cart: [],
  totalQuantity: 0,
  addToCart: async (product) => {
    // Use a functional update to access the previous state
    set((state) => {
      const newCart = [...state.cart, { ...product, qty: 1 }];

      // Update the total quantity in the state
      return { cart: newCart, totalQuantity: newCart.length };
    });

    const token = localStorage.getItem("token");

    // Make a POST request to update the server
    try {
      const response = await axios.post(
        "http://localhost:3000/carts/",
        product,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  },
}));

export default useCartStore;
