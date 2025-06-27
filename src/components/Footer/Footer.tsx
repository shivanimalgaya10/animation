import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    const { theme } = useTheme();
  return (
   <footer className={`py-8 px-4 mt-10 transition-all duration-300 ${ theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-gray-300 text-gray-800'}`}>

<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
<div>
          <div className={`text-3xl flex items-center items-center gap-2 font-bold bg-gradient-to-l ${theme === 'dark' ? 'from-blue-200 to-cyan-200' : 'from-blue-500 to-cyan-500'} text-transparent bg-clip-text hover:underline decoration-blue-300 decoration-2 cursor-pointer`} >
               <img src="./logo1.png" alt="logo"  className='w-12 h-12 rounded-full ' />
                 <Link to="/">Animation </Link>
               </div>
          <p className="text-md mt-3"> 
            Empowering developers and designers  with <br/> modern tools and animations.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 underline underline-offset-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline hover:text-blue-500 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-blue-500 transition duration-300">About</Link></li>
            <li><Link to="/contact" className="hover:underline hover:text-blue-500 transition duration-300">Contact</Link></li>
            <li><Link to="/login" className="hover:underline hover:text-blue-500 transition duration-300">Login</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 underline underline-offset-4">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm mb-2">
            <FaEnvelope /> support@animationapp.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaPhoneAlt /> +91-9876543210
          </p>
        </div>
        <div className="border-t  mt-10 pt-5 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Animation. All rights reserved.
      </div>
        
        </div>

   </footer>
  )
}

export default Footer
