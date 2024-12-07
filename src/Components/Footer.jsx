import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto pt-16 px-6 md:pt-20 md:px-16 bg-gray-100">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Follow Us on <br />
            Instagram
          </h1>
          <h1 className="text-5xl md:text-7xl font-semibold mt-6 bg-gradient-to-r from-red-500 via-orange-300 to-pink-500 inline-block text-transparent bg-clip-text">
            #ICECREAMECAFE
          </h1>
        </div>

        <p className="text-base md:text-xl mt-4 md:mt-0">
          We pride ourselves on exceptional flavors & deliver all <br />
          around the country. We are focused on valuing your frozen <br />
          cravings that will melt all your trouble away.
        </p>
      </div>

      <div className="w-full mt-10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start gap-10 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl md:text-5xl font-semibold">IceCreameCafe</h1>

        <div className="md:w-1/4">
          <h2 className="text-lg md:text-xl font-semibold">ABOUT</h2>
          <p className="text-sm md:text-lg mt-2">
            A nonprofit event organization run by surfers to <br />
            support & develop Surfing.
          </p>
        </div>

        <div className="md:w-1/4">
          <h2 className="text-lg md:text-xl font-semibold">CONTACT</h2>
          <p className="text-sm md:text-lg mt-2">Icecafe5@gmail.com</p>
          <p className="text-sm md:text-lg">+234 678 9101</p>
        </div>

        <div className="flex gap-4">
          <FaTwitterSquare className="text-4xl md:text-6xl text-green-600 hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="text-4xl md:text-6xl text-purple-600 hover:text-orange-500 cursor-pointer" />
          <FaFacebookSquare className="text-4xl md:text-6xl text-blue-600 hover:text-blue-800 cursor-pointer" />
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <h1 className="text-base md:text-xl">© Copyright KD-Developer 2024</h1>
        <div className="flex gap-6">
          <h2 className="text-sm md:text-lg cursor-pointer hover:text-orange-500">
            Privacy Policy
          </h2>
          <h2 className="text-sm md:text-lg cursor-pointer hover:text-orange-500">
            Terms & Condition
          </h2>
          <Link
            to="/feedback"
            className="text-sm md:text-lg cursor-pointer hover:text-orange-500"
          >
            Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

