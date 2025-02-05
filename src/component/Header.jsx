import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";

import { useState } from 'react';

import { Link,NavLink } from 'react-router-dom'



function Header() {
  const[open,setOpen]=useState(false);
  const[mode,setMode]=useState("Light");
  const Mode=()=>{
    if(mode=="Light"){
      setMode("Dark")
      
      document.body.style.backgroundColor="#BED7DC";
    }else{
      setMode("Light")
        document.body.style.backgroundColor="white";

      }
    }
  

  


  return (
    <>
    
    <div className=' text-start  px-10 flex md:flex  justify-between   items-center   text-black text-xl font-semibold '>
   
      <div className='logo flex pt-2'> 
            <h1 className='text-start gap-x-4 '><span className='text-orange-500  text-4xl font-serif underline'>P</span>ort<span className='text-orange-500 font-semibold text-2xl'>F</span>olio</h1>
        
        </div>
      <div className=" md:flex md:items-center   text-xl font-semibold ">
        <ol>
    <NavLink
    to="/"
    className={({isActive})=>` text-gray-500 px-3 py-1.5 font-sans max-[770px]:hidden
        style={{backgroundColor:"#000"}}
 
 ${isActive ? "text-orange-500" : "text-gray-500"}`}   >Home</NavLink>
    </ol>
    <ol>
    <NavLink to="/Skills"
    className={({isActive})=>`text-gray-700    px-3 py-1.5 font-sans max-[770px]:hidden ${isActive ? "text-orange-500" : "text-gray-500"}`}>Skills</NavLink>
   </ol>

    <ol>
        <NavLink to ="/About"
        className={({isActive})=>`text-gray-700    px-3 py-1.5 font-sans max-[770px]:hidden ${isActive ? "text-orange-500" : "text-gray-500"}`}>About</NavLink>
    </ol>
    <ol>
    <NavLink to="/Projects"
    className={({isActive})=>`text-gray-700    px-3 py-1.5 font-sans max-[770px]:hidden ${isActive ? "text-orange-500" : "text-gray-500"}`}>Projects</NavLink>
     </ol>
 
   <ol>
    <NavLink to="/Contact"
    className={({isActive})=>`text-gray-700    px-3 py-1.5 font-sans max-[770px]:hidden ${isActive ? "text-orange-500" : "text-gray-500"}`}>Contact</NavLink>
     </ol>
  
     <ol>

     <button onClick={Mode} className='flex  max-[770px]:hidden'><MdOutlineLightMode /></button>
     </ol>

  
    <div className={`flex items-center text-4xl font-bold sm:visible cursor-pointer min-[770px]:hidden  md:visible `}>
    <div className={` p-3 items-center flex  flex-col text-start duration-300 md:hidden w-full h-screen text-xl font-semibold fixed bg-gray-600  text-white ${open ? `left-[0]` : `left-[-100%]`} top-[55px] `}>
        <ol>
    <NavLink
    
    to="/"
    className="p-5"
   >Home</NavLink>
    </ol>
    <ol>
    <NavLink to="/Skills"
      className="p-5"
   >Skills</NavLink>
   </ol>

    <ol>
        <NavLink to ="/About"
          className="p-5"
      >About</NavLink>
    </ol>
    <ol>
    <NavLink to="/projects"
      className="p-5"
  >Projects</NavLink>
  

     </ol>
 
   <ol>
    <NavLink to="/Contact"
      className="p-5"
  >Contact</NavLink>
  

     </ol>
     </div>
      
      
    <button onClick={()=>setOpen(!open)}>{open ? <IoMdClose /> :<IoIosMenu />  }</button>


    
      </div>
      
  
   </div>
   

   </div>
   <hr/>
  
    </>
  )
}

export default Header