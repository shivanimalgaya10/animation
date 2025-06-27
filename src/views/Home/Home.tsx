import React from 'react'
import { Front } from '../Front'
import Cards from '../Cards/Cards'
import CardImage from '../CardImage/CardImage'
import { Services } from '../Services'

const Home: React.FC = ()  => {
  return (
      <div className='container'  >
      <Front/>
      <Cards/>
      <Services/>
      <CardImage/>
      </div>
  )
}

export default Home
