import React from 'react'

function About() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='h-3/4 w-3/4 bg-[#FFDA76] pl-5 pt-10  rounded-md flex  justify-around'>
       <div className='w-[35vw] h-[62vh] rounded-md overflow-hidden '>
        <img className='w-full h-full object-cover ' src="https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg" alt="" />
       </div>
       <div>
        <h1 className='text-2xl font-sans font-semibold mb-10' >ICE CREAME CAFE.</h1>
        <p className='w-[30vw] flex items-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi officiis velit at, et sit placeat voluptates non, animi quis, numquam tempora? Ipsum, cum quisquam nisi ducimus veritatis at rem cupiditate?</p>
       </div>
      </div>
    </div>
  )
}

export default About
