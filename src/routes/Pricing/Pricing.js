import React from 'react'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PriceCard from '../../components/PriceCard/PriceCard'
import Title from '../../components/Title/Title'
import SectionSingle from '../../sections/SectionSingle/SectionSingle'

const Pricing = () => {
  const prices = [
    {
      key: 1,
      plan: "Individual",
      cost: 49,
      desc: "For individuals tracking a small brand",
      features: [
        "3 Keywords",
        "2k mentions / mo",
        "Update every 12h"
      ],
      isMostPopular: false
    },
    {
      key: 1,
      plan: "Individual",
      cost: 49,
      desc: "For individuals tracking a small brand",
      features: [
        "3 Keywords",
        "2k mentions / mo",
        "Update every 12h"
      ],
      isMostPopular: false
    },
    {
      key: 1,
      plan: "Individual",
      cost: 49,
      desc: "For individuals tracking a small brand",
      features: [
        "3 Keywords",
        "2k mentions / mo",
        "Update every 12h"
      ],
      isMostPopular: true
    },
    {
      key: 1,
      plan: "Individual",
      cost: 49,
      desc: "For individuals tracking a small brand",
      features: [
        "3 Keywords",
        "2k mentions / mo",
        "Update every 12h"
      ],
      isMostPopular: false
    },
  ]

  const details = [
    {
      key: 1,
      header: "Preparation",
      lists: [
        "Objective Client",
        "Objective Client",
        "Objective Client",
        "Objective Client",
        "Objective Client",
      ],
      days: "2-5 Days"
    },
    {
      key: 2,
      header: "Preparation",
      lists: [
        "Objective Client",
        "Objective Client",
        "Objective Client",
        "Objective Client",
        "Objective Client",
      ],
      days: "2-5 Days"
    },
    {
      key: 3,
      header: "Preparation",
      lists: [
        "Objective Client",
        "Objective Client",
        "Objective Client",
        "Objective Client",
        "Objective Client",
      ],
      days: "2-5 Days"
    },
  ]

  return (
    <>
      <Navbar />

      <section className='py-16 w-full'>
        <SectionSingle>
          <Title className={'text-center mb-20'} text={'Choose your plan'} />

          <div className='flex gap-8 justify-center'>
            {
              prices.map(price => (
                <PriceCard key={price.key} desc={price.desc} features={price.features} plan={price.plan} price={price.cost} isMostPopular={price.isMostPopular} />
              ))
            }
          </div>
          <figure className='absolute left-0 top-0 z-[-1]'>
            <img src='/img/Ellipse 7.png' alt='elips 7' />
          </figure>
        </SectionSingle>

        <SectionSingle className={'min-h-max'}>
          <Title className={'text-center mb-20'} text={'Details'} />

          <div className='grid grid-cols-3 gap-8'>
            {
              details.map(detail => (
                <div key={detail.key} className='p-10 border-2 border-solid border-gray-100 rounded-3xl bg-white-transparent'>
                  <Header text={detail.header} />
                  <Description className={'mb-12'}>
                    <ul className='flex flex-col items-center'>
                      {
                        detail.lists.map((list, idx) => (
                          <li key={idx}>
                            {list}
                          </li>
                        ))
                      }
                    </ul>
                  </Description>
                  <Description className='flex flex-col items-center'>
                    <p>
                      {detail.days}
                    </p>
                  </Description>
                </div>
              ))
            }
          </div>
          <figure className='absolute right-0 top-1/2 translate-y-[-50%] z-[-1]'>
            <img src='/img/Ellipse 9.png' alt='elips 9' />
          </figure>
        </SectionSingle>
      </section>
    </>
  )
}

export default Pricing