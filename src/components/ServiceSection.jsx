import React from "react";
import HeadingTittle from "../hooks/HeadingTittle";
import CardService from "../hooks/CardService";
import { VscPackage } from "react-icons/vsc";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";

const ServiceSection = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 bg-primary ">
      <div className="container max-w-6xl flex gap-8 mx-auto">
        <div className="font-poppins font-semibold xs:mb-8 lg:mb-14">
          <h1 className="xs:text-4xl lg:text-5xl text-black">Our Service 🤵</h1>
          <p className="font-light text-2xl">What can We do to all Customers</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex gap-4 overflow-auto">
        <CardService
          tittle="Order"
          image={<IoBagHandle />}
          desc="lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CardService
          tittle="Payment"
          image={<MdPayment />}
          desc="lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CardService
          tittle="Delivery"
          image={<TbTruckDelivery />}
          desc="lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CardService
          tittle="Package"
          image={<VscPackage />}
          desc="lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
};

export default ServiceSection;
