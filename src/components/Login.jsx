import React, { useState } from 'react';
import Header from './Header';




const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);


  const toggleSignInform = () =>{
    setSignInForm(!isSignInForm);
  }


  return (
    <div>
     <Header />
     <div className='absolute'>
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="bg-img" />
     </div>

     <form className='absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 p-12 text-white bg-opacity-85 rounded-sm'>
      <h2 className='py-4 text-3xl font-bold cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up Now"}</h2>

      {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-slate-600 cursor-pointer'/>)}
     
      <input type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-slate-600 cursor-pointer'/>
      <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-slate-600 cursor-pointer' />
      <button className='p-4 my-6 bg-red-800 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up Now"}</button>
      <p className='cursor-pointer'
      onClick={toggleSignInform}> {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already Registered Sign In Now"} </p>
     </form>
    </div>
  )
}

export default Login;
