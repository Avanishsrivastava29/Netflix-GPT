import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm ,seTSignInForm]=useState(true);
  const toggleSignInForm =()=>{
    seTSignInForm(!isSignInForm);

  };

 
  return (
    <div >
        <div className='absolute'>
        <Header />


<img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo'/>
        </div>
        <form className='absolute w-3/12  p-12 my-36 mx-auto right-0 left-0 text-white bg-black rounded-lg bg-opacity-80'>
            <h1 className='  text-white text-4xl py-4'>{ isSignInForm ? "Sign In": "Sign Up"}</h1>
            {! isSignInForm &&(
            <input type="text" placeholder='Full name' className='my-2 w-full p-2 bg-gray-700' />)
            }
            
            <input type="text" placeholder='username' className='my-2 w-full p-2 bg-gray-700' />
           
            <input type="passward" placeholder='passward' className='my-2 w-full p-2 bg-gray-700' />
          
            <button className='bg-red-600 w-full mt-5 my-6 p-2 text-white rounded-lg  '>
            { isSignInForm ? "Sign In": "Sign Up"}
            </button>
            <p onClick={()=>toggleSignInForm()} className='cursor-pointer'>{isSignInForm ? "New to Netflix ? sign Up Now" :"Already registered ? Sign In Now"}</p>
        </form>
  
  </div>)

}

export default Login