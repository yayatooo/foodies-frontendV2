import React from "react";
import Invoice from "../page/Invoice";
import { FormatRupiah } from "@arismun/format-rupiah";

const InvoiceData = ({
  orderNumber,
  deliveryAddress,
  orderItems,
  deliveryFee,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h1 className="text-primary font-semibold text-lg">Foodies</h1>
        </div>
        <div className="text-gray-700">
          <div className="font-bold text-xl mb-2">Your Order</div>
          <div className="text-sm">Date: 01/05/2023</div>
          <div className="text-sm">{orderNumber}</div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 pb-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
        {/* <div className="text-gray-700 mb-2">{deliveryFee}</div> */}
        <div className="text-gray-700 mb-2">
          {deliveryAddress.kelurahan} - {deliveryAddress.kecamatan}
        </div>
        <div className="text-gray-700 mb-2">
          {deliveryAddress.kabupaten} - {deliveryAddress.provinsi}
        </div>
        <div className="text-gray-700">
          Delivery Fee : <FormatRupiah value={deliveryFee} />
        </div>
      </div>
      <table className="w-full text-left mb-8">
        <thead>
          <tr>
            <th className="text-gray-700 font-bold uppercase py-2">
              Description
            </th>
            <th className="text-gray-700 font-bold uppercase py-2">Quantity</th>
            <th className="text-gray-700 font-bold uppercase py-2">Price</th>
            <th className="text-gray-700 font-bold uppercase py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((data) => (
            <tr key={data._id}>
              <td className="py-4 text-gray-700">{data.name}</td>
              <td className="py-4 text-gray-700">1</td>
              <td className="py-4 text-gray-700">{data.price}</td>
              <td className="py-4 text-gray-700">{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mb-8">
        <div className="text-gray-700 mr-2">Total:</div>
        <div className="text-gray-700 font-bold text-xl">
          In Development Backend
        </div>
      </div>
    </div>
  );
};

export default InvoiceData;
