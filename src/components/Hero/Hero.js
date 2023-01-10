import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'

const Hero = () => {
  return (
    <div className='h-screen flex items-center px-12 gap-40'>
      <div className='flex-1'>
        <Title text={'Get Insight, Sees All, Knows All.'} />

        <Button label={'Book Demo Now'} />
      </div>
      <div className='flex-1'>
        <img src='/img/hero.png' />
      </div>
    </div>
  )
}

export default Hero