import React, { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme} = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={`shadow-md py-4 px-4 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
     <div className="flex  mx-auto flex justify-between px-4 items-center sm:px-8">
     <div className={`text-3xl flex items-center items-center gap-2 font-bold bg-gradient-to-l ${theme === 'dark' ? 'from-blue-200 to-cyan-200' : 'from-blue-500 to-cyan-500'} text-transparent bg-clip-text hover:underline decoration-blue-300 decoration-2 cursor-pointer`} >
      <img src="./logo1.png" alt="logo"  className='w-12 h-12 rounded-full ' />
        <Link to="/">Animation </Link>
      </div>
      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      <ul className={`hidden md:flex gap-10 text-lg font-semibold text-blue-50  cursor-pointer ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
        <li className='hover:scale-110 transition-all duration-200'>Home</li>
        <li className='hover:scale-110 transition-all duration-200'>About</li>
        <li className='hover:scale-110 transition-all duration-200'>Contact</li>
        <li className='hover:scale-110 transition-all duration-200'>Registration</li>
      </ul>
      <div className="space-x-4 hidden lg:flex">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full border border-gray-500 ${theme ==='dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}  transition ${theme ==='dark' ? 'text-white' : 'text-gray-800'}`}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <FiSun className={`text-xl`} /> : <FiMoon className="text-xl" />}
      </button>
        <Link
          to="/login"
          className={`px-4 py-2 rounded-lg text-md  text-gray-800 font-semibold bg-gradient-to-l ${theme === 'dark' ? 'from-blue-200 to-cyan-200' : 'from-blue-400 to-cyan-400'}  hover:bg-blue-50`}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={`px-4 py-2 rounded-lg text-md text-gray-800 font-semibold bg-gradient-to-l ${theme === 'dark' ? 'from-blue-200 to-cyan-200' : 'from-blue-400 to-cyan-400'}  hover:bg-blue-700`}
        >
          Signup
        </Link>
      </div>
     </div>
    </nav>
  );
};

export default Navbar;
