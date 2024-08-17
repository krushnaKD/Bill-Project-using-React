import React from 'react'

function About() {
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='h-3/4 w-3/4 bg-[#FFDA76] pl-5 pt-10  rounded-md flex  justify-around'>
       <div className='w-[35vw] h-[62vh] rounded-md overflow-hidden '>
        <img className='w-full h-full object-cover ' src="https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg" alt="" />
       </div>
       <div>
        <h1 className='text-2xl font-sans font-semibold mb-10' >ICE CREAME CAFE.</h1>
        <p className='w-[30vw] flex items-start'>At our ice cream cafe, every scoop is a celebration of flavor and joy. We handcraft each batch with the finest ingredients, ensuring a creamy, dreamy texture that melts perfectly on your tongue. Whether you're craving classic favorites or adventurous new combinations, our menu has something to delight every palate. From vibrant sprinkles to rich, decadent sauces, each topping adds a touch of magic to your treat. Our cozy atmosphere is the perfect place to unwind, share laughs, and create sweet memories.</p>
        <div className='mt-[20vh] text-2xl font-sans font-semibold text-red-700'>EXPERIENCE THE BEST ICE CREAME.</div>
       </div>
      
      </div>
    </div>
  )
}

export default About
