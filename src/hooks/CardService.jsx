import React from "react";

const CardService = ({ tittle, image, desc }) => {
  return (
    <div className="lg:w-3/12 bg-white rounded-lg shadow-md p-8 font-poppins font-semibold text-center">
      <h1 className="mx-auto xs:text-[3rem] lg:text-[6rem] flex justify-center">
        {image}
      </h1>
      <h1 className="lg:text-3xl py-4">{tittle}</h1>
      <p className="font-light text-start text-gray-500">{desc}</p>
    </div>
  );
};

export default CardService;
