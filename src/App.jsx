import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import About from './Components/About'
import Background from './Components/Background'
import Menu from './Components/Menu'
import { Route, Routes } from 'react-router-dom'
function App() {
   
  const products = [{
    productId: '1',
    image:"products/1868094.avif",
    name:"Vanila",
    price:18,
    status: false,
},{
    productId:'2',
    image:"products/1868175.avif",
    name:"choclate",
    price:22,
    status: false,
},{
 productId:'3'  ,
 image:"products/1868113.avif",
 name: "Strawberry",
 price:18,
 status: false,
},{
    productId: '4' ,
    image:"products/Aamras.avif",
    name: "AamRas Bar",
    price:27,
    status: false,
 },
,{
    productId: '5' ,
    image:"products/1869482.avif",
    name: "feast Bar",
    price: 40,
    status: false,
   
},{
    productId: '6' ,
    image:"products/1862862.avif",
    name: "Choco-Vanila",
    price: 27,
    status: false,
   
},{
    productId: '7' ,
    image:"Products/1862828.avif",
    name: "Butter-Scothch",
    price:23,
    status: false,
},]

const [data,setdata]  = useState(products)

const handleClick = (productId) =>{
     setdata((prev)=>{
      return prev.map((item)=>{
        if(item.productId === productId) return {...item, status: !item.status}
        return item
      })
     })
}

const getData = (productId) => {
  console.log(productId);
}


  return (
    <>
    <div className=' w-full h-100vh ' >
     <Navbar set={data}/>
     
     <div className=" p-10 flex flex-wrap items-center justify-between gap-10  top-[600px]   text-">
     
     {data.map((item,index)=>(
      <Card values={item} index={index} key={index} handleClick={handleClick} />
    ))}
       {data.map((item,index)=>(
      <Card values={item} index={index} key={index} handleClick={handleClick} />
    ))}
     </div>
    
    </div>
   
    <Routes>
    <Route path='/Background' element={<Background/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>

    </Routes>
  
    

    </>
  )
}

export default App
