import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-700 shadow-md py-4 px-4">
     <div className="flex  min-w-[1280px] mx-auto flex justify-around items-center items-center align-center">
     <div className="text-3xl flex items-center items-center gap-2 font-bold bg-gradient-to-l from-blue-200 to-cyan-200 text-transparent bg-clip-text hover:underline decoration-blue-300 decoration-2 cursor-pointer" >
      <img src="./logo1.png" alt="logo"  className='w-12 h-12 rounded-full ' />
        <Link to="/">Animation </Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg text-md  text-gray-800 font-semibold bg-gradient-to-l from-blue-200 to-cyan-200  hover:bg-blue-50"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded-lg text-md text-gray-800 font-semibold bg-gradient-to-l from-blue-200 to-cyan-200  hover:bg-blue-700"
        >
          Signup
        </Link>
      </div>
     </div>
    </nav>
  );
};

export default Navbar;
