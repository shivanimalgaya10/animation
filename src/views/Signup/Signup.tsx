import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-gray-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Sign up to get started
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-full bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <span className="h-px w-full bg-gray-300" />
        </div>

        <div className="mt-4 space-y-3">
          <button
            onClick={() => alert('Sign up with Google')}
            className="flex items-center justify-center w-full gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>

          <button
            onClick={() => alert('Sign up with GitHub')}
            className="flex items-center justify-center w-full gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <FaGithub className="text-xl text-black" />
            <span className="text-sm font-medium text-gray-700">Continue with GitHub</span>
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
