import React from "react";
import Navbar from "./Navbar";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import CardAdress from "../hooks/CardAdress";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-bg-hero bg-cover xs:px-3 lg:px-0">
      {/* <Navbar /> */}
      <div className="px-10 lg:py-36 xs:py-12 max-w-5xl mx-auto">
        <h1 className="xs:text-5xl lg:text-[6rem] font-bold text-center xs:leading-normal lg:leading-snug">
          <span className="text-primary">Let's</span>{" "}
          <span className="bg-gray-prm px-3">Explore Our</span> Tasty{" "}
          <span className="bg-primary py-0 px-3">Foods !</span>
        </h1>
        <Link
          to="menu"
          className="xs:text-xl xs:w-8/12 lg:text-3xl lg:w-[27%] flex items-center justify-center text-center gap-x-2 bg-black text-primary font-semibold py-4 px-8 rounded-full mx-auto my-8 hover:bg-primary hover:text-black"
        >
          Check Out
          <GiForkKnifeSpoon />
        </Link>
      </div>
      <div className="flex justify-center gap-x-4 absolute w-full bottom-24">
        <CardAdress
          name="Jl Garuda No 99"
          image={<FaMapMarkerAlt />}
          desc="Our Location"
        />
        <CardAdress
          name="06.30 - 23.00"
          image={<BiSolidTimeFive />}
          desc="Working Hour"
        />
        <CardAdress
          name="08123456789"
          image={<FaPhoneAlt />}
          desc="Call Online"
        />
      </div>
    </section>
  );
};

export default Hero;
