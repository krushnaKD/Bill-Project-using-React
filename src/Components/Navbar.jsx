import React from "react";
import About from "./About";
import Menu from "./Menu";
import Background from "./Background";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ set }) {
  return (
    <div className="w-full  h-22 p-5 flex items-center justify-between bg-red-300 fixed top-0 ">
      <h1 className="font-semibold text-2xl">Ice Creame Cafe</h1>
      <div className="">
        <ul className="flex text-lg   sm:hidden md:hidden lg:block  ">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="ml-10 " to="/Menu">
            Menu
          </Link>
          <Link className="ml-10  " to="/Order">
            Order's
          </Link>
          <Link className="ml-10 " to="/About">
            About
          </Link>
        </ul>
        <Link className=" md:text-[3vh] sm:bg-red-300 ">
          <div className="group">
            <button className="hover:bg-red-500 transition md:block    hover:border-b lg:hidden sm:text-4xl">
              <RxHamburgerMenu />
            </button>
            <div className="hidden transition group-hover:flex flex-col right-5 left-[70%]  rounded-lg absolute w-fit index p-10  bg-orange-400 z-20 text-black">
              <div className=" flex  flex-col gap-5">
                <Link
                  className="hover:border-b border-pink-600 border-3 "
                  to="/Menu"
                >
                  Menu
                </Link>
                <Link className="hover:border-b border-pink-600  " to="/Order">
                  Order's
                </Link>
                <Link className="hover:border-b border-pink-600  " to="/About">
                  About
                </Link>
              </div>
            </div>
          </div>  
        </Link>
        {/* <li className='bg-red-300 px-1 gap-10 rounded-md text-[17px]'>Favouriets <span>({set.filter(item => item.status === true).length})</span></li> */}
      </div>
    </div>
  );
}

export default Navbar;
