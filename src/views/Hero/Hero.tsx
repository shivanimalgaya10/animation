import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme} = useTheme();

  return (
    <div className=" sm:flex items-center text-left justify-between  px-2 bg-cyan-0 py-6">
         <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren:0.2, ease: "easeInOut", }}
        viewport={{ once: false, amount: 0.2 }}
        className="sm:w-1/2 space-y-6 space-x-4"
      >
        <h1 className={`text-5xl  font-bold ${theme == "dark" ? 'text-blue-50' : 'text-gray-800'} `}>Welcome to Our Platform</h1>
        <p className={`text-lg   ${theme == "dark" ? 'text-blue-50' : 'text-gray-800'} `}>
          Discover amazing features, seamless experience, and intuitive design. 
          Let’s build something great together!
        </p>
        <button className="px-6 py-3  text-gray-100 font-semibold bg-buttonBackground rounded-full hover:bg-backgroundColor transition">
          Get Started
        </button>
        </motion.div>

        <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6,staggerChildren:0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="my-2 sm:w-1/2 flex justify-center "
      >
        <div className="w-[24rem] h-[24rem] md:w-[20rem] md:h-[20rem]  rounded-full shadow-xl overflow-hidden flex items-center justify-center">
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

export default Hero
