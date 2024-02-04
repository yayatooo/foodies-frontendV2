import React from "react";
import getCartStore from "../store/getCartData";
import { FormatRupiah } from "@arismun/format-rupiah";

const CartOrder = () => {
  const { getTotalPrice } = getCartStore();
  // console.log(getTotalPrice());
  return (
    <div className="bg-white rounded-lg mt-4">
      <h1 className="text-2xl font-bold px-10 py-4">Invoice 💸</h1>
      <div className="flex items-center justify-between py-6 px-12 w-full gap-4 font-semibold ">
        <div>
          <h1>Subtotal</h1>
          <h1>Delivery</h1>
          <h1>Tax</h1>
        </div>
        <div>
          <h1>
            <FormatRupiah value={getTotalPrice()} />
          </h1>
          <h1>Rp. 10.000</h1>
          <h1>Rp. 0</h1>
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
