import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../Context/Context";
const Creat = () => {

  const { items, setitems} = useContext(dataContext);



  const [title, Settitle] = useState("");
  const [image,Setimage] = useState("");
  const [price, Setprice] = useState("");
 const [category,Setcatagory]= useState("")
 const [des,Setdes]= useState("")

//  const [products,setproducts] = useState([])

const Navigate = useNavigate()

   const getDataHandler = (e) =>{
       e.preventDefault();
     
       if(title.trim().length < 5 ||
       image.trim().length < 5 ||
       price.trim().length < 1 ||
       category.trim().length < 5 ||
       des.trim().length < 5 ) 
       {
        alert("Each & Every input shuld be greter then 4")
       }
        

       const product = {
        id:nanoid(),
        title,
        image,
        price,
        category,
        des
       }
       console.log(items);
       localStorage.setItem("items",JSON.stringify([...items, items]))  
       setitems([...items, product])

        
           Navigate("/")
       
   }


  return (
    <>
      <div className="w-full h-screen  p-[5%] pl-[20%]">
        <form onSubmit={getDataHandler} action="" className="pl-10 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold mb-3">Add New Items!</h1>
          <input
            type="url"
            placeholder="Enter Image Link"
            className="w-[52%] border-1 border-zinc-400 bg-zinc-200 rounded-md py-3 text-lg pl-1"
            onChange={(e) => Setimage(e.target.value) }
            value={image}
          />
            <input
            type="text"
            placeholder="Title"
            className="w-[52%] border-1 border-zinc-400 bg-zinc-200 rounded-md py-3 text-lg pl-1"
            onChange={(e) => Settitle(e.target.value)}
            value={title}
          />
          <div className="gap-4 flex">
          <input
            type="text"
            placeholder="Category"
            className="w-[25%] border-1 border-zinc-400 bg-zinc-200 rounded-md ml-1 py-3 text-lg pl-1"
            onChange={(e) => Setcatagory(e.target.value)}
            value={category}
          />
               <input
            type="Number"
            placeholder="Price"
            className="w-[25%] border-1 border-zinc-400 bg-zinc-200 rounded-md py-3 text-lg pl-1"
            onChange={(e) => Setprice(e.target.value)}
            value={price}
          />
          </div>

          <textarea onChange={(e)=> Setdes(e.target.value)} className="text-md bg-zinc-200 rounded-md  p-3 w-[52%]" rows="7"></textarea>

          <button   className="border-2 w-[20%] border-blue-300 px-2 py-1 rounded mt-5">
          Add New Product
        </button >
          
        </form>
      </div>
    </>
  );
};

export default Creat;

