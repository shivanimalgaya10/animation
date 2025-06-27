import React from 'react';

import { motion } from "framer-motion"
                   
const Card = ({title,description}) => {

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { 
          opacity: 1, y: 0, 
          transition: { duration: 0.5,
      
           } }
      };
  return (
  <motion.div
  className="card bg-lightBackground border border-gray-500/50 text-gray-200  text-left rounded-2xl shadow-lg cursor-pointer md:my-2"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.95 }}
  variants={cardVariants}    
   >
    
    <h3 className="p-4 pb-0 text-xl font-bold mb-2">{title}</h3>
    <div className="border-b border-gray-500/50"/>
    <p className="p-4 pt-2">{description}</p>
   </motion.div>
   
  )
}

export default Card
