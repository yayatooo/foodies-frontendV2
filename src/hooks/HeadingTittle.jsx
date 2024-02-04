import React from "react";

const HeadingTittle = ({ head, tittle }) => {
  return (
    <div className="font-poppins font-semibold xs:mb-8 lg:mb-14">
      <h1 className="xs:text-4xl lg:text-5xl text-primary">{head}</h1>
      <p className="font-light lg:text-2xl">{tittle}</p>
    </div>
  );
};

export default HeadingTittle;
