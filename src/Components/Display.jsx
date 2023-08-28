import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Cart from "../Images/cart.svg"
import Add from "./Add"
import { useRef } from 'react'
import { Link } from 'react-router-dom'


const Display = () => {

  const listItems=["Repair Cost will be provided after daignosis","Visitation cahrge will be adjusted in the reapir cost","We do not repair OTG","We do not repair commercial appliances"]

  

  const [popUp,setPopUp]=useState(false)

  const [count,setCount]=useState(0)

  const [items,setItems]=useState({})

    const location=useLocation()
    const data=location.state?.displayData


    let serviceName="https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg?auto=compress&cs=tinysrgb&w=600"
    switch(data[0]?.service){

      case "salon":
        serviceName="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
      case "spa":
        serviceName="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
      case "pest":
        serviceName="https://images.pexels.com/photos/14944259/pexels-photo-14944259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        break;
      case "disinfection":
        serviceName="https://images.pexels.com/photos/4099469/pexels-photo-4099469.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
      case "painting":
        serviceName="https://images.pexels.com/photos/2065971/pexels-photo-2065971.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
      case "repairs":
        serviceName="https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
      case "appliances":
        serviceName="https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
      case "cleaning":
        serviceName="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=600"
        break;
     
      }

  const [dailogData,setDailogData]=useState(null)

    const dailogBox=(d)=>{

      setPopUp(true)
      console.log(d)
      setDailogData(d)

    }



    const containerRef = useRef(null);

    useEffect(() => {
      // Function to handle outside clicks
      function handleOutsideClick(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
         // Clicked outside the container, perform your action here
// console.log(event.target, "event")
// console.log(containerRef.current.contains(event.target))
// console.log(containerRef.current)
          setPopUp(false)
        }
      }
  
      // Attach the event listener
      document.addEventListener('mousedown', handleOutsideClick);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []); // Empty dependency array to run this effect once
  

    const scrollToChapter = (chapterId) => {
      const element = document.getElementById(chapterId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    
    if (!Array.isArray(data) || data.length === 0) {
      // Handle the case where data is not available or empty
      return (
        <div>
          <p>Data is not available.</p>
          {/* You can render a message or any other content here */}
        </div>
      );
    }
  
  return (
    <div>
      {/* menu dailog  */}
 
     {popUp && <div className='bg-black opacity-80 z-10  w-full h-full fixed '></div>}
     <dialog open={popUp} ref={containerRef} className='no-scrollbar capitalize w-[90vw] z-20 h-[80vh] sm:w-[35vw] overflow-y-scroll    mt-20 shadow-md shadow-gray-400 rounded-md fixed  bg-white'>
           <div className='text-left '>

                      <img  src={serviceName} alt="" className='w-full h-[45vh]  object-cover '  />
                  <div className=' text-sm leading-9 p-4'>
                      <h1 className='font-bold text-black text-4xl capitalize '>{dailogData?.service}</h1>
                      <p>{dailogData?.ratings}</p>
                  </div>

                 <div className='flex justify-between border-b-2 border-t-2 border-gray-300 p-4 w-auto text-left '>

                    <div className='flex-col '>
                      <h1 className='text-lg font-semibold text-black'>{dailogData?.title}</h1>
                      <p>{dailogData?.ratings}*</p>
                      <h1 className='text-md text-black'>${dailogData?.price}</h1>
                    </div>
                      <button className='border-2 border-gray-300 text-purple-600 rounded-md w-20 h-10'>Add</button>
                 </div>
                 <div className='flex justify-between border-b-2 border-t-2 border-gray-300 p-4 w-auto text-left '>

<div className='flex-col '>
  <h1 className='text-lg font-semibold text-black'>{dailogData?.title}</h1>
  <p>{dailogData?.ratings}*</p>
  <h1 className='text-md text-black'>${dailogData?.price}</h1>
</div>
  <button className='border-2 border-gray-300 text-purple-600 rounded-md w-20 h-10'>Add</button>
</div>
<div className='flex justify-between border-b-2 border-t-2 border-gray-300 p-4 w-auto text-left '>

<div className='flex-col '>
  <h1 className='text-lg font-semibold text-black'>{dailogData?.title}</h1>
  <p>{dailogData?.ratings}*</p>
  <h1 className='text-md text-black'>${dailogData?.price}</h1>
</div>
  <button className='border-2 border-gray-300 text-purple-600 rounded-md w-20 h-10'>Add</button>
</div>
                 <details>
                        <summary className='text-purple-600'>view more</summary>
                        <h1>Please Note</h1>
                        <ul type="disc" >
                          {
                            listItems.map( (m,i) => <li key={i} >{m}</li> )
                          }
                        </ul>
                    </details>


           </div>

</dialog> 


         <div  className='flex justify-center gap-5  sm:h-auto h-auto  p-4 border-2 border-gray-200 '> 
         <img src="https://www.pixel4k.com/wp-content/uploads/2019/11/urban-city-town-buildings-skyscraper_1574938344.jpg" alt="" className=' sm:w-32 sm:h-12 sm:relative -left-52 hidden  ' />

         <input type="search" placeholder='Search'  autofocus name="" id="" className='sm:w-48 w-12 sm:h-12  rounded text-lg pl-2 placeholder:text-dark-500  bg-white  p-1 border-gray border-2  outline-none '/>
         <input type="search" placeholder='Search'  autofocus name="" id="" className='sm:w-[420px] w-64  sm:h-12 rounded text-lg pl-2  sm:ml-8 placeholder:text-dark-500  bg-white  p-1 border-gray border-2  outline-none '/>
       </div>
       <div className='sm:flex grid-cols-1 capitalize'>
        <div className='text-left sm:pt-5 p-5  sm:pl-32 leading-9 '>
            <h1 className='font-bold text-4xl'>{data[0]?.service}</h1>
            <p>{data[0]?.title}</p>
            <p>{data[0]?.title}</p>

            <div className='flex-col justify-evenly leading-8 text-left p-2 sm:w-80 sm:h-auto sm:mt-10 border-2 border-gray-200 rounded '>
                <p>select a service {count} <hr/> </p> 
                <div className='flex flex-wrap justify-evenly gap-1  leading-8 sm:mt-8' >
                    
                    {
                      data.map( d => 
                        <div  onClick={() => scrollToChapter(d.title)} className='w-16 h-auto  hover:border-b-2 border-gray-600' >
                        
                          

                        <img className='w-16 h-16 rounded-md hover:border-2 border-gray-600' src={serviceName} alt="" />
                          
                          <p>{d?.title} </p>
                        </div>
                        )
                    }
                    
                 </div>
                   
                    
            </div>

        </div>
        <div className='sm:flex-col sm:pl-3'>
            <div style={{backgroundImage:`url(${serviceName})`}} className='sm:w-[900px] sm:h-[500px]  bg-no-repeat bg-cover  bg-center   mt-2 border-gray-400 rounded-md'>
                      {/* Background image */}
            </div>
            <div className='sm:flex grid-cols-1  sm:w-[900px] h-auto sm:mt-12 border-gray-200 border-2 border-r-0'>

              <div className=' sm:w-[500px] sm:pl-8 sm:pt-10 '>
               {
                 data?.map( (d,index) => {
                   return <div onClick={()=>dailogBox(d)} id={d.title} className='sm:w-[450px] sm:p-0  p-5 text-left leading-6 sm:leading-8 text-gray-600 font-semibold sm:h-auto sm:pb-4 sm:pt-2 border-b-2 border-gray-400'> 
                   <div className='flex justify-between  '>
                    <div className='flex-col '>
                       <h1 id="id" className='text-lg font-semibold text-black'>{d?.title}</h1>
                      <p>{d?.ratings}*</p>
                      <h1 className='text-md text-black'>${d?.price}</h1>
                    </div>
                    <div>

                    <img src={serviceName} alt=""  className='sm:w-32 w-20 sm:h-32 h-20 rounded-lg'  />
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
              <div className='flex-col'>

              <div className={ count ? "flex-col rounded-lg  border-2 border-purple-300 sm:w-80 h-auto sm:ml-10 sm:mt-6 ":"flex-col rounded-lg  border-2 border-slate-300 sm:w-80 h-32 sm:p-6 sm:ml-10 sm:mt-6 "}>

                { !count ?
                <div>
                  <img src={Cart} width={60} height={60} alt="" className='relative -right-24' />
                  <p> No item's in cart</p>
                </div>  :
                <div className='flex-col text-left  p-5  '>
                  <h1 className='text-lg'>Cart</h1>

                  <div className='flex justify-between pt-5 pb-5'>

                  <p>{items.name} {count}</p>


                  <div className='sm:w-[5vw] w-[12vw] h-[4vh] flex justify-evenly  bg-purple-100 border-2 border-purple-300  rounded-md '><button onClick={()=>setCount(count=>count-1)}>-</button>Add<button onClick={()=>setCount(count=>count+1)}>+</button></div>

                <p>price</p>

                  </div>
                  <ul className='pt-3 border-b-2'>
                    <li>Prices are too good</li>
                    <li>Prices are too good</li>
                    <li>Prices are too good</li>
                  </ul>
                  <button className='w-full bg-purple-700 text-white h-10 rounded-md mt-5'>discount</button>
                 

                </div>
                }
              
              </div>
              <div className='grid grid-cols-2 content-around  pl-5 pt-2 rounded-lg  border-2 border-gray-300 sm:w-80 h-28 sm:ml-10 sm:mt-6 '>
              <img src="https://th.bing.com/th/id/OIP.flErtK8qFuz2VRGZpRnD-gHaEK?pid=ImgDet&rs=1" alt="" className='sm:w-12 w-12 h-12 sm:h-12 rounded-lg'  />
              <div className='ml-[-80px] text-left'>
               <h1>Buy More Save more</h1>
                <p> 30% off 2nd item onwards</p>
              </div>
              <p className='text-purple-600'>view more</p>
              </div>
              </div>

            </div>
        </div>
        <div>

        </div>
       </div>
    </div>
  )
}

export default Display