import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        // name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
         
          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
             
            })
            .catch((error) => {
             
              setErrorMessage(error.message);
            });

         
        })
        .catch((error) => {
        
        });
    } else {
      // Sign In Login
      signInWithEmailAndPassword(
        auth,
        // email.current.value,
        "sagar12@gmail.com",
        "Sagar@12345"
        // password.current.value
      )
        .then((userCredential) => {
        
    
          

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInform = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 p-12 text-white bg-opacity-85 rounded-sm"
      >
        <h2 className="py-4 text-3xl font-bold cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up Now"}
        </h2>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-slate-600 cursor-pointer"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-slate-600 cursor-pointer"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-slate-600 cursor-pointer"
        />

        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-800 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up Now"}
        </button>

        <p className="cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
