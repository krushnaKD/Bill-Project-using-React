import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import About from "./Components/About";
import Background from "./Components/Background";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";
import { data } from "autoprefixer";
import Order from "./Components/Order";
import Details from "./Components/Details";
import { CartContext } from "./Context/CartContext";
import Footer from "./Components/Footer";
import Creat from "./Components/Creat";
function App({ set }) {
     
   
   const {data,setdata} = useState(true)
   

   

  return (
    <>
      <div className=" w-full h-100vh ">
        <Navbar set={data} />
        {/* <Background /> */}
       
      </div>

      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/creat" element={<Creat />} />

      </Routes>
      <Footer/>
      </>
  );
}

export default App;
