import React from 'react';
import { motion } from "motion/react"

const CommonCardImage = ({imgSrc , text,direction="left",delay=0}) => {

    const variants={
        hidden:{opacity:0,x: direction === "left" ? -50 :50},
        visible:{
            opacity:1,
            x:0,
            transition:{duration:0.6,delay,staggerChildren:0.2}
        }
    }

  return (
    <motion.div
    variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
    >
    <img
    src={imgSrc}
    alt="Card"
    className="w-full h-full object-cover rounded-xl"
  />
   <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h3 className="text-gray-800 text-xl font-semibold">{text}</h3>
      </div>
  </motion.div>
  )
}

export default CommonCardImage