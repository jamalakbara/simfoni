import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='py-16'>
        <Hero />

      </section>
    </>
  )
}

export default Home