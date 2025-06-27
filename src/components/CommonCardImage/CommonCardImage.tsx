import React from 'react';
import { motion } from "motion/react"

const CommonCardImage = ({imgSrc , text,direction="left",delay=0}) => {

    const variants={
        hidden:{opacity:0,x: direction ="left"? -100 :100},
        visible:{
            opacity:1,
            x:0,
            transition:{duration:0.8,delay}
        }
    }

  return (
    <motion.div
    variants={variants}
      initial="hidden"
      animate="visible"
      className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
    >
    <img
    src={imgSrc}
    alt="Card"
    className="w-full h-full object-cover rounded-xl"
  />
   <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h3 className="text-black text-xl font-semibold">{text}</h3>
      </div>
  </motion.div>
  )
}

export default CommonCardImage