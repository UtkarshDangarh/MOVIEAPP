import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

function Login() {
  const [isSignInForm, SetIsSigninForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const message = validateData(email.current.value, password.current.value);
    SetErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        // Sign up
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              SetErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    SetIsSigninForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="Background Image"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 h-3/6 absolute  bg-black bg-opacity-70 rounded-md p-12 my-36 mx-auto right-0 left-0 "
      >
        <h1 className="font-semibold text-3xl text-white py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={displayName}
            placeholder="Full Name"
            className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 my-2 w-full text-white bg-transparent border rounded-md border-gray-600"
        />

        <p className="text-regal-red font-semibold px-2 py-2 rounded-md w-fit">
          {errorMessage}
        </p>

        <button
          onClick={handleSubmit}
          className="bg-regal-red px-4 py-2 text-white mt-4 w-full rounded-md"
        >
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
