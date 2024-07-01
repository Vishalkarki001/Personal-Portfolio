import React from 'react'
import {  NavLink } from 'react-router-dom';
import About from './About'
import Skills from './Skills';
import { FaFacebookF } from "react-icons/fa";
import Footer from './Footer';
import Contact from './Contact';

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ReactTyped} from "react-typed";
import Gototop from './Gototop';







export default function Home() {
      

    return (
        <>
        
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
   <div className='flex flex-col md:flex-row '>
        <div className='md:w-1/2  mt-24  space-y-2 order-2 md:order-1'> 
        <h1 className='text-2xl font-sans font-bold '>Vishal karki</h1>
        <div className='flex text-2xl md:text-4xl '>
        <h2 className=' font-sans  space-x-1 font-semibold '>Hello,I'm a </h2>
       {/* <span className=' font-sans font-bold text-orange-700 '> Developer</span>*/}
       <ReactTyped
          className=' font-sans font-bold text-orange-500 '
          strings={["Developer","Programmer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br/>
      <div className='flex flex-col max-[768px]:items-center space-x-1'>
        <div  className='space-y-3   ' >
            <h2 className='font-semibold text-xl max-[768px]:text-center'>Available on </h2>
            
            <div className='flex text-2xl space-x-5 cursor-pointer  '>

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
         




        </div>
        <br/>
        <div className=' space-y-3 flex max-[768px]:justify-center cursor-pointer'>
        <h3 className=' bg-orange-500 p-2 rounded-full font-sans text-md '><a href="VISHAL KARKI.docx" download> Download cv</a></h3>
        </div>
        </div>
        
          
            
     
        <div className='md:w-1/2 md:ml-40 md:mt-13 mt:8 order-1'>
   
        <img  src="pic.jpg" className='rounded-full md:h-[430px] md:w-[430px] ' alt='image'/>
        
        </div>
        </div>
        
      
        </div>
        
        <hr/>
        <div>
        <Skills/>
        <About/>
      
        <Contact/>
        <Gototop/>
        </div>
        
 

     
     
 
        
        </>
    );
}