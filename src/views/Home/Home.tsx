import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Front } from '../Front'
import Cards from '../Cards/Cards'
import CardImage from '../CardImage/CardImage'

const Home: React.FC = ()  => {
  return (
     <div className='bg-gray-800   '>
      <Navbar/>
      <div className='container'  >
      <Front/>
      <Cards/>
      <CardImage/>
      <div className="pt-20 px-4">
        <Outlet /> 
      </div>
      </div>
     </div>
  )
}

export default Home
