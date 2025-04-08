import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("Light");

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("Light");
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/Skills" },
    { name: "About", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <>
      <div className='bg-white dark:bg-zinc-900 shadow-md px-6 py-3 sticky top-0 z-50'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
          {/* Logo */}
          <div className='text-2xl font-bold text-gray-800 dark:text-white font-serif'>
            <h1>
              <span className='text-orange-500 text-4xl underline'>P</span>ort
              <span className='text-orange-500 text-2xl'>F</span>olio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6 text-lg'>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-orange-500 transition-colors ${
                    isActive ? "text-orange-500" : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={toggleMode}
              className='text-2xl text-gray-700 dark:text-white hover:text-orange-500'
              title="Toggle Theme"
            >
              <MdOutlineLightMode />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className='md:hidden flex items-center text-3xl text-gray-700 dark:text-white'>
            <button onClick={() => setOpen(!open)}>
              {open ? <IoMdClose /> : <IoIosMenu />}
            </button>
          </div>
        </div>
        

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full h-screen bg-zinc-900 text-white z-40 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className='flex flex-col items-center justify-center h-full gap-6 text-xl'>
            
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-orange-500"
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={toggleMode}
              className='text-3xl hover:text-orange-500'
            >
              <MdOutlineLightMode />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
