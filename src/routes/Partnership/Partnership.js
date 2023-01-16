import React from 'react'
import Button from '../../components/Button/Button'
import Description from '../../components/Description/Description'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import SectionSingle from '../../sections/SectionSingle/SectionSingle'

const Partnership = () => {
  return (
    <>
      <Navbar />

      <section className='w-full'>
        <SectionSingle className='flex flex-col justify-evenly py-0'>
            <Title className={'text-center mb-20'} text={'Partnership'} />

            <Description className={'mx-auto'}>
              <p>
                Simfoni Insight Partner Program
              </p>
            </Description>

            <h1 className='mx-auto text-8xl font-bold' style={
              {
                background: 'linear-gradient(92.83deg, #50F9DF -23.25%, #6E78FF 98.19%)',
                '-webkit-background-clip': "text",
                '-webkit-text-fill-color': "transparent",
                'background-clip': "text",
                'text-fill-color': "transparent",
              }
            }>
              Partner with Simfoni Insight
            </h1>

            <Description className={'mx-auto text-4xl'}>
              <p>
              Earn 20% recurring commission by spreading a word about Simfoni Insight
              </p>
            </Description>

            <Button label={'Awesome, Tell me More!'} className={'mx-auto'} />

            <figure className='absolute left-0 z-[-1]'>
              <img src='/img/Ellipse 7.png' alt='elips 7' />
            </figure>
            <figure className='absolute left-10 z-[-1]'>
              <img src='/img/half-spiral.png' alt='half spiral' />
            </figure>
            <figure className='absolute right-[10%] bottom-0 z-[-1]'>
              <img src='/img/tabung.png' alt='tabung' />
            </figure>
        </SectionSingle>
      </section>
    </>
  )
}

export default Partnership