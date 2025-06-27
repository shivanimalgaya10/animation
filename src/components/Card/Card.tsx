import React from 'react';

import { motion } from "motion/react"
                   
const Card = ({title,description}) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      };
  return (
  <motion.div
  className="card bg-gradient-to-l from-blue-200 to-cyan-200 text-gray-800 px-2 py-5 rounded-2xl shadow-lg cursor-pointer my-4"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  variants={cardVariants}    
   >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="">{description}</p>
   </motion.div>
   
  )
}

export default Card
