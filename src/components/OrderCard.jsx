import React, { useEffect } from "react";
import AddressOrder from "./AddressOrder";
import CartOrder from "./CartOrder";
import { Link } from "react-router-dom";
import getCartStore from "../store/getCartData";
import { FormatRupiah } from "@arismun/format-rupiah";

const OrderCard = () => {
  const { cartData, fetchCartData } = getCartStore();

  const handleAddressSubmit = (selectedAddress) => {
    console.log("Selected Address:", selectedAddress);
  };
  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  if (cartData === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <section className=" container max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Order 📋 </h1>
      <div className="bg-white rounded-lg">
        <h1 className="text-2xl font-bold px-10 py-4">Product 🥘</h1>
        {cartData.map((data) => (
          <div
            className="flex py-6 px-12 w-full border-b-2 border-gray-200 justify-between font-semibold "
            key={data._id}
          >
            <div className="shrink-0">
              <img
                className="h-24 w-24 max-w-full rounded-lg object-cover"
                src={data.image}
                alt=""
              />
            </div>
            <h1>{data.name}</h1>
            <h1>
              <FormatRupiah value={data.price} />
            </h1>
          </div>
        ))}
      </div>
      <AddressOrder onAddressSubmit={handleAddressSubmit} />
      <CartOrder />
      <div className="flex gap-8 pt-6">
        <Link
          to="/menu"
          className="group inline-flex w-full items-center justify-center rounded-md bg-red-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-red-800"
        >
          Back
        </Link>
        <Link
          to="/profile"
          className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          Bayar
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
    </section>
  );
};

export default OrderCard;
