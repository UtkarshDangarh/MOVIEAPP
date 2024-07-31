import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, SetIsSigninForm] = useState(true);
  const toggleSignInForm = () => {
    SetIsSigninForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="Background Image"
        />
      </div>
      <form className=" w-3/12 h-3/6 absolute  bg-black bg-opacity-70 rounded-md p-12 my-36 mx-auto right-0 left-0 ">
        <h1 className="font-semibold text-3xl text-white py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
        />

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Mobile No"
            className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
        />
        <button className="bg-regal-red px-4 py-2 text-white mt-4 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400  mt-3">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span
            onClick={toggleSignInForm}
            className="text-white cursor-pointer"
          >
            {isSignInForm ? "Sign Up now." : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
