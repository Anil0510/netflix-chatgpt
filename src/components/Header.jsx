import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utilis/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import { addUser,removeUser } from '../utilis/UserSlice';
import { netflix_LOGO, SUPPORTED_LANGUAGES } from '../utilis/constant';
import { toggleGptSearchView } from '../utilis/gptSlice';
import { changeLanguage } from '../utilis/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut=()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
   useEffect(()=>{
      const unsubcribe=  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const{uid ,email,displayName,photoURL}  = user;
            // ...
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              })
            )
  
           navigate("/browse");
  
          } else {
            // User is signed out
            // ...
            dispatch(removeUser())
            navigate("/")
          }
        });
        ///unsubcsribe when component is unmount
  return ()=>unsubcribe();
      },[])

      const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
      }
      const handleLanguageChange =(event)=>{
        dispatch(changeLanguage(event.target.value))

      }
  return (
    <div className='absolute   w-screen md:flex-row   px-8 py-2 bg-gradient-to-b from-black  z-10  flex  justify-between' >
<img  className='w-44 max-auto md:mx-0' 
src={netflix_LOGO}
 alt="netflix-logo"/>
{ user &&(
  <div className='flex p-2 justify-between'>

    {showGptSearch &&(
    <select className='pl-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
     {SUPPORTED_LANGUAGES.map((lang)=>(
       <option  key={lang.identifier}value={lang.identifier}>{lang.name}</option>))}
     
    </select>)}


<button className='py-2 mx-2 my-5 bg-purple-900 text-white rounded-lg' 
onClick={handleGptSearchClick}>
  {showGptSearch ?"Homepage":"Gpt Search"}</button>

  <img  className='w-14 h-14 p-4 mt-4'
  alt='userIcon'
     src='https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e'/>
<button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
</div>
)}

    </div>
  )
}

export default Header