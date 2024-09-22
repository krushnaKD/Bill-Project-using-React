import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full h-screen pt-16 pl-16 pr-10">
      <h1 className="text-6xl font-semibold">
        Follow Us On <br />
        Instgram
      </h1>
      <h1 className="text-7xl font-semibold mt-10 bg-gradient-to-r from-red-500 via-orange-300 to-pink-500 linline-block text-transparent bg-clip-text">
        #ICECREAMECAFE
      </h1>
      <p className="text-xl mt-10">
        We pride ourselves on exceptional flavors & deliver all <br />
        around the country. We are focused on valuing your frozen <br />
        cravings that will melt all your trouble away.
      </p>
      <div className="w-full h-[25%]   mt-10 p-10 flex justify-between ">
        <h1 className="text-5xl font-semibold self-start ">IceCreameCafe</h1>
        <div>
          <h2 className="text-xl ">ABOUT</h2>
          <p className="text-lg">
            A nonprofit event organization run by surfers to <br />
            support & develop Surfing.
          </p>
        </div>
        <div>
          <h2 className="text-xl">CONTACT</h2>
          <p className="text-lg">Icecafe5@gmail.com</p>
          <p>+234 678 9101</p>
        </div>
 <div className="flex">
        <FaTwitterSquare className="text-6xl text-green-600 hover:text-blue-500" />
        <FaInstagram className="text-6xl text-purple-600 hover:text-orange-500" />
        <FaFacebookSquare  className="text-6xl text--600 hover:text-blue-500"/>
        </div>
      </div>
      <hr
        style={{
          background: 'gray',
          color: 'gray',
          borderColor: 'gray',
          height: '2px',
        }}></hr>
        <div className="w-full p-8 flex justify-between">
      <h1 className="text-xl ">© Copyright KD-Developer 2024</h1>
      <div className="flex justify-between gap-10">
        <h2 className="text-lg cursor-pointer hover:text-orange-500">Privacy Policy</h2>
        <h2 className="text-lg cursor-pointer hover:text-orange-500">Terms & Condition</h2>
        <Link to="/feedback" className="text-lg cursor-pointer hover:text-orange-500">Feedback</Link >

      </div>
        </div>
    </div>
  );
};

export default Footer;
