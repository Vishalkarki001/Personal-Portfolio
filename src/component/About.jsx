import React from 'react'
import { NavLink } from 'react-router-dom';

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function About() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-17  pt-10 '>
    

    <h1 className='text-2xl  font-semibold font-sans underline max-[768px]: order-1 text-center'>About</h1>
    <p className='text-xl font-sans font-medium max-[768px]:text-center '>
      Hello,I'm Vishal , a passionate Web developer I strive to create
       impactful and visually stunning Software solutions that leave a
       lasting impression.
    </p>
    <div className='md:w-1/2 md:ml-40 md:mt-13 mt:8 order-2 float-right mt-4 '>
   
   <img  src="./pic.jpg" className=' float-end border-[2px] rounded-xl  md:h-[350px] md:w-[350px]  ' alt='image'/>
   
   </div>
    <br/>
    <h1 className='text-orange-700 font-sans font-bold text-2xl max-[768px]:text-center'>Education-</h1>
    <p className='text-xl max-[768px]:text-center'>
        Dev Bhoomi Uttarakhand University,Dehradun                                      2022-2025
        </p>
        <p className='text-xl max-[768px]:text-center'>
        Bachelor of Computer Application(BCA)
        

    </p>
    
    
    <br/>
    <h1 className='text-orange-700 font-sans font-bold text-2xl space-y-3 max-[768px]:text-center'>Skills-</h1>
    <ol className='text-xl max-[768px]:text-center'>
    <li>
      Html
    </li>
    <li>
      Css
    </li>
    <li>
      Tailwind Css
    </li>
    <li>
      Javascript
    </li>
    <li>
      React
      
    </li>
    <li>
      MongoDb
    </li>
    </ol>
    <br/>
      <h2 className='text-orange-700 font-sans font-bold text-2xl max-[768px]:text-center'>Connect</h2>
   
      <div className='flex text-2xl space-x-5 cursor-pointer max-[768px]:justify-center '>

<NavLink

to="https://www.facebook.com/"
target="_blank"
><FaFacebook /></NavLink>

<NavLink
to="https://www.linkedin.com/in/vishal-karki-3393b22b3/"
target='_blank'
><FaLinkedin /></NavLink>

<NavLink 
to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsettings%2F%3F__coig_login%3D1"
target='_blank'

>
<FaInstagramSquare />
</NavLink>

<NavLink
to="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
target='_blank'
><FaTwitter /></NavLink>
<NavLink 
to="https://github.com/Vishalkarki001"
target="_blank"
><FaGithub /></NavLink>
</div>


   </div>
   <br/>
   <hr/>

</>
  )
}

export default About
