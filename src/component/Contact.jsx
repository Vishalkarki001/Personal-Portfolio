import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitter, FaGithub } from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    try {
      await axios.post("https://getform.io/f/wbrkddza", userinfo);
      toast.success("Your message is sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <h1 className='text-2xl font-semibold font-sans underline max-[768px]:text-center p-3 dark:text-white'>Contact</h1>
      
      {/* Map */}
      <div className='pt-2'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27752.589176814716!2d79.63264992389435!3d29.60154526745536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7328910d81f%3A0x9811d25dd87d8ed5!2sAlmora%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1718647245336!5m2!1sen!2sin"
          width="100%"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div className='flex flex-col justify-center items-center mt-4'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-slate-200 dark:bg-zinc-900 w-96 px-8 py-6 rounded-xl shadow-md dark:shadow-slate-800'
          >
            <h1 className='text-xl font-semibold dark:text-white'>Send Your Message</h1>

            {/* Name */}
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 dark:text-white'>Full Name</label>
              <input
                {...register("name", { required: true })}
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:shadow-outline'
                placeholder='Enter Your Name'
              />
              {errors.name && <span className='text-red-500 text-sm'>The field is required</span>}
            </div>

            {/* Email */}
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 dark:text-white'>Email Address</label>
              <input
                {...register("email", { required: true })}
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:shadow-outline'
                placeholder='Enter Your Email'
              />
              {errors.email && <span className='text-red-500 text-sm'>The field is required</span>}
            </div>

            {/* Message */}
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 dark:text-white'>Message</label>
              <textarea
                {...register("message", { required: true })}
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-zinc-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:shadow-outline'
                placeholder='Enter your query'
              />
              {errors.message && <span className='text-red-500 text-sm'>The field is required</span>}
            </div>

            <button
              type='submit'
              className='bg-black dark:bg-orange-500 rounded-lg text-white px-3 py-2 hover:bg-slate-700 dark:hover:bg-orange-600 transition duration-150'
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className='flex text-2xl space-x-5 cursor-pointer justify-center items-center underline gap-6 dark:text-white'>
        <NavLink to="https://www.facebook.com/" target="_blank"><FaFacebook /></NavLink>
        <NavLink to="https://www.linkedin.com/in/vishal-karki-3393b22b3/" target='_blank'><FaLinkedin /></NavLink>
        <NavLink to="https://www.instagram.com/_vishal_karki/?hl=en" target='_blank'><FaInstagramSquare /></NavLink>
        <NavLink to="https://x.com" target='_blank'><FaTwitter /></NavLink>
        <NavLink to="https://github.com/Vishalkarki001" target="_blank"><FaGithub /></NavLink>
      </div>
      <br />
    </>
  );
}
