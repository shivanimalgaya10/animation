import React from 'react'
import { FaBroom, FaCar, FaSprayCan, FaWater } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import {motion} from 'framer-motion'

const services = [
    {
      id: 1,
      title: 'Exterior Wash',
      description: 'Thorough exterior cleaning including wheels, windows, and wax coating.',
      icon: <FaCar className="text-4xl text-cyan-400" />,
    },
    {
      id: 2,
      title: 'Interior Cleaning',
      description: 'Deep vacuuming, dashboard polishing, and seat shampooing.',
      icon: <FaBroom className="text-4xl text-green-400" />,
    },
    {
      id: 3,
      title: 'Underbody Wash',
      description: 'Pressure wash to remove dirt and salt from underneath your vehicle.',
      icon: <FaWater className="text-4xl text-blue-400" />,
    },
    {
      id: 4,
      title: 'Perfume & Shine',
      description: 'Interior fragrance and surface shine to refresh your car’s cabin.',
      icon: <FaSprayCan className="text-4xl text-pink-400" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        staggerChildren: 0.4,
      },
    }),
  };

const Services = () => {
    const { theme} = useTheme();


  return (
    <div className= {` ${theme=== 'dark' ? 'bg-gray-900/80' : 'bg-gray-300'} rounded-md my-2  px-6 py-12`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-4 text-center ${theme=== 'dark' ? 'text-cyan-200' : 'text-cyan-500'} `}>Our Services</h2>
        <p className={` ${theme=== 'dark' ? 'text-gray-300' : 'text-gray-800'}  text-center mb-12`}>
          Choose from a range of premium car wash and detailing services tailored to your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service,index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={index}
              viewport={{ once: false,amount:0.2 }}
              className={`p-6 rounded-2xl shadow-md hover:shadow-cyan-500/20 transition-all duration-300 ${theme=== 'dark' ? 'bg-gray-800' : 'bg-slate-400/80'}`}
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 text-cyan-200`}>{service.title}</h3>
              <p className={` text-sm ${theme=== 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services