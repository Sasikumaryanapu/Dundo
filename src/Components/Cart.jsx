import React, { useEffect, useState } from 'react'
import Add from "../Components/Add"

const Cart = () => {


    const [cartItems,setCartItems] = useState(null)

    

  const [popUp,setPopUp]=useState(false)

  const [data,setData]=useState(null)
  const [count,setCount]=useState(0)




    useEffect(()=>{

        
        fetch('http://localhost:5000/getServices')
        .then(response => response.json())
        .then(response =>{ setCartItems(response);console.log(response)} )    


    },[])


    const addToDisplay=(data)=>{

      setData(data)
      console.log(data)

    }


  
  return (

    <>
    
    <div className='fixed w-full z-20 flex justify-between text-left text-white pl-4 pt-2 pr-2 text-2xl font-bold bg-purple-600 h-12 '>
    <h1>My Cart</h1>
    <p>{cartItems?.length}</p>
    </div>

     

    <div className='flex p-6 justify-between'>
     
     <div className='no-scrollbar overflow overflow-x-hidden h-[96vh]'>

    <div className=' w-[80vw] sm:w-[500px] sm:pl-8 mt-14 sm:pb-4 '>
               {
                cartItems?.map( (d,index) => {
                  return <div onClick={()=>addToDisplay(d)} className='sm:w-[450px] sm:p-0  p-5 text-left leading-6 sm:leading-8 text-gray-600 font-semibold sm:h-auto sm:pb-4 sm:pt-2 border-b-2 border-gray-400'> 
                   <div className='flex justify-between  '>
                    <div className='flex-col '>
                      <h1 className='text-lg font-semibold text-black'>{d?.title}</h1>
                      <p>{d?.ratings}*</p>
                      <h1 className='text-md text-black'>${d?.price}</h1>
                    </div>
                    <div>

                    <img src="https://th.bing.com/th/id/OIP.flErtK8qFuz2VRGZpRnD-gHaEK?pid=ImgDet&rs=1" alt="" onClick={()=>setPopUp()} className='sm:w-32 w-20 sm:h-32 h-20 rounded-lg'  />
                    <Add  index={index} data={d} count={count} setCount={setCount}  />
                    </div>
                   </div>
                   <ol type="disc" >
                        <li> {d?.description}</li>
                        <li> {d?.description}</li>
                      </ol>
                      <details>
                        <summary className='text-purple-600'>view more</summary>
                        <p>hello bro</p>
                      </details>
                    </div>
                })
               }
              </div>

     </div>



              <div className='hidden text-left sm:inline sm:w-[50vw] sm:h-[80vh] mt-8 bg-white border-2 border-gray-300 rounded-md '>
               <img src="https://th.bing.com/th/id/OIP.flErtK8qFuz2VRGZpRnD-gHaEK?pid=ImgDet&rs=1" alt="" width={900} height={400} />
               <div className='flex justify-between p-5  h-auto'>
                <div className='text-left'>
                <h1 className='text-black text-4xl font-bold'>{data?.title}</h1>
                <p>{data?.ratings}*</p>
                <p>{data?.phone}</p>
                <p>{data?.address}</p>
                </div>
                <h1 className='pr-10 text-2xl'>${data?.price}</h1>
               </div>
               <address>
                Door No : 96-54/6 , RamaNagar 
                Khuramnaepalem,Gurgoan.
               </address>
              </div>
    </div>
        
    </>
            
  )
}

export default Cart