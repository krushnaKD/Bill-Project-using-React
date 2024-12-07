import React from "react";
import { Link } from "react-router-dom";

function Background() {
  return (
    <>
      <div className="w-full h-auto sm:h-[70vh] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-summer-ice-cream-ice-cream-propaganda-image_11340.jpg')] bg-cover bg-center bg-no-repeat relative">
        <h1 className="absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-sans text-[3vh] md:text-[4vh] lg:text-[7vh] 2xl:text-[10vh] tracking-wide font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-500 to-yellow-500 text-center">
          ICE CREAM CAFE.
        </h1>
        <h2 className="absolute top-[40%] left-[50%] transform -translate-x-1/2 text-xl md:text-3xl font-medium text-center px-4 md:px-0">
          Scoops of Happiness, One Bite at a Time!
        </h2>
      </div>

      <div className="w-full  bg-zinc-100 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center bg-pink-400 p-5 sm:p-10">
          <div className="w-full sm:w-3/4 bg-[#c1ff76] rounded-md flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-5 p-5 shadow-lg">
            <div className="w-full sm:w-[35%] rounded-md overflow-hidden">
              <img
                className="w-full h-auto object-cover rounded-md"
                src="https://i.pinimg.com/564x/12/3a/1a/123a1a9bc9041a2207071b84eca4d186.jpg"
                alt="Ice Cream"
              />
            </div>

            <div className="w-full sm:w-[60%] text-center sm:text-left">
              <Link to="/Menu">
                <button className="px-5 py-3 bg-red-500 text-white rounded-xl hover:bg-white hover:text-black transition ease-in-out duration-300 mb-4">
                  Explore More
                </button>
              </Link>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur nihil sunt excepturi voluptate incidunt temporibus,
                odit corporis vero? Cum sequi iusto adipisci delectus pariatur
                ea maxime facilis ullam quis ducimus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
