import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ set }) {
  return (
    <div className="w-full h-16 p-5 flex items-center justify-between bg-red-300 fixed top-0 z-50">
      {/* Logo */}
      <h1 className="font-semibold text-xl sm:text-2xl">Ice Creame Cafe</h1>

      {/* Desktop Links */}
      <ul className="hidden lg:flex text-lg gap-10">
        <Link className="hover:text-white transition" to="/">
          Home
        </Link>
        <Link className="hover:text-white transition" to="/Menu">
          Menu
        </Link>
        <Link className="hover:text-white transition" to="/Order">
          Orders
        </Link>
        <Link className="hover:text-white transition" to="/About">
          About
        </Link>
        <Link className="hover:text-white transition" to="/creat">
          Add Product
        </Link>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <div className="relative group">
          <button className="text-3xl hover:bg-red-500 p-2 rounded transition">
            <RxHamburgerMenu />
          </button>
          {/* Dropdown Menu */}
          <div className="hidden group-hover:flex flex-col absolute right-0 mt-2 w-48 bg-orange-400 rounded-lg shadow-lg text-black">
            <Link
              className="py-2 px-4 hover:bg-orange-500 transition"
              to="/"
            >
              Home
            </Link>
            <Link
              className="py-2 px-4 hover:bg-orange-500 transition"
              to="/Menu"
            >
              Menu
            </Link>
            <Link
              className="py-2 px-4 hover:bg-orange-500 transition"
              to="/Order"
            >
              Orders
            </Link>
            <Link
              className="py-2 px-4 hover:bg-orange-500 transition"
              to="/About"
            >
              About
            </Link>
            <Link
              className="py-2 px-4 hover:bg-orange-500 transition"
              to="/creat"
            >
              Add Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
