import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa6";

const CardMenu = ({ tittle, price, image }) => {
  return (
    <div className="lg:w-3/12 bg-white shadow-lg rounded-lg font-poppins">
      <img
        src={`http://localhost:3000/${image}`}
        className="rounded-lg object-cover"
      />
      <div className="px-2 py-6 flex flex-col items-center gap-y-3">
        <h1 className="font-semibold text-xl">{tittle}</h1>
        <p className="flex items-center justify-center gap-x-1 bg-gray-300 font-semibold rounded-full w-6/12 text-sm px-2 py-1 text-center">
          Best Seller <FaRegThumbsUp />
        </p>
        <h1>{price}</h1>
        <button className="flex items-center gap-x-2 bg-primary px-2 rounded-full text-lg font-semibold">
          Order <BiSolidDish />
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
