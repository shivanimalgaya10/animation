import React from 'react'
import cardData from '../../data/cardData'
import { Card } from '../../components/Card'
import { motion } from 'framer-motion'

const containerVariants={
    hidden:{},
    show:{
        transition:{
          duration:0.2,
            staggerChildren:0.2
        }
    }
}
const Cards = () => {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className='grid grid-cols-1 px-2  md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
      cardData.map((card) => (
        <Card key={card.id} title={card.title} description={card.description}/>
      ))
    }
  </motion.div>
  )
}
export default Cards;