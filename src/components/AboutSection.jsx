import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto items-center xs:px-3 lg:flex lg:px-0 py-24 font-poppins gap-x-6">
      <img src="./restaurant-food.png" alt="Food" />
      <div className="py-8">
        <h1 className="xs:text-4xl lg:text-5xl text-primary font-semibold">
          About Us 🧑‍🍳
        </h1>
        <p className="font-light text-2xl">Let's Know each other</p>
        <p className="text-gray-400 py-4">
          lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="flex xs:w-6/12 justify-center items-center gap-x-2 bg-primary px-3 py-1 rounded-full text-lg font-semibold m-8 mx-28 float-right">
          More about Us <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
