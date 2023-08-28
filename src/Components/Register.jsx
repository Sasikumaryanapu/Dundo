import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { useRef } from 'react';

const Register = ({register_off}) => {

    var service={}

    // const [register,setRegister] =useState(false)
   
    const containerRef = useRef(null);

    useEffect(() => {
      // Function to handle outside clicks
      function handleOutsideClick(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          // Clicked outside the container, perform your action here
        
          register_off(false)

          console.log(event , "event")
          console.log(containerRef.current.contains(event.target))
      }
      }
  
      // Attach the event listener
      document.addEventListener('mousedown', handleOutsideClick);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []); // Empty dependency array to run this effect once
  
   
//     const addService=()=>{

     
//       fetch('http://localhost:5000/addService',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify(user)
        
//     })
//   .then(response => response.json())
//   .then(response => {console.log(response)})

//   setRegister(false)

    // }

//     const Login=()=>{
//       fetch('http://localhost:5000/signin',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify(user)
//     })
//   .then(response => response.json())
//   .then(response =>{
    
//       if(response.msg == "fail")
//       {
//         console.log(response)
//       }
//       else{
//         console.log(response)
//       }
//   })

//     }

  return (
     
     
     
        // login ?
        <div className=' h-full w-full border-2 font-semibold border-gray-800   fixed bg-black  opacity-80'>

    <div  ref={containerRef} className=' w-[90vw] h-[80vh] grid content-evenly justify-center  m-4  sm:w-[40vw] sm:h-[80vh] text-black  relative sm:top-16 sm:left-96 top-12 border-2 border-grey-300 rounded-md shadow-lg   bg-white'>
    <Formik
       initialValues={{ email: '', password: '',username:'',phone:'',service:'',title:'',ratings:'',price:'',description:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
          errors.password = 'Required';
        }
        if (!values.username) {
            errors.username = 'Required';
          }
        if (!values.phone) {
            errors.phone = 'Required';
          }
        if (!values.service) {
            errors.service = 'Required';
          }
        if (!values.title) {
            errors.title = 'Required';
          }
        if (!values.ratings) {
            errors.ratings = 'Required';
          }
        if (!values.price) {
            errors.price = 'Required';
          }
        if (!values.description) {
            errors.description = 'Required';
          }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        fetch('http://localhost:5000/addservice',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(values)
        
    })
  .then(response => response.json())
  .then(response => {
    console.log(response)
   
   })
  setSubmitting(false)
  register_off(false)

       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <input type="mail" name='email' placeholder='Email'  onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
          <p className='text-red-600'> {errors.email && touched.email && errors.email}</p>
           <input type="password"
             name="password" placeholder='Password' onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
           <p className='text-red-600'>{errors.password && touched.password && errors.password}</p>
           {/* adding */}
           <input type="text" name='username' placeholder='Username'  onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
          <p className='text-red-600'> {errors.username && touched.username && errors.username}</p>

          <input type="tel"
             name="phone" placeholder='Phone No' onChange={handleChange}
             onBlur={handleBlur}
             value={values.phone}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
           <p className='text-red-600'>{errors.phone && touched.phone && errors.phone}</p>

           {/* <input type="text"
             name="service" placeholder='Service Name' onChange={handleChange}
             onBlur={handleBlur}
             value={values.service}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/> */}
             <select name="service" id="service"  placeholder='Service Name' onChange={handleChange}
             onBlur={handleBlur}
             value={values.service} 
              className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black'>
                <option value="">Select a Service</option>
                <option value="appliances">Apliances</option>
                <option value="spa">Spa</option>
                <option value="cleaning">Cleaning</option>
                <option value="pest">pest</option>
                <option value="disinfection">Disinfection</option>
                <option value="massage men">Massage For Men</option>
                <option value="painting">Painting</option>
                <option value="repairs">Repairs</option>
              </select>
           <p className='text-red-600'>{errors.service && touched.service && errors.service}</p>

           <input type="text" name='title' placeholder='Title'  onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
          <p className='text-red-600'> {errors.title && touched.title && errors.title}</p>

          
          <input type="text"
             name="ratings" placeholder='Rating' onChange={handleChange}
             onBlur={handleBlur}
             value={values.ratings}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
           <p className='text-red-600'>{errors.ratings && touched.ratings && errors.ratings}</p>

           <input type="text"
             name="price" placeholder='Price' onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
           <p className='text-red-600'>{errors.price && touched.price && errors.price}</p>

           <input type="text" name='description' placeholder='Description'  onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
          <p className='text-red-600'> {errors.description && touched.description && errors.description}</p>
          
           <button type="submit" disabled={isSubmitting} className='w-[20vw] h-[5vh] sm:w-[8vw] border-2 mt-8  justify-self-center  rounded-lg border-black outline-none placeholder:text-black'>
             Register
           </button>
         </form>
       )}
     </Formik>
        {/* <p onClick={()=>setLogin(false)}>Already have an account? Login</p> */}
      </div>
    </div> 
//     :
//     <div className=' h-full w-full border-2 font-semibold border-gray-800   fixed bg-black  opacity-80'>

//     <div className=' w-[90vw] h-[50vh] grid content-evenly justify-center  m-4  sm:w-[40vw] sm:h-[60vh] text-black  relative sm:top-32 sm:left-96 top-32 border-2 border-grey-300 rounded-md shadow-lg   bg-white'>
//     <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          if (!values.password) {
//           errors.password = 'Required';
//         }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
        
//         fetch('http://localhost:5000/signin',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify(values)
        
//     })
//   .then(response => response.json())
//   .then(response => {console.log(response)})
//   setSubmitting(false)
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//             <input type="mail" name='email' placeholder='email'  onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
//           <p className='text-red-600'> {errors.email && touched.email && errors.email}</p>
//            <input type="password"
//              name="password" placeholder='password' onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
//            <p className='text-red-600'>{errors.password && touched.password && errors.password}</p>
//            <button type="submit" disabled={isSubmitting} className='w-[20vw] h-[5vh] sm:w-[6vw] border-2 mt-8 justify-self-center  rounded-lg border-black outline-none placeholder:text-black'>
//              Login
//            </button>
//          </form>
//        )}
//      </Formik>
//         <p onClick={()=>setLogin(true)}>Don't have an account? SignIn</p>
//       </div>
//     </div> 
    
    
  )
       }
export default Register