import React from 'react'
import SectionSplit from '../../sections/SectionSplit/SectionSplit'
import Description from '../Description/Description'
import Header from '../Header/Header'

const UseCaseMain = ({header, desc, image, children}) => {
  return (
    <SectionSplit className={'p-0'}>
      <div className='flex-1'>
        <figure>
          <img className='mx-auto' src={image} alt={image} />
        </figure>
      </div>
      <div className='flex-1'>
        <Header className={'text-4xl text-indigo-500 text-start'} text={header} />
        <Description className={'text-4xl'}>
          <p>
            {desc}
          </p>
        </Description>
        {children}
      </div>

      <figure className='absolute right-0 bottom-10  z-[-1]'>
        <img src='/img/tabung.png' alt='tabung' />
      </figure>
      <figure className='absolute left-1/4 bottom-20 z-[-1] w-72 h-72'>
        <img src='/img/Ellipse 10.png' alt='elips 10' />
      </figure>
    </SectionSplit>
  )
}

export default UseCaseMain