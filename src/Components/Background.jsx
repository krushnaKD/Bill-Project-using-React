import React from 'react'
import { Link } from 'react-router-dom';
function Background() {
  return ( 
    <>
    <div className="w-full h-[80vh] mt- bg-zinc-00 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-summer-ice-cream-ice-cream-propaganda-image_11340.jpg')] bg-cover top-1/2  bg-no-repeat   bg-center">
      <h1 className='absolute top-[25%] left-[50%] lg:w-68  translate-x-[-50%] translate-y-[-50%] font-sans text-[3vh] md:text-[4vh] lg:text-[7vh] 2xl:text-[10vh] text-blue-800 tracking-wide font-semibold' > ICE CREAME CAFE.</h1>
      <h2 className='absolute top-[40%] left-[47%] text-3xl font-medium '>Scoops of Happiness, One Bite at a Time!</h2>
    </div>
    <div className='w-full h-screen bg-zinc-100'>
      <h1>Explore Our Inventry.</h1>
      <div className='w-full h-screen flex items-center justify-center '>
      <div className='h-3/4 w-3/4 bg-[#c1ff76] pl-5 pt-10  rounded-md flex  justify-around'>
       <div className='w-[35vw] h-[62vh] rounded-md overflow-hidden '>
        <img className=' object-contain rounded-md  ' src="https://i.pinimg.com/564x/12/3a/1a/123a1a9bc9041a2207071b84eca4d186.jpg" alt="" />
       </div>
       <div>
     
     <Link to="/Menu"> <button  onClick={()=><h1>hello</h1>} className='px-3 bg-red-500 text-white py-2 rounded-xl hover:bg-white hover:text-black ease-in-out'>Explore More</button></Link>
        
       </div>
      
      </div>
    </div>
    </div>
    </>
  )
}

export default Background;
