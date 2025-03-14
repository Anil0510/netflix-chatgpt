import React, { useRef, useState } from 'react';
import Header from './Header';
import  { checkValidData } from "../utilis/validate"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utilis/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/UserSlice';
import { USER_AVATAR } from '../utilis/constant';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage,setErrorMessage]=useState(null)
    const navigate= useNavigate();
const dispatch=useDispatch();
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null)


const handleButtonClick=()=>{
    //validate the form data
const message=checkValidData( email.current.value,password.current.value,name.currentValue);
setErrorMessage(message)
if(message) return 
if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user; 
    updateProfile(user, {
        displayName: name.current.value,
         photoURL:  USER_AVATAR
      }).then(() => {
        // Profile updated!
const{uid,email,displayName,photoURL}=auth.currentUser;
dispatch(addUser({
    uid:uid,
    email:email,
    displayName:displayName,
    photoURL:photoURL,
}))
        // ...
        
         navigate("/browse")
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message)
      });

    //navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage( errorCode+"-"+errorMessage)
    // ..
  });

}
    else{

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage+"-"+errorCode)
  });

    }


}
//sign/ sign Up
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img 
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_medium.jpg' 
                    alt='netflix-backgroundimg' 
                />
            </div>
            <form onSubmit={(event)=>event.preventDefault()}   className='p-12  bg-black/80 absolute w-3/8  my-9 mx-auto right-0 left-0 text-white rounded-lg'>
                <h1 className='text-3xl py-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && (
                    <input 
                    ref={name}
                        type="text" 
                        placeholder='Full Name' 
                        className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                    />
                )}
                <input 
                ref={email}
                    type='email' 
                    placeholder='Email Address' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                />
                <input  
                ref={password}
                    type='password' 
                    placeholder='Password' 
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                />
                <p className='text-red-500 font-bold  text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;
