import axios from "axios";
import { create } from "zustand";

const getCartStore = create((set) => ({
  cartData: [],
  fetchCartData: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/carts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      set({ cartData: data }); // Update the cartData state
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
    }
  },
  getTotalPrice: () => {
    const cartData = getCartStore.getState().cartData;
    if (!Array.isArray(cartData)) return 0; // Return 0 if cartData is not an array

    return cartData.reduce((acc, cartItem) => {
      const itemPrice = parseFloat(cartItem.price);
      if (!isNaN(itemPrice)) {
        return acc + itemPrice; // Increment total price by item price
      } else {
        return acc; // Skip invalid values
      }
    }, 0);
  },
}));

export default getCartStore;
