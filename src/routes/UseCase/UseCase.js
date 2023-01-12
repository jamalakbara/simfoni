import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SectionSingle from '../../sections/SectionSingle/SectionSingle'
import Block from '../../components/BlockItem/BlockItem'
import SectionSplit from '../../sections/SectionSplit/SectionSplit'
import Title from '../../components/Title/Title'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'

const UseCase = () => {
  const [usecases, setUsecases] = useState([
    {
      key: 1,
      image: "/img/politics.png",
      head: "Politics Surveillance",
      desc: "Description here",
      content: 
      <>
        <SectionSplit className={'p-0'}>
          <div className='flex-1'>
            <figure>
              <img className='mx-auto' src='/img/politics.png' alt='content-poltitics' />
            </figure>
          </div>
          <div className='flex-1'>
            <Header className={'text-4xl text-indigo-500 text-start'} text={'Our Objective'} />
            <Description className={'text-4xl'}>
              <p>
              Providing a highly comprehensive system to surveil companies and populations virtually in anticipating the rise of modern forms of data surveillance
              </p>
            </Description>
          </div>
        </SectionSplit>

        <SectionSplit>
          <div className='flex-1 flex flex-col items-center justify-center'>
            <Title className={'text-8xl w-1/2 text-center'} text={'Current Problem'} />
            <figure className='my-10'>
              <img src='/img/problem-politics.png' alt='problem-politic' />
            </figure>
          </div>
          <div className='flex-1'>
            <SectionSplit className={'gap-7 min-h-fit p-0 mb-64 last:mb-0'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  The high cost of political campaigns that has hampered Indonesia’s democracy
                  </p>
                </Description>
              </div>
            </SectionSplit>
            <SectionSplit className={'gap-7 min-h-fit p-0 mb-64 last:mb-0'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  The high cost of political campaigns that has hampered Indonesia’s democracy
                  </p>
                </Description>
              </div>
            </SectionSplit>
            <SectionSplit className={'gap-7 min-h-fit p-0 mb-64 last:mb-0'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  The high cost of political campaigns that has hampered Indonesia’s democracy
                  </p>
                </Description>
              </div>
            </SectionSplit>
          </div>
        </SectionSplit>

        <SectionSingle className={'min-h-fit'}>
          <div className='border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100 p-8'>
            <Description>
              <p>
              Simfoni Insight helps persons, companies, and government agencies in Indonesia achieve more within tight budgets to target voters, create ads, and predict election outcomes.
              </p>
            </Description>
          </div>
        </SectionSingle>

        <SectionSplit className={'p-0'}>
          <div className='flex-1'>
            <Title className={'text-8xl w-1/2 mx-auto'} text={'Why Should Now?'} />
          </div>
          <div className='flex-1'>
            <Description>
              <ul>
                <li className='mb-5 last:mb-0 list-disc'>
                The increasing demand of political surveillance services among candidates participating in Indonesia’s legislatives, presidential, and local elections, especially in 2024. 
                </li>
                <li className='mb-5 last:mb-0 list-disc'>
                Political surveillance could be defined as the emergence of AI surveillance technology that can offer a lot of potential efficiency, cost savings for politics and government, and to obtain certain political objectives as well. 
                </li>
              </ul>
            </Description>
          </div>
        </SectionSplit>
      </>,
      isActive: true,
    },
    {
      key: 2,
      image: "/img/brand.png",
      head: "Brand  & Market Intelligence",
      desc: "Description here",
      content: 
      <>
        <SectionSplit>
          <div className='flex-1'>
            <figure>
              <img src='/img/brand.png' alt='content-brand' />
            </figure>
          </div>
          <div className='flex-1'>
            <Header text={'Find your brand mentions'} />
            <Description>
              <p>
              88% of people look for opinions online before making a purchase. Find your brand mentions and make sure your social media analytics presence supports your brand and marketing.
              </p>
            </Description>
          </div>
        </SectionSplit>

        <SectionSplit>
          <div className='flex-1'>
            <Title text={'Our Solution'} />
          </div>
          <div className='flex-1 flex flex-col gap-12'>
            <SectionSplit className={'gap-7 min-h-fit border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  Market Research
                  </p>
                </Description>
              </div>
            </SectionSplit>
            <SectionSplit className={'gap-7 min-h-fit border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  Market Research
                  </p>
                </Description>
              </div>
            </SectionSplit>
            <SectionSplit className={'gap-7 min-h-fit border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  Market Research
                  </p>
                </Description>
              </div>
            </SectionSplit>
            <SectionSplit className={'gap-7 min-h-fit border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100'}>
              <div className='flex-initial'>
                <figure>
                  <img src='/img/img1problem.png' alt='img1' />
                </figure>
              </div>
              <div className='flex-1'>
                <Description>
                  <p>
                  Market Research
                  </p>
                </Description>
              </div>
            </SectionSplit>
          </div>
        </SectionSplit>

        <SectionSingle className={'min-h-fit border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100'}>
          <Description>
            <p>
            Simfoni Insight helps persons, companies, and government agencies in Indonesia achieve more within tight budgets to target voters, create ads, and predict election outcomes.
            </p>
          </Description>
        </SectionSingle>

        <SectionSingle>
          <Header text={'We Make Insights Actionable by Making Data Relevang'} />
          <figure>
            <img src='/img/brand-cont.png' alt='brand-cont.png' />
          </figure>
        </SectionSingle>
      </>,
      isActive: false,
    },
    {
      key: 3,
      image: "/img/corporate.png",
      head: "Corporate Communication",
      desc: "Description here",
      content: "Providing a highly comprehensive system to surveil companies and populations virtually in anticipating the rise of modern forms of data surveillance",
      isActive: false,
    },
    {
      key: 4,
      image: "/img/government.png",
      head: "Government Public Relation",
      desc: "Description here",
      content: "Providing a highly comprehensive system to surveil companies and populations virtually in anticipating the rise of modern forms of data surveillance",
      isActive: false,
    },
  ])

  const handleClick = (key) => {
    setUsecases(usecases.map(usecase => {
      if (key === usecase.key){
        return {...usecase, isActive: true}
      }
      return {...usecase, isActive: false}
    }))
  }

  return (
    <>
      <Navbar />

      <section className='py-16 w-full'>
        <Title className={'text-center'} text={'Use Cases'} />

        <SectionSingle>
          <div className='grid grid-cols-4 gap-24'>
            {
              usecases.map(usecase => (
                <div key={usecase.key} className='cursor-pointer' onClick={() => handleClick(usecase.key)}>
                  <Block src={usecase.image} header={usecase.head} desc={usecase.desc} className={!usecase.isActive ? 'opacity-50 border-4 border-solid border-transparent h-auto': 'border-4 border-solid border-indigo-500 h-auto'} />
                </div>
              ))
            }
          </div>
          <div>
            {
              usecases.filter(usecase => usecase.isActive).map(usecase => (
                usecase.content
              ))
            }
          </div>
        </SectionSingle>
      </section>
    </>
  )
}

export default UseCase