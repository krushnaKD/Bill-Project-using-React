import React, { createContext, useState } from 'react'

export const dataContext = createContext();

const Context = (props) => {
  const [users,setusers] = useState( [{
        productId: '1',
        image:"https://assets.unileversolutions.com/v1/1868094.png?im=AspectCrop=(351,351);Resize=(351,351)",
        name:"Vanila",
        price:18,
        status: false,
    },{
        productId:'2',
        image:"https://assets.unileversolutions.com/v1/1868175.png?im=AspectCrop=(351,351);Resize=(351,351)",
        name:"choclate",
        price:22,
        status: false,
    },{
     productId:'3'  ,
     image:"https://assets.unileversolutions.com/v1/1868113.png?im=AspectCrop=(351,351);Resize=(351,351)",
     name: "Strawberry",
     price:18,
     status: false,
    },{
        productId: '4' ,
        image:"https://assets.unileversolutions.com/v1/1868177.png?im=AspectCrop=(680,680);Resize=(680,680)",
        name: "AamRas Bar",
        price:27,
        status: false,
     },
    ,{
        productId: '5' ,
        image:"https://assets.unileversolutions.com/v1/1869482.png?im=AspectCrop=(351,351);Resize=(351,351)",
        name: "feast Bar",
        price: 40,
        status: false,
       
    },{
        productId: '6' ,
        image:"https://assets.unileversolutions.com/v1/1862862.png?im=AspectCrop=(680,680);Resize=(680,680)",
        name: "Choco-Vanila",
        price: 27,
        status: false,
       
    },{
        productId: '7' ,
        image:"https://assets.unileversolutions.com/v1/1862828.png?im=AspectCrop=(680,680);Resize=(680,680)",
        name: "Butter-Scothch",
        price:23,
        status: false,
    },
    {
      productId: '8' ,
      image:"https://assets.unileversolutions.com/v1/1862841.png?im=AspectCrop=(270,270);Resize=(270,270)",
      name: "Chocobar",
      price:18,
      status: false,
    },
    {
      productId: '9' ,
      image:"https://assets.unileversolutions.com/v1/33714264.png?im=AspectCrop=(680,680);Resize=(680,680)",
      name: "Desi-Kulfi",
      price:54,
      status: false,
    },
    {
      productId: '10' ,
      image:"https://assets.unileversolutions.com/v1/1862840.png?im=AspectCrop=(270,270);Resize=(270,270)",
      name: "Double-Choclate",
      price:23,
      status: false,
    },
    ])
    console.log(users);
    
  return (
    <dataContext.Provider value={{users,setusers}}>
    {props.children}
  </dataContext.Provider>
  )
}

export default Context
