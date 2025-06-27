import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaGithub, FaTwitter } from 'react-icons/fa';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-xl   p-8 bg-gradient-to-l from-blue-200 to-cyan-200 text-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="mt-2 text-lg text-center text-gray-600">
        Start your experience—sign up now
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm  text-left font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm  text-left font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className='relative'>
            <label htmlFor="password" className="block text-sm text-left font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="*******"
              className=" w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
              <div
         className="absolute top-10 right-5 cursor-pointer text-gray-700"
         onClick={() => setShowPassword(!showPassword)}
        >  {showPassword ? <FaEye /> : <FaEyeSlash /> }</div>
          </div>

          <div className='relative'>
            <label htmlFor="confirmPassword" className="block text-sm text-left font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="*******"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className='right-5 absolute top-10 cursor-pointer text-gray-700' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div> 

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-full bg-gray-700" />
          <span className="text-sm text-gray-800">OR</span>
          <span className="h-px w-full bg-gray-700" />
        </div>

        <div className=" flex justify-center text-center  mt-4 space-y-3 ">
          <button
            onClick={() => alert('Sign up with Google')}
            className=" px-4 py-2 mt-2 "
          >
            <FcGoogle className="text-xl w-12 h-9" />
            {/* <span className="text-sm font-medium text-gray-700">Continue with Google</span> */}
          </button>

          <button
            onClick={() => alert('Sign up with GitHub')}
            className=" px-4 py-2"
          >
            <FaGithub className="text-xl w-12 h-9" />
            {/* <span className="text-sm font-medium text-gray-700">Continue with GitHub</span> */}
          </button>
          <button
            onClick={() => alert('Sign up with twitter')}
            className=" px-4 py-2"
          >
            <FaTwitter className="text-xl text-blue-500 w-12 h-9" />
            {/* <span className="text-sm font-medium text-gray-700">Continue with GitHub</span> */}
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
