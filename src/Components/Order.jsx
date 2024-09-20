import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Context/Context'
import { useParams } from 'react-router-dom'

function Order() {
  const [products,setproducts] = useState(null);

  const {id} = useParams()
  console.log(id);
  
  const getproductsdata = async() =>  {
    try {
      const {data} = await axios.get(`/products/${id}`);
      console.log(data);
      setproducts(data)
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{

    getproductsdata();

  },[])
  const {users} = useContext(dataContext)
  return (
    <h1>j</h1>
//     <div className="p-10 flex flex-wrap items-center justify-between gap-10  top-[600px]">
//     {users.map((a) => (
//       <div key={a.productId} className="p-2  w-64  border-2 border-slate-700 rounded-md relative mt-20 mb-10 flex flex-col ">
//         <div className="   rounded-md hover:scale-110">
//           <img
//             className="object-cover hover:scale-110 w-[30vw] transition-all duration-100 "
//             src={a.image}
//             alt=""
//           />
//         </div>
//         <div>
//           <h1 className="mt-3  justify-self-start ">Name :- {a.name}</h1>
//           <h3 className="mt-3 mb-4">Price :- {a.price}</h3>
//           <button
//             onClick={() => {
//               // handleClick(a.productId);
//               // getData(productId);
//               addToCart()
// }}
//             className={`px-3 text-white rounded-md ${
//               status === false ? "bg-orange-600" : "bg-sky-500"
//             } ml-10 whitespace-nowrap mt-0`}
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
  )
}

export default Order
