import React from "react";

const CardAdress = ({ name, image, desc }) => {
  return (
    <div className="bg-white lg:w-[20%] shadow-lg xs:p-5 lg:p-10 font-poppins flex flex-col items-center gap-y-1">
      <h1 className="xs:text-lg lg:text-3xl text-primary">{image}</h1>
      <h1 className="xs:text-sm lg:text-xl font-semibold">{name}</h1>
      <p className="xs:text-xs font-light text-gray-500">{desc}</p>
    </div>
  );
};

export default CardAdress;
