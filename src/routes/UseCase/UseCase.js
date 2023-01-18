import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SectionSingle from '../../sections/SectionSingle/SectionSingle'
import Block from '../../components/BlockItem/BlockItem'
import SectionSplit from '../../sections/SectionSplit/SectionSplit'
import Title from '../../components/Title/Title'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'
import Notification from '../../components/Notification/Notification'
import UseCaseMain from '../../components/UseCaseMain/UseCaseMain'
import Blocks from '../../components/Blocks/Blocks'

const UseCase = () => {
  const [usecases, setUsecases] = useState([
    {
      key: 1,
      image: "/img/politics.png",
      head: "Politics Surveillance",
      desc: "Description here",
      content: () => {
        const problems = [
          {
            key: 1,
            icon: "/img/img1problem.png",
            desc: "The high cost of political campaigns that has hampered Indonesia’s democracy"
          },
          {
            key: 2,
            icon: "/img/img2problem.png",
            desc: "The spread of fake news and disinformation that lead to distrust in the media and undermine the democracy process in Indonesia "
          },
          {
            key: 3,
            icon: "/img/img3problem.png",
            desc: "Low public support for government interventions due to inefficiency in policy making in Indonesia"
          },
        ]
        
        return(
          <>
            <UseCaseMain header={'Our Objective'} desc={'Providing a highly comprehensive system to surveil companies and populations virtually in anticipating the rise of modern forms of data surveillance'} image={'img/politics.png'} />

            <SectionSplit className={'bg-no-repeat bg-right'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <div className='flex-1 flex flex-col items-center justify-center'>
                <Title className={'text-8xl w-1/2 text-center'} text={'Current Problem'} />
                <figure className='my-10'>
                  <img src='/img/problem-politics.png' alt='problem-politic' />
                </figure>
              </div>
              <div className='flex-1'>
                {
                  problems.map(problem => (
                    <div key={problem.key} className={'gap-7 mb-20 last:mb-0 relative flex p-12 items-center w-full'}>
                      <div className='flex-initial'>
                        <figure>
                          <img src={problem.icon} alt={problem.icon} />
                        </figure>
                      </div>
                      <div className='flex-1'>
                        <Description>
                          <p>
                            {problem.desc}
                          </p>
                        </Description>
                      </div>
                    </div>
                  ))
                }
              </div>

              <figure className='absolute left-20 top-1/2 z-[-1]'>
                <img src='/img/half-spiral.png' alt='half spiral' />
              </figure>
            </SectionSplit>

            <Notification text={'Simfoni Insight helps persons, companies, and government agencies in Indonesia achieve more within tight budgets to target voters, create ads, and predict election outcomes.'} />

            <SectionSplit className={'p-0 bg-contain bg-left bg-no-repeat'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
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
          </>
        )
      },
      isActive: true,
    },
    {
      key: 2,
      image: "/img/brand.png",
      head: "Brand  & Market Intelligence",
      desc: "Description here",
      content: () => {
        const solutions = [
          {
            key: 1,
            image: "/img/market.png",
            text: "Market Research"
          },
          {
            key: 2,
            image: "/img/benchmark.png",
            text: "Benchmarking"
          },
          {
            key: 3,
            image: "/img/health.png",
            text: "Brand Health"
          },
          {
            key: 4,
            image: "/img/competitor.png",
            text: "Competitor Analysis"
          },
        ]

        return(
          <>
            <UseCaseMain header={'Find your brand mentions'} desc={'88% of people look for opinions online before making a purchase. Find your brand mentions and make sure your social media analytics presence supports your brand and marketing.'} image={'/img/brand.png'} />

            <SectionSplit className={'bg-no-repeat bg-right'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <div className='flex-1 flex flex-col items-center justify-center'>
                <Title className={'text-8xl w-1/2'} text={'Our Solution'} />
              </div>
              <div className='flex-1 flex flex-col gap-12'>
                {
                  solutions.map(solution => (
                    <Notification key={solution.key} image={solution.image} text={solution.text} className={'my-0'} />
                  ))
                }
              </div>
              <figure className='absolute left-20 top-1/2 z-[-1]'>
                <img src='/img/half-spiral.png' alt='half spiral' />
              </figure>
            </SectionSplit>
              
            <Notification text={'Track what customers are saying about your brand. Monitor Twitter, Instagram, Facebook, websites and more!'} />

            <SectionSingle className={'p-0 bg-contain bg-left bg-no-repeat'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <Header text={'We Make Insights Actionable by Making Data Relevang'} />
              <figure className='mt-14'>
                <img className='mx-auto' src='/img/brand-cont.png' alt='brand-cont.png' />
              </figure>
            </SectionSingle>
          </>
        )
      },
      isActive: false,
    },
    {
      key: 3,
      image: "/img/corporate.png",
      head: "Corporate Communication",
      desc: "Description here",
      content: () => {
        const efforts = [
          {
            key: 1,
            header: 'Compare with competitors',
            desc: 'Calculate your presence score. Measure your reach & sentiment over time and compare to competitors.'
          },
          {
            key: 2,
            header: 'Analyse sentiment',
            desc: 'Learn from AI-based data about positive, negative and neutral mentions.'
          },
        ]

        const blocks = [
          {
            key: 1,
            icon: "/img/corporate.png",
            header: "Powerful Analytics",
            description: "Turn data into insights with unique analytics. Not only collects brand mentions, we analyze the reach, engagement, influence and emotions for social and non-social mentions alike."
          },
          {
            key: 2,
            icon: "/img/corporate.png",
            header: "Whitelabel PDF Reports",
            description: "Leverage our beautiful, customizable and automated reports. Create PDF reports wit the most important data about your brand."
          },
          {
            key: 3,
            icon: "/img/corporate.png",
            header: "Easy of Use",
            description: "Use our mobile app or desktop dashboard to access your mentions everywhere. We’ve been doing media monitoring for 10+ years and upgraded our tools frequently."
          },
        ]

        return (
          <>
            <UseCaseMain header={'Measure your marketing / PR efforts'} desc={'Track reach & engagement of your mentions. Learn how many people talked about your new campaign or press release.'} image={'/img/corporate.png'}>
              <div>
                {
                  efforts.map(effort => (
                    <Notification header={effort.header} text={effort.desc} />
                  ))
                }
                </div>
            </UseCaseMain>

            <SectionSplit className={'p-0 bg-no-repeat bg-right'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <div className='flex-1'>
                <Title className={'text-8xl w-1/2 mx-auto'} text={'Smart AI Analytic'} />
              </div>
              <div className='flex-1'>
                <figure>
                  <img src='/img/smart ai.png' alt='smart ai' />
                </figure>
              </div>

              <figure className='absolute left-20 top-1/2 z-[-1]'>
                <img src='/img/half-spiral.png' alt='half spiral' />
              </figure>
            </SectionSplit>

            <SectionSingle className={'min-h-max flex items-center bg-contain bg-left bg-no-repeat'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <div>
                <Header text={'Benefits'} />
                <Blocks blocks={blocks} />
              </div>
            </SectionSingle>
          </>
        )
      },
      isActive: false,
    },
    {
      key: 4,
      image: "/img/government.png",
      head: "Government Public Relation",
      desc: "Description here",
      content: () => {
        const benefits = [
          {
            key: 1,
            text: "Improved communication"
          },
          {
            key: 2,
            text: "Increased engagement"
          },
          {
            key: 3,
            text: "Enhanced transparency"
          },
          {
            key: 4,
            text: "Greater accessibility"
          },
          {
            key: 5,
            text: "Cost-effectiveness &  Wider reach"
          },
        ]

        return(
          <>
            <UseCaseMain header={'Our Objective'} desc={'improving the public services, Simfoni Insight provide several products such as Social Listening, Sentiment Analysis, Intelligence Report and Social Media Management.'} image={'/img/government.png'} />

            <SectionSplit className={'bg-no-repeat bg-right'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <div className='flex-1 flex flex-col items-center justify-center'>
                <Title className={'text-8xl w-1/2'} text={'Our Solution'} />
              </div>
              <div className='flex-1 flex flex-col gap-12'>
                {
                  benefits.map(benefit => (
                    <Notification key={benefit.key} text={benefit.text} className={'my-0'} />
                  ))
                }
              </div>

              <figure className='absolute left-20 top-1/2 z-[-1]'>
                <img src='/img/half-spiral.png' alt='half spiral' />
              </figure>
            </SectionSplit>

            <SectionSplit className={'min-h-max flex items-center bg-contain bg-left bg-no-repeat'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}}>
              <div className='flex-1'>
                  <figure>
                    <img src='/img/amico.png' alt='amico' />
                  </figure>
              </div>
              <div className='flex-1'>
                <div>
                  <Header className={'text-start mb-10'} text={'Government Services '} />
                  <Description className={'mb-10'}>
                    <p>
                      Governments need social media intelligence  potential could grow significantly supported by growing internet-enabled services in all:
                    </p>
                  </Description>
                  <figure>
                    <img src='/img/Group 753.png' alt='data' />
                  </figure>
                </div>
              </div>
            </SectionSplit>
          </>
        )
      },
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

      <section className='py-16 pt-28 w-full'>
        <Title className={'text-center mb-20'} text={'Use Cases'} />

        <SectionSingle>
          <div className='grid grid-cols-4 gap-24 py-12'>
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
                <usecase.content />
              ))
            }
          </div>

          <figure className='absolute left-0 -top-60 z-[-1]'>
            <img src='/img/Ellipse 7.png' alt='elips 7' />
          </figure>
        </SectionSingle>
      </section>
    </>
  )
}

export default UseCase