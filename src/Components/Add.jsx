import React, { useState } from 'react'

const Add = ({index,data,count,setCount}) => {

  const [addFlag,setAddFlag]=useState(false)


  const add=()=>{

      setAddFlag(true)
    if(count==0){
      setCount(count => count + 1)
    }
    else{

      // setAddFlag(true)
    }
  }

  const handleItems=(data)=>{

   
    fetch('http://localhost:5000/addcart',{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email:"hello@gmail.com",
        username:"me",
        phone:11111,
        service:data.service,
        title:data.title,
        price:data.price,
        rating:data.ratings,
        count:3
      })
    })
    .then(response => response.json())
    .then(response =>{ console.log(response)} )
  }

  return (
    <div>
        { addFlag ?
                    <div className=' sm:w-[5vw] w-[12vw] h-[5vh] flex justify-evenly bg-purple-100 border-2 border-purple-300 rounded-md gap-2 relative -top-4 -right-6'><button onClick={()=>setCount(count=>count-1)}>-</button>Add<button onClick={()=>setCount(count=>count+1)}>+</button></div>
                    :
                    <button className='sm:w-[5vw] w-[12vw] h-[5vh] bg-purple-100 border-2 border-purple-300 rounded-md relative -top-4 -right-6 inline-block ' onClick={()=>handleItems(data,index)}>Add</button>

                    }
    </div>
  )
}

export default Add