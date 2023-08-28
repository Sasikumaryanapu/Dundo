import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { useRef } from 'react';

const Login = ({login_off}) => {



  var userDetails={}
    const [login,setLogin] =useState(false)
    const [user,setUser]=useState({})
   
    const containerRef = useRef(null);

    useEffect(() => {
      // Function to handle outside clicks
      function handleOutsideClick(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          // Clicked outside the container, perform your action here
          login_off(false)
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
  

    const signup=()=>{

      if(user.name=" " ){
        alert("sorry")
      }
      fetch('http://localhost:5000/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
        
    })
  .then(response => response.json())
  .then(response => {console.log(response)})

  setLogin(false)

    }

    const Login=()=>{
      fetch('http://localhost:5000/signin',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
    })
  .then(response => response.json())
  .then(response =>{
    
      if(response.msg == "fail")
      {
        console.log(response)
      }
      else{
        console.log(response)
      }
  })


    }

  return (
     
     <div className=' h-full w-full border-2 font-semibold border-gray-800 z-10   fixed bg-black  opacity-90'>
     
    {
        login ?

    <div  ref={containerRef}  className=' w-[90vw] h-[50vh] grid content-evenly justify-center z-20  m-4  sm:w-[40vw] sm:h-[60vh] text-black  relative sm:top-32 sm:left-96 top-32 border-2 border-grey-300 rounded-md shadow-lg   bg-white'>
    <Formik
       initialValues={{ email: '', password: '' }}  
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
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        
        localStorage.email=values.email
        fetch('http://localhost:5000/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(values)
        
    })
  .then(response => response.json())
  .then(response => {
    if(response) return login_off(false)
    console.log(response)})
  .catch(error => {
    console.log(error)
  })
  setSubmitting(false)
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
            <input type="mail" name='email' placeholder='email'  onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
          <p className='text-red-600'> {errors.email && touched.email && errors.email}</p>
           <input type="password"
             name="password" placeholder='password' onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
           <p className='text-red-600'>{errors.password && touched.password && errors.password}</p>
           <button type="submit" disabled={isSubmitting} className='w-[20vw] h-[5vh] sm:w-[6vw] border-2 mt-8 justify-self-center  rounded-lg border-black outline-none placeholder:text-black'>
             SignIn
           </button>
         </form>
       )}
     </Formik>
        <p onClick={()=>setLogin(false)}>Already have an account? Login</p>
      </div>
    :

    <div  ref={containerRef} className=' w-[90vw] h-[50vh] grid content-evenly justify-center  m-4 z-20 sm:w-[40vw] sm:h-[60vh] text-black  relative sm:top-32 sm:left-96 top-32 border-2 border-grey-300 rounded-md shadow-lg   bg-white'>
    <Formik
       initialValues={{ email: '', password: '' }}
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
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        localStorage.email=values.email
        fetch('http://localhost:5000/signin',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(values)
        
    })
  .then(response => response.json())
  .then(response => {

    console.log(response.msg)
    if(response.msg=="Success") return login_off(false)

  
  })
  .catch(error => {
    console.log(error)
  })
  setSubmitting(false)
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
            <input type="mail" name='email' placeholder='email'  onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' />
          <p className='text-red-600'> {errors.email && touched.email && errors.email}</p>
           <input type="password"
             name="password" placeholder='password' onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}  className='w-[70vw] h-[7vh] sm:w-[20vw] border-b-2 border-black outline-none placeholder:text-black' /><br/>
           <p className='text-red-600'>{errors.password && touched.password && errors.password}</p>
           <button type="submit" disabled={isSubmitting} className='w-[20vw] h-[5vh] sm:w-[6vw] border-2 mt-8 justify-self-center  rounded-lg border-black outline-none placeholder:text-black'>
             Login
           </button>
         </form>
       )}
     </Formik>
        <p onClick={()=>setLogin(true)}>Don't have an account? SignIn</p>
      </div>
    
    }
    
    </div>
  )
}

export default Login