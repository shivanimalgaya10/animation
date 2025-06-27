import React from 'react';

import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen  items-center justify-center ">
      <div className="w-full max-w-lg bg-blue-50 bg-gradient-to-l from-blue-200 to-cyan-200 text-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-8">
          Welcome back! Please log in to your account.
        </p>
        <form className="mt-6">
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-left font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-gray-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-3 py-2 bg-gray-600 text-red-50 font-semibold text-lg hover:bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="mt-3 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
