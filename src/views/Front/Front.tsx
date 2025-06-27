import React from 'react'
import { motion } from 'framer-motion'

const Front = () => {
  return (
    <div className="flex items-center justify-between min-h-[100vh-20px] px-10 bg-cyan-0 py-6">
         <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-1/2 space-y-6"
      >
        <h1 className="text-5xl font-bold text-white">Welcome to Our Platform</h1>
        <p className="text-lg text-white">
          Discover amazing features, seamless experience, and intuitive design. 
          Let’s build something great together!
        </p>
        <button className="px-6 py-3 text-gray-800 font-semibold bg-gradient-to-l from-blue-200 to-cyan-200 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
        </motion.div>

        <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-1/2 flex justify-center"
      >
        <div className="w-96 h-96 rounded-xl shadow-xl overflow-hidden bg-white p-4 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/8204352/pexels-photo-8204352.jpeg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
    </div>
  )
}

export default Front
