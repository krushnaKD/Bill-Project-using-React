import React from 'react'
import { Link } from 'react-router-dom';
function Background() {
  return ( 
    <>
    <div className="w-full h-[80vh]  mt- bg-zinc-00 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-summer-ice-cream-ice-cream-propaganda-image_11340.jpg')] bg-cover top-1/2  bg-no-repeat   bg-center ">
      <h1 className='absolute top-[25%] left-[50%] lg:w-68  translate-x-[-50%] translate-y-[-50%] font-sans text-[3vh] md:text-[4vh] lg:text-[7vh] 2xl:text-[10vh] tracking-wide font-semibold  md:w-[60vw] bg-gradient-to-r from-orange-600 via-purple-500 to-yellow-500 inline-block text-transparent bg-clip-text' > ICE CREAME CAFE.</h1>
      <h2 className='absolute top-[40%] left-[47%] text-3xl font-medium  md:w-[60vw] md:top-[35%] md:left-[35%]'>Scoops of Happiness, One Bite at a Time!</h2>
    </div>
    <div className='w-[100%] h-[50%] bg-zinc-100 '>
      <div className='w-full h-screen flex items-center justify-center bg-red-500'>
      <div className='h-[70%] w-3/4 bg-[#c1ff76] pl-5 pt-10   md:w-[70vw] md:h-[35vh] lg:h-[70%] rounded-md flex  justify-around'>
       <div className='w-[35vw] h-[62vh] rounded-md overflow-hidden '>
        <img className=' object-contain rounded-md lg:h-[90%] ' src="https://i.pinimg.com/564x/12/3a/1a/123a1a9bc9041a2207071b84eca4d186.jpg" alt="" />
       </div>
       <div>
     
     <Link to="/Menu"> <button  onClick={()=><h1>hello</h1>} className='px-3 bg-red-500 text-white py-2 rounded-xl hover:bg-white hover:text-black ease-in-out '>Explore More</button></Link>
        
       </div>
      
      
      </div>
    </div>
    </div>
    </>
  )
}

export default Background;
