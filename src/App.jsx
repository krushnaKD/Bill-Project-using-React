import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import About from './Components/About'
import Background from './Components/Background'
import Menu from './Components/Menu'
import { Route, Routes } from 'react-router-dom'
import { data } from 'autoprefixer'
import Order from './Components/Order'
function App({set}) {
   
 
 





  return (
    <>
    <div className=' w-full h-100vh ' >
    <Navbar set={data}/>
   <Background/>     

      
     </div>
    
    
   
    <Routes>
    <Route path='/Background' element={<Background/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/order' element={<Order/>}/>

    </Routes>
  
    

    </>
  )
}

export default App
