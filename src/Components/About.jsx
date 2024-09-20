import React from 'react'

function About() {
  return (
    <div className='w-[100%] p-10 h-screen flex items-center justify-center md:bg-red-400 md:w-[100%] '>
      <div className=' w-full h-[70%]   bg-[#FFDA76] pl-5 pt-10  rounded-md md:flex md:flex-col lg:h-[85%]  lg:w-[100%] lg:flex lg:flex-row lg:justify-between lg:pt-0'>
       <div className='rounded-md overflow-hidden md:flex md:items-center md:justify-center lg:[w-80%]  '>
        <img className='object-cover lg:rounded-md  ' src="https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg" alt="" />
       </div>
       <div className=' md:flex md:flex-col mt-5  lg:w-[50%] lg:items-center'>
        <h1 className='md:text-xl  text-2xl font-sans font-semibold mb-10 md:justify-center  md:flex lg:text-3xl' >ICE CREAME CAFE.</h1>
        <p className=' md:w-full md:text-center flex items-start md:text-xl lg:w-[80%] lg:text-start lg:text-xl '>At our ice cream cafe, every scoop is a celebration of flavor and joy. We handcraft each batch with the finest ingredients, ensuring a creamy, dreamy texture that melts perfectly on your tongue. Whether you're craving classic favorites or adventurous new combinations, our menu has something to delight every palate. From vibrant sprinkles to rich, decadent sauces, each topping adds a touch of magic to your treat. Our cozy atmosphere is the perfect place to unwind, share laughs, and create sweet memories.</p>
        <div className='md:mt-10 text-2xl font-sans font-semibold md:justify-center  md:flex lg:mt-16 lg:text-3xl'>EXPERIENCE THE BEST ICE CREAME.</div>
       </div>
      
      </div>
    </div>
  )
}

export default About
