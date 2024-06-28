import React from 'react'
import { toast} from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
       const {
        register,
        handleSubmit,
       
        formState:{errors},
       }=useForm();

       const onSubmit=async (data)=>{
        const userinfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
           await axios.post("https://getform.io/f/wbrkddza",userinfo)
           toast.success("Your message is sent")
        }catch (error){
            console.log(error)
            toast.error("something went wrong")
       }
    }
    
    return (
        <>
      <h1 className='text-2xl  font-semibold font-sans underline max-[768px]:text-center p-3'>Contact</h1>
        <div className=' pt-2  '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27752.589176814716!2d79.63264992389435!3d29.60154526745536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7328910d81f%3A0x9811d25dd87d8ed5!2sAlmora%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1718647245336!5m2!1sen!2sin"
         width="100%" 
         height="350" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
         </div>
         <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
           
            <div className='flex flex-col justify-center items-center mt-4 '>
                <form 
                onSubmit={handleSubmit(onSubmit)}
                //action="https://getform.io/f/wbrkddza"
               // method='POST' 
                className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold '>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Full Name</label>
                        <input
                        {...register("name",{required:true})}
                         className='shadow rounded-lg appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id="name" 
                         name='name'
                         type="text" 
                     
                         placeholder='Enter Your Name'/>
                         {errors.name && <span>The field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input
                        {...register("email",{required:true})}
                         className='shadow rounded-lg appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id="name" 
                         name="email"
                         type="text"
                        
                         placeholder='Enter Your Usernname'/>
                             {errors.email && <span>The field is required</span>}
                         </div>

                         <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message</label>
                        <textarea 
                        {...register("message",{required:true})}
                        className='shadow rounded-lg appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                         id="name" 
                         name="message"
                         type="text" 
                    
                         placeholder='Enter the Query'/>
                             {errors.message && <span>The field is required</span>}
                         </div>
                         <button 
                         type='submit'
                         
                          className=' bg-black rounded-lg text-white px-3 py-2 hover:bg-slate-700 duration-100 '>Send</button>
                </form>
                
            </div>
            

         </div>
     
            
            <div className='flex text-2xl space-x-5 cursor-pointer justify-center items-center underline gap-6'>

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
       
        </>
    );
}