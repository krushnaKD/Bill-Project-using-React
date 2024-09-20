import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { dataContext } from "../Context/Context";
import Order from "./Order";
import { Link, useParams } from "react-router-dom";
function Menu() {
  const { users, setusers } = useContext(dataContext);

  const [product, setproduct] = useState(null);

//      const {id} =  useParams()
//  console.log(id);

 const  newuser = [...users]
 console.log(newuser);
 const getid = (id) => {
  console.log(id);
  
 }

 
  const addToCart = () => {
    if (!product) {
      setproduct(users.filter((p) => p.productId === id)[0]);
    }

    console.log(product);
  };

  // useEffect(()=>{
  //   addToCart()
  // },[])

  return (
    <div className="p-10 flex flex-wrap items-center justify-between gap-10  top-[600px]">
      {users.map((a,i) => (
      
        <Link onClick={()=>{
          getid(a.id)
          console.log(i);
          
        }}
          // to={`/details/${i}`}
          key={a.productId}
          className="p-2  w-64  border-2 border-slate-700 rounded-md relative mt-20 mb-10 flex flex-col "
        >
          <div className="   rounded-md hover:scale-110">
            <img
              className="object-cover hover:scale-110 w-[30vw] transition-all duration-100 "
              src={a.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="mt-3  justify-self-start ">Name :- {a.name}</h1>
            <h3 className="mt-3 mb-4">Price :- {a.price}</h3>
            <button
              onClick={() => {
               
                addToCart();
                
              }}
              className={`px-3 text-white rounded-md ${
                status === false ? "bg-orange-600" : "bg-sky-500"
              } ml-10 whitespace-nowrap mt-0`}
            >
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
