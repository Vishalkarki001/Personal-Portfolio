import { NavLink } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Project from "./Projects";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Gototop from './Gototop';

export default function Home() {
  return (
    <>
      <div className='bg-white text-black dark:bg-zinc-900 dark:text-white min-h-screen'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-20'>
          <div className='flex flex-col md:flex-row'>
            {/* Left Side */}
            <div className='md:w-1/2 mt-24 space-y-2 order-2 md:order-1'>
              <h1 className='text-2xl font-sans font-bold max-[768px]:text-center'>Vishal Karki</h1>
              <div className='flex text-2xl md:text-4xl'>
                <h2 className='font-sans font-semibold'>Hello, Im</h2>
                <ReactTyped
                  className='font-sans font-bold text-orange-500 ml-2'
                  strings={["Developer", "Programmer"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop={true}
                />
              </div>

              <br />
              <div className='flex flex-col max-[768px]:items-center'>
                <div className='space-y-3'>
                  <h2 className='font-semibold text-xl max-[768px]:text-center'>Available on</h2>
                  <div className='flex text-2xl space-x-5 cursor-pointer'>
                    <NavLink to="https://www.facebook.com/" target="_blank"><FaFacebook /></NavLink>
                    <NavLink to="https://www.linkedin.com/in/vishal-karki-3393b22b3/" target='_blank'><FaLinkedin /></NavLink>
                    <NavLink to="https://www.instagram.com/_vishal_karki/" target='_blank'><FaInstagramSquare /></NavLink>
                    <NavLink to="https://x.com/i/flow/login" target='_blank'><FaTwitter /></NavLink>
                    <NavLink to="https://github.com/Vishalkarki001" target="_blank"><FaGithub /></NavLink>
                  </div>
                </div>
              </div>

              <br />
              <div className='space-y-3 flex max-[768px]:justify-center cursor-pointer'>
                <h3 className='bg-orange-500 p-2 rounded-full font-sans text-md px-4'>
                  <a href="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/Vishal_Karki_Resume.docx?raw=true" download>
                    Download CV
                  </a>
                </h3>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className='md:w-1/3 md:ml-40 mt-8 md:mt-13 order-1'>
              <img src="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/pic.jpg?raw=true" className='rounded-full' alt='profile' />
            </div>
          </div>
        </div>

        <hr className="border-gray-400 dark:border-gray-600" />
        <hr className="border-gray-400 dark:border-gray-600" />

        {/* Sub Components */}
        <About />
        <Project />
        <Skills />
        <Contact/>

        <div>
          <Gototop />
        </div>
      </div>
    </>
  );
}
