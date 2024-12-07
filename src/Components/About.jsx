import React from "react";

function About() {
  return (
    <div className="w-full p-10 h-screen flex items-center justify-center bg-zinc-200">
      <div className="w-full max-w-screen-xl h-[70%] bg-[#FFDA76] pl-5 pt-10 rounded-md flex flex-col lg:flex-row lg:justify-between lg:pt-0">
        {/* Image Section */}
        <div className="rounded-md overflow-hidden flex justify-center items-center w-full lg:w-[45%]">
          <img
            className="object-cover w-full h-auto rounded-md"
            src="https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg"
            alt="Ice Cream"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center mt-5 lg:w-[50%] lg:items-start lg:mt-0">
          <h1 className="text-2xl md:text-xl font-sans font-semibold mb-10 lg:text-3xl text-center lg:text-start">
            ICE CREAM CAFE
          </h1>
          <p className="text-lg md:text-xl lg:w-[80%] text-center lg:text-left">
            At our ice cream cafe, every scoop is a celebration of flavor and joy.
            We handcraft each batch with the finest ingredients, ensuring a creamy,
            dreamy texture that melts perfectly on your tongue. Whether you're craving
            classic favorites or adventurous new combinations, our menu has something
            to delight every palate. From vibrant sprinkles to rich, decadent sauces,
            each topping adds a touch of magic to your treat. Our cozy atmosphere is
            the perfect place to unwind, share laughs, and create sweet memories.
          </p>
          <div className="mt-10 text-2xl md:text-3xl font-sans font-semibold text-center lg:text-left">
            EXPERIENCE THE BEST ICE CREAM
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
