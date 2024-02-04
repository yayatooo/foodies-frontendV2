import React, { useState, useEffect } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import { Link } from "react-router-dom";

const CartCard = () => {
  const [cartData, setCartData] = useState([]);

  const fetchCartData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/carts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      setCartData(data); // Update the cartData state
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
    }
  };

  useEffect(() => {
    fetchCartData(); // Fetch cart data when the component mounts
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchCartData();
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  const totalPrice = cartData.reduce((acc, cart) => {
    const itemPrice = parseFloat(cart.price);

    if (!isNaN(itemPrice)) {
      return acc + itemPrice; // Increment total price by item price
    } else {
      return acc; // Skip invalid values
    }
  }, 0);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
      </div>

      <div className="mx-auto mt-8 max-w-2xl md:mt-12">
        <div className="bg-white shadow">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            {cartData.map((cart) => {
              return (
                <>
                  <div className="flow-root" key={cart._id}>
                    <ul className="flex flex-col gap-y-4">
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0">
                          <img
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                            src={cart.image}
                            alt=""
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                {cart.name}
                              </p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                <FormatRupiah value={cart.price} />
                              </p>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              onClick={() => handleDeleteItem(cart._id)}
                              type="button"
                              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                            >
                              <svg
                                className="block h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                  className=""
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                <FormatRupiah value={totalPrice} />
              </p>
            </div>

            <div className="mt-6 text-center flex gap-4">
              <Link
                to="/menu"
                className="group inline-flex w-full items-center justify-center rounded-md bg-red-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-red-800"
              >
                Back
              </Link>
              <Link
                to="/orders"
                className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
