import React, { useEffect, useRef, useState } from 'react'
import Dailog from '../dailog/Dailog'
import { useNavigate } from 'react-router-dom'
import salon_women from "../../Images/salon_women.svg"
import massage from "../../Images/massage.svg"
import hair from "../../Images/hair.svg"
import spa_women from "../../Images/spa.svg"
import salon_men from "../../Images/salon_men.svg"
import appliance from "../../Images/aplliance.svg"
import painting from "../../Images/painting.svg"
import cleaning from "../../Images/pest.svg"
import disinfection from "../../Images/disinfecction.svg"
import homerepair from "../../Images/homerepair.svg"
import Secure from "../../Images/secure.svg"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Login from '../Login'
import Register from '../Register'

import {useSelector,useDispatch} from 'react-redux'

const Home = () => {

    //redux
    const userData=useSelector((state)=>state.value)

    const [menuFlag,setMenuFlag]=useState(false)
    const [searchbar,setSearchbar]=useState(false)
    const [login,setLogin]=useState(false)
    const [register,setRegister]=useState(false)


    const [search,setSearch]= useState("")


    const loginRef=useRef(null)
    const [data,setData]=useState(null)
    
    const offers=["https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678721781429-69c225.jpeg","https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678463313266-174e91.jpeg","https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678721769247-44fa76.jpeg","https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678463309015-2b92d2.jpeg"]
    
   
    
    
    useEffect(()=>{


        fetch('https://backend-dundo.onrender.com/getServices')
        .then(response => response.json())
        .then(response =>{ setData(response)} )
 

        window.addEventListener("scroll",()=>{
            if(document.documentElement.scrollTop > 880){
                // console.log(document.documentElement.scrollTop)
                setSearchbar(true)
            }
            else{
                setSearchbar(false)
            }
        })

        
        console.log("data from ",data)
    },[]) 

   
    const category=[{
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1686566544850-155597.jpeg",
        title:"Laser Doctor Consultation",
        subtitle:"Advanced Skin Treatment"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
        title:"Air Purifier",
        subtitle:"Flat $100 off"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1687429154031-c4b09a.jpeg",
        title:"Native Water Purifier",
        subtitle:""
    }]

 


    const appliances=[{
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png",
        title:"Geyser Repair",
        subtitle:"Starts at $249"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png",
        title:"Water Purifier",
        subtitle:"Up to 45%"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
        title:"Air Purifier",
        subtitle:"Flat $100%"
    }]

    const spa=[{
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg",
        title:"Salon Prime",
        subtitle:"Free Waxing"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
        title:"Salon Prime for KIds & Men",
        subtitle:"Flat $100 off"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png",
        title:"Spa For Women",
        subtitle:"Free head massage"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg",
        title:"Massage for Men",
        subtitle:"Starts at $499"
    }]

    const pest=[{
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
        title:"Bathroom & Kitchen Cleaning",
        subtitle:""
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg",
        title:"Full Home Cleaning",
        subtitle:""
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
        title:"Sofa & Carpet Cleaning",
        subtitle:""
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
        title:"Cockroach,Ant Pest Control",
        subtitle:""
    }]

    const luxury=[{
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png",
        title:"Salon Luxe",
        subtitle:""
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png",
        title:"Salon Royale For Kids",
        subtitle:"Spa Luxe"
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png",
        title:"Massage Therapy",
        subtitle:""
    }]

    const repairs=[{
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
        title:"Carpenters",
        subtitle:""
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg",
        title:"Electricians",
        subtitle:""
    },
    {
        img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
        title:"Plumbers",
        subtitle:""
    }]

    const airPurifier={

        card:{
            title:"Geyser",
            bookings:"2.43 (5.688 bookings)",
            rebook:"RE book the same Professional",
            img:{
                img1:"https://www.pixel4k.com/wp-content/uploads/2019/11/urban-city-town-buildings-skyscraper_1574938344.jpg",
                tit1:"abc",
                img2:"https://www.pixel4k.com/wp-content/uploads/2019/11/urban-city-town-buildings-skyscraper_1574938344.jpg",
                tit2:"afasf",
                img3:"https://www.pixel4k.com/wp-content/uploads/2019/11/urban-city-town-buildings-skyscraper_1574938344.jpg",
                tit3:"uahs8sH0"
            }
        },
        services:[{
            heading:"fahdf",
            title:"Geyser Checkup",
            bookings:"2.43 (5.688 bookings)",
            price:"Starts at $249",
            p1:"Price includes with",
            p2:"Price includes with"
        },
        {
            heading:"falthu",
            title:"Geyser Checkup",
            bookings:"2.03 (5.688 bookings)",
            price:"Starts at $249",
            p1:"Price includes with",
            p2:"Price includes with"
        },
        {
            heading:"fahdf",
            title:"Geyser Checkup",
            bookings:"2.43 (5.688 bookings)",
            price:"Starts at $249",
            p1:"Price includes with",
            p2:"Price includes with"
        },
        {
            heading:"falthu",
            title:"Geyser Checkup",
            bookings:"2.03 (5.688 bookings)",
            price:"Starts at $249",
            p1:"Price includes with",
            p2:"Price includes with"
        }]

    }
    const navigate=useNavigate()

    const [ar,setAr]=useState([])
    const [service,setService]=useState("")


    const dailbox=(work,data)=>{

        
        switch(work){
            
        case "salon_women":
            setAr(data)
            setService("Salon for Women")
           break;
        case "hair":
            setAr(data?.filter(d =>d.service == "hair"))
            console.log(data?.filter(d =>d.service == "hair"))
            // setAr([{title:'Hair studio',img:''},{title:'Nail studio',img:''},{title:'Laser hair reduction',img:''}])
            setService("Hair,Skin & Nails")
           break;
        case "spa_women":  
            var spawomen=data?.filter(d => d.service == "spa")
            navigate("/display",{state:{displayData:spawomen}})
            setService("Spa for Women")
           break;
        case "salon_men":  
            var salonmen=data?.filter(d => d.service == "salon men")
            navigate("/display",{state:{displayData:salonmen}})
           break;
        case "massage_men": 
             var massagemen=data?.filter(d => d.service == "massage men")
             navigate("/display",{state:{displayData:massagemen}})
           break;
        case "appliance_repair":
            setAr(data?.filter(d =>d.service == "apliances"))
            console.log(data?.filter(d =>d.service == "appliances"))
            // setAr([{title:'Ac Service & Repair ',img:''},{title:'Laptop Repair(at home)',img:''},{title:'Microwave Repair',img:''},{title:'Refrigerator',img:''},{title:'Washing Machince Repair',img:''}])
            setService("Appliance Repair")
           break;
        case "painting":
              var painting=data?.filter(d => d.service == "painting")
              navigate("/display",{state:{displayData:painting}})
             break;
        case "pest": 
            setAr(data?.filter(d =>d.service =="pest"))
            console.log(data?.filter(d =>d.service =="pest"))
            // setAr([{title:'Weekly bathroom cleaning',img:''},{title:'Bathroom & Kitchen cleaning',img:''},{title:'Cockroach ant & general pest control',img:''},{title:'Full home cleaning',img:''},{title:'Sofa & Carpet cleaning',img:''}])
            setService("Cleaning & Pest")
           break;
        case "disinfection":
            var disinfection=data?.filter(d => d.service == "disinfection")
            navigate("/display",{state:{displayData:disinfection}})
           break;
        case "home_repairs":
            setAr(data?.filter(d =>d.service == "repairs"))
            console.log(data?.filter(d =>d.service == "repairs"))
            setService("Home Repairs")
           break;
        default:
            setAr([])

            
       }
            

        setMenuFlag(true)
    }


    //image 


    let serviceName="https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg?auto=compress&cs=tinysrgb&w=600"
    switch("repairs"){

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

    return (

        
        

       <div  className=" h-52 sm:h-[500px] text-slate-500  text-sm z-100  sm:text-2xl bg-no-repeat bg-cover bg-center bg-[url('https://res.cloudinary.com/urbanclap/image/upload/w_1800,q_auto:low,f_auto,fl_progressive:steep/images/growth/home-screen/1615375782838-f890f8.jpeg')]    ">
          {login ? <Login  login_off={()=>setLogin()}  /> :null}
          {register ? <Register register_off={()=>setRegister(false)} /> : null}
          { searchbar ?  <div className='h-[10vh] pt-1 pl-1  flex fixed sm:text-sm text-[10px] leading-3 text-black  bg-white border-2 sm:gap-12 gap-2 border-gray-200 shadow-md rounded-sm  sm:p-3 w-full transition-all delay-500 duration-500 '>
             <input type="search" placeholder='Search for services'  autofocus name="" id="" className='sm:w-[820px] w-64 h-12 pl-3 text-lg border-gray-200 border-2 rounded  sm:ml-32 placeholder:text-dark-500  bg-white  p-1  outline-none '/>
            <p>
             <img src={salon_women} alt="" width={30}  className='sm:ml-10 ml-4' onClick={()=>dailbox("spa_women")} />
             <span>Salon for Women</span>
            </p>
            <p>
             <img src={appliance} alt="" width={30} className='sm:ml-10 ml-4' onClick={()=>dailbox("spa_women")} />
             <span>Appliance Repair</span>
            </p>
             
            </div> : null
            }
            <div className='flex justify-between p-1 gap-10  text-white'>
                <h1 className='text-3xl font-bold' onClick={()=>navigate("/cart")}>Dundo</h1>
                {/* <img src="https://th.bing.com/th/id/OIP.1F-USNwgYAISQHMklx4HjAHaE7?w=286&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-10 h-10 sm:w-32 sm:h-16 ' /> */}
                <ul className='flex gap-2 sm:pl-5 justify-between align-start text-white ' >
                    <li>
                        <a className='sm:after:content-["Professional"]' onClick={()=>setRegister(true)}> Register as a </a>
                    </li>
                    <li>
                        <a> Help</a>
                    </li>
                    <li>
                        <p onClick={()=>setLogin(true)}>Login/Sign Up</p>
                    </li>
                    <li> {userData[0]?.email ? <a onClick={()=>navigate('/cart')} >Cart</a>:null} </li>
                </ul>
            </div>


          
        {/* menu dailog  */}
          <dialog open={menuFlag} className='flex-col no-scrollbar  w-[50vh] h-[100vh] mt-[-47px] sm:w-96 sm:mt-[-75px]  sm:ml-[1160px]  fixed  sm:h-[745px] bg-slate-50' >
                    <div className='h-14 mb-1 border-b-4 text-left text-xl text-gray-700 leading-9 bg-white sm:mt-10'>
                    <h1 onClick={()=>setMenuFlag(false)}><KeyboardBackspaceIcon/>{service}</h1>
                    </div>
                    {
                        ar.map( s => {
                            return <div className='flex gap-5 h-20 bg-white pt-2   text-gray-600 ' onClick={()=>navigate("/display",{state:{displayData:data?.filter(d => d.service == s.service)}})}>
                           <img src={serviceName} alt="" className='w-16 h-16 rounded-lg ml-3  ' />
                                <div className='flex w-64 justify-around border-b-2 leading-9 text-sm border-gray-300'>
                                <p>{s.title}</p>
                                <p>*</p>
                                </div>
                            </div>
                        })
                    }
          </dialog>

                <h1 className='sm:text-5xl text-lg sm:mt-32 mt-12 break-word text-white font-semibold  '>Home Services on Demand</h1>
            <div className='hidden sm:inline-block sm:mt-16  '>
             <select type="" placeholder='Country'  autofocus name="" id="" onChange={(e)=>setSearch(e.target.value)} className='w-48  h-14 rounded  pl-2 text-lg placeholder:text-dark-500  bg-slate-50  p-1  outline-none '>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="England">England</option>
            </select>
            <input type="search" placeholder='Search Service'   autofocus name="" id="" onChange={(e)=>setSearch(e.target.value)} className='w-[620px]  h-14 rounded pl-2 text-lg ml-8 placeholder:text-dark-500  bg-slate-50  p-1  outline-none '  />

          <div className='w-[40%] text-xl ml-56 absolute bg-white text-left'>
            <p>{search}</p>
                     {  true ? 
                        data?.filter( f => f.service.toLowerCase() == search.toLowerCase() ).map(c => {
                            return <p onClick={()=>navigate("/display",{ state: { displayData:data?.filter(d => d.service == search)}})}>{c.service}</p>
                        }) : null
                     }
         </div>
            </div>
             <div className='card w-auto flex flex-wrap   justify-between  mt-8 m-4 sm:m-80 sm:mt-24  border-solid border-2 h-auto bg-white-600 shadow-lg shadow-white-400 bg-white rounded text-3xl '>
             <input type="search" placeholder='search'  autofocus name="" id=""  onChange={(e)=>setSearch(e.target.value)} className=' w-72   h-9 rounded sm:hidden   placeholder:text-dark-500  bg-white    outline-none text-xl p-6 pl-4'/>
             <div className='sm:hidden sm:w-[70%] sm:ml-56 pl-4 bg-white text-left text-xl'>
                    <p>{search}</p>         
                     {  true ? 
                        data?.filter( f => f.service.toLowerCase() == search.toLowerCase() ).map(c => {
                            return <p onClick={()=>navigate("/display",{ state: { displayData:data?.filter(d => d.service == search)}})}>{c.service}</p>
                        }) : null
                     }
             </div>
                    <ul className='flex sm:gap-16 gap-5 sm:pl-5 justify-evenly pl-5  h-auto flex-wrap   text-sm my-10'>
                        <li>
                        <img  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" alt="" width={40} className='ml-5' onClick={()=>dailbox("salon_women",data)} />
                                <p>Salon for Women</p>
                        </li>
                        <li>
                                 <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="" width={40} className='ml-5' onClick={()=>dailbox("hair",data)} />
                                <p>Hair,Skin & Nails</p>
                        </li>
                        <li>
                                 <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" alt="" width={40} className='ml-8' onClick={()=>dailbox("spa_women",data)} />
                                <p>Spa for women</p>
                        </li>
                        <li>
                                                               
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="" width={40} className='ml-5' onClick={()=>dailbox("salon_men",data)}  />
                                <p>Salon for Men</p>
                        </li>
                        <li>
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" alt="" width={40} className='ml-8' onClick={()=>dailbox("massage_men",data)} />
                                <p>Massag for Men</p>
                        </li>
                    </ul>
                </div>



          <h1 className='  text-2xl text-black mt-10 lg:mt-[-250px]  font-semibold'>Home Services</h1>
          <div className='card w-auto flex flex-wrap   justify-between  mt-8 m-4 sm:m-80 sm:mt-12  border-solid border-2 h-auto bg-white-600 shadow-lg shadow-white-400 bg-white rounded text-3xl '>

                    <ul className='flex sm:gap-20 gap-5 sm:pl-5 justify-evenly pl-5   h-auto flex-wrap   text-sm my-10'>
                        <li>
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672912455342-3123f1.jpeg" alt="" width={40} className='ml-10'  onClick={()=>dailbox("appliance_repair",data)} />
                                <p>Appliance Repair</p>
                        </li>
                        <li>
                                 <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="" width={40} className='ml-5'  onClick={()=>dailbox("painting",data)}/>
                                <p>Home Painting</p>
                        </li>
                        <li>
                                 <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="" width={40} className='ml-10'   onClick={()=>dailbox("pest",data)}/>
                                <p>Cleaning & Pest</p>
                        </li>
                        <li>
                                                               
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png" alt="" width={40} className='ml-5'  onClick={()=>dailbox("disinfection",data)} />
                                <p>Disinfection</p>
                        </li>
                        <li>
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672912452485-cbbbc5.jpeg" alt="" width={40} className='ml-5'  onClick={()=>dailbox("home_repairs",data)}  />
                                <p>Home Repairs</p>
                        </li>
                    </ul>
                </div>

        {/* offers */}
       
       
          <div className='border-2 w-68  mt-12 ml-3 mr-3 sm:m-0 h-auto shadow-lg shadow-white-600 bg-white flex pt-8 pl-3 pb-20  sm:mt-[-200px]  overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  '>
             <div className='flex sm:pl-40  gap-5   sm:pt-10  '>
             {
                    offers.map(o => {
                        return  <div>
                         <div className="border-2  -z-0 border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-100  w-64 h-32 " onClick={()=>navigate("/display",{ state: { displayData:airPurifier}})}>
                           <img src={o} alt=""  />
                        </div>
                       </div>
                    })
                }
             </div>
          </div>


          {/* new category launches */}

                <div className='border-2 w-68   pb-20 ml-3 mr-3 sm:m-0 h-auto shadow-lg shadow-white-600 bg-white flex-col justify-around  pl-3   overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  '>
                <h1 className='mt-12 mb-12 text-black text-2xl sm:text-4xl'>New Category Launches</h1>

                    <div className='flex sm:pl-80 overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden   text-sm gap-5 '>
                 {
                    data?.slice(0,3).map(c => {
                        return  <div>
                         <img src="https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg?auto=compress&cs=tinysrgb&w=600" className='border-2  border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-100  w-64 h-32 ' onClick={()=>navigate("/display",{ state: { displayData:data}})}/>
                        <h2 className='text-black text-lg'>{c.title}</h2>
                        <p>{c.price}</p></div>
                    })
                }
                </div>
            </div>

 {/* Appliances*/}

 <div className='border-2 w-68   ml-3 mr-3 sm:m-0 h-auto text-sm   bg-white flex-col pt-8 pl-3 pb-20  overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  '>

            <div className='pb-10'>

            <h1 className='mt-12 text-black text-2xl sm:text-4xl pb-3'>Appliances</h1>
            <p>Servicing , Repair, Installation & Uninstallation</p>
                
            </div>
                <div className='flex sm:pl-80 overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  gap-5 '>
             {
                appliances.map(a => {
                    return  <div>
                     <img src={a.img} className='border-2  border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-100  w-64 h-32 '/>
                    <h2 className='text-black text-lg'>{a.title}</h2>
                    <p>{a.subtitle}</p>

                    </div>
                })
            }
            </div>
        </div>


       
       {/* Salon , Spa and Massage services */}
      
       <div className='border-2 w-68   ml-3 mr-3 sm:m-0 h-auto  bg-white flex-col pt-8 pl-3 pb-20  overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  '>


        <div className='pb-10'>
            <h1 className='mt-12 text-black text-2xl sm:text-4xl pb-3'>Salon , Spa and Massage services</h1>
            <p>Hygenic & Single use products | Low-contact services</p>
        </div>

    <div className='flex sm:pl-40 gap-5 overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  text-sm '>
    {
        spa.map(s => {
            return  <div>
         <img src={s.img} className='border-2  border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-75  w-64 h-32 '/>
            <h2 className='text-black text-lg'>{s.title}</h2>
            <p>{s.subtitle}</p>

            </div>
        })
    }
    </div>
    </div>


{/* Cleaning & Pest Control*/}



<div className='border-2 w-68   ml-3 mr-3 sm:m-0 h-auto shadow-lg shadow-white-600 bg-white flex-col pt-8 pl-3 pb-20  overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  '>
    <h1 className='mt-10 mb-10 text-black text-2xl sm:text-4xl pb-3'>Cleaning  & Pest Control</h1>

   <div className='flex gap-5 sm:pl-36 overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden   sm:ml-0 '>
{
   pest.map(p => {
       return  <div>
     <img src={p.img} className='border-2 border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-100  w-64 h-32  '/>
       <h2 className='text-black text-lg'>{p.title}</h2>
       <p>{p.subtitle}</p>

       </div>
   })
}
    </div>
</div>

{/* UC Luxury Experience */}

   
       <div className='border-2 w-68  mt-12 ml-3 mr-3  sm:m-0 h-auto shadow-lg shadow-white-600 bg-white flex-col pt-8 pl-3 pb-20   '>

       <div className='mb-10'>

            <h1 className='mt-10  text-black text-2xl sm:text-4xl pb-3'>UC Luxury Experience</h1>
            <p>Top Professionals | Best Brands | Premium Experiences</p>

        </div>
       <div className='flex sm:pl-80 gap-5 overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden  text-sm '>
    {
       luxury.map(l => {
           return  <div>
            <img src={l.img} className='border-2  border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-100  w-64 h-32 '/>
           <h2 className='text-black text-lg'>{l.title}</h2>
           <p>{l.subtitle}</p>

           </div>
       })
   }
   </div>
</div>

{/* Home Repairs*/}



<div className='border-2 w-68  mt-12 ml-3 mr-3 sm:m-0 h-auto   bg-white flex-col pt-8 pl-3 pb-20    '>
<h1 className='mt-10 mb-10 text-black text-2xl sm:text-4xl pb-3'>Home Repairs</h1>

   <div className='flex sm:pl-80 gap-5 overflow-scroll no-scrollbar sm:overflow-x-hidden overflow-y-hidden '>
{
   repairs.map(r => {
       return  <div>
         <img src={r.img} className='border-2  border-white rounded-md bg-sky-300 hover:scale-y-110 hover:scale-x-110 transition-all delay-75 duration-100  w-64 h-32 '/>
       <h2 className='text-black text-lg'>{r.title}</h2>
       <p>{r.subtitle}</p>

       </div>
   })
}
</div>
</div>

    <div className='sm:flex  justify-evenly border-2 p-16 gap-3 border-gray-200 sm:h-48 text-left  '>
        <img src={Secure} alt="sasi" className='w-14 h-14 sm:w-32 sm:h-32 relative -top-8 -right-20' />
        <div>
        <h1>UrbanCompany insurance Protectionn</h1>
        <p>Upto Rs. 10.000 insurance cover with every service requests. <a href="">Learn More</a> </p>
        </div>
    </div>
    
       </div>

      )
}

export default Home