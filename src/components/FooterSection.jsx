import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-6xl container mx-auto py-16 text-xl flex xs:flex-col lg:flex-row gap-6 justify-between xs:px-8 lg:px-0">
        <div>
          <h2 className="font-bold text-5xl text-white">Foodies</h2>
          <p className="py-6  text-gray-300">Thanks to see our website 😄</p>
          <ul className="flex gap-x-4 text-primary text-3xl">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
        <div className="text-white flex gap-x-8">
          <div>
            <h1 className="mb-4">Quick Link</h1>
            <ul className="font-light space-y-2 text-gray-400">
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Rate Our Food</li>
              <li>FaQ</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4">Legal</h1>
            <ul className="font-light space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
