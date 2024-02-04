import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");

        const response = await axios.get(
          `http://localhost:3000/carts/${userId}`
        );

        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, [cart]);

  const addToCart = async (product, _id) => {
    const cartItem = cart.find((item) => item._id === _id);

    if (cartItem) {
      if (cartItem.qty >= 1) {
        increaseByQty(_id);
      }
    } else {
      const userId = localStorage.getItem("userId");
      const newItem = { ...product, qty: 1, userId };

      try {
        const response = await axios.post("http://localhost:3000/carts/", {
          name: newItem.name,
          qty: newItem.qty,
          price: newItem.price,
          user: newItem.userId,
          image: newItem.image,
          product: newItem._id,
        });

        if (response.status === 201) {
          setCart((prevCart) => [...prevCart, newItem]);
        } else {
          console.error("Error adding to cart:", response.data);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const removeCart = async (_id) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.delete(
        `http://localhost:3000/carts/${userId}/${_id}`
      );
      if (response.status === 200) {
        const newCart = cart.filter((item) => item._id !== _id);
        setCart(newCart);
      } else {
        console.error("Error removing from cart:", response.data);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const clearUserCart = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.delete(
        `http://localhost:3000/carts/${userId}`
      );

      if (response.status === 200) {
        setCart([]);

        enqueueSnackbar("Cart cleared successfully", { variant: "success" });
      } else {
        enqueueSnackbar("Gagal Menghapus Cart", { variant: "error" });
      }
    } catch (error) {
      console.error("Error clearing user cart:", error);
    }
  };

  const increase = async (_id) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.patch(
        `http://localhost:3000/carts/${userId}/${_id}/increase`
      );

      if (response.status === 200) {
        const updatedCart = cart.map((item) =>
          item._id === _id ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(updatedCart);
      } else {
        console.error("Error increasing qty:", response.data);
      }
    } catch (error) {
      console.error("Error increasing qty:", error);
    }
  };

  const decreaseAmount = async (_id) => {
    try {
      const userId = localStorage.getItem("userId");
      const cartItem = cart.find((item) => item._id === _id);

      if (cartItem) {
        const newCart = cart.map((item) =>
          item._id === _id ? { ...item, qty: item.qty - 1 } : item
        );
        const response = await axios.patch(
          `http://localhost:3000/carts/${userId}/${_id}/decrease`
        );

        if (response.status === 200) {
          if (cartItem.qty < 1) {
            removeCart(_id);
          }
        } else {
          console.error("Error decreasing item qty:", response.data);
        }
        setCart(newCart);
      }
    } catch (error) {
      console.error("Error decreasing item qty:", error);
    }
  };

  const increaseByQty = async (_id, qty) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:3000/carts/${userId}/${_id}/increase/${qty}`
      );

      if (response.status === 200) {
        const updatedCart = cart.map((item) =>
          item._id === _id ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(updatedCart);
      } else {
        console.error("Error increasing qty:", response.data);
      }
    } catch (error) {
      console.error("Error increasing qty:", error);
    }
  };

  useEffect(() => {
    const amount = cart.reduce(
      (accumulator, currentItem) => accumulator + currentItem.amount,
      0
    );
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.amount,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        increase,
        decreaseAmount,
        itemAmount,
        total,
        clearUserCart,
        increaseByQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
