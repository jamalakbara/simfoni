import React from 'react'
import Blocks from '../../components/Blocks/Blocks'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title'
import SectionSingle from '../../sections/SectionSingle/SectionSingle'
import SectionSplit from '../../sections/SectionSplit/SectionSplit'

const HowWeWorks = () => {
  const data = [
    {
      key: 1,
      icon: "/img/hashtag.png",
      header: "Graph Hashtag/User Analytic",
      description: "Social network analysis by hashtag/user and spam/robot detection"
    },
    {
      key: 2,
      icon: "/img/bar.png",
      header: "Influencer Analytic",
      description: "Identify famous account to monitor their conversation."
    },
    {
      key: 3,
      icon: "/img/trend.png",
      header: "Trending Issue Analytic",
      description: "Find viral articles on social media"
    },
    {
      key: 4,
      icon: "/img/chat.png",
      header: "Local Issue Analytic",
      description: "Monitoring and Analysis local issue region/province"
    },
    {
      key: 5,
      icon: "/img/news.png",
      header: "News Analytic",
      description: "Date, day, hour data analysis"
    },
    {
      key: 6,
      icon: "/img/signal.png",
      header: "Social Media Account Analytic",
      description: "Monitoring public account , Facebook, Twitter, Tiktok, Youtube"
    },
    {
      key: 7,
      icon: "/img/history.png",
      header: "Historical Data",
      description: "Deep dive into specific hashtags & profiles over a certain period of time"
    },
    {
      key: 8,
      icon: "/img/bar.png",
      header: "Time Analysis",
      description: "Identify famous account to monitor their conversation."
    },
    {
      key: 9,
      icon: "/img/loc.png",
      header: "Location Analysis",
      description: "Location of social media users heatmap, cluster map, history map"
    },
    {
      key: 10,
      icon: "/img/chat.png",
      header: "Top Word",
      description: "The most wod user in conversations"
    },
    {
      key: 11,
      icon: "/img/love.png",
      header: "Sentiment Analysis",
      description: "Sentiment about your product, brand, or people"
    },
    {
      key: 12,
      icon: "/img/dashboard.png",
      header: "Dashboard & Reporting",
      description: "All information wrapped in one pages with auto reporting"
    },
  ]

  const images = [
    "/img/img1.png",
    "/img/img2.png",
    "/img/img3.png",
    "/img/img4.png",
    "/img/img5.png",
  ]
  
  return (
    <>
      <Navbar />

      <section className='py-16 w-full'>
        <SectionSplit>
          <div className='flex-1 flex justify-center'>
            <Title className={'w-48 text-8xl'} text={'How We Work'} />
          </div>
          <div className='flex-1'>
            <Description>
              <p className='mb-5'>
                Simfoni Insight, founded in 2020, is a growing digital media analytics company focusing on data mining of public opinion, social media listening and real time market intelligence by ArtificiaI Intelligence technology.  
              </p>
              <p>
                Our mission is to provide full solution for our clients so they could grow and adapt in forthcoming challenges.
              </p>
            </Description>
          </div>
        </SectionSplit>

        <SectionSingle>
          <Header text={'Our Process'} />

          <figure>
            <img className='mx-auto' src='/img/process.png' alt='process' />
          </figure>
        </SectionSingle>

        <SectionSingle>
          <Header text={'Our Features'} />

          <Blocks blocks={data} />
        </SectionSingle>

        <SectionSplit>
          <div className='flex-1'>
            <Header className={'text-start text-4xl mb-8'} text={'Simfoni.Insight Analytics'} />
            <Description className={'mb-8'}>
              <p>
              Our groundbreaking solutions are packed with the latest AI models.
              </p>
            </Description>
            <figure>
              <Description>
                <p className='mb-8'>
                Just type any <span>word</span> and Voila!
                </p>
              </Description>
              <img src='/img/search.png' alt='search' />
            </figure>
          </div>
          <div className='flex-1'>
            <figure className='flex justify-center'>
              <img src='/img/map.png' alt='map' />
            </figure>
          </div>
        </SectionSplit>

        <SectionSingle>
          <div className='flex flex-wrap gap-9 justify-center'>
            {
              images.map((image,idx) => (
                <figure key={idx}>
                  <img src={image} alt={image} />
                </figure>
              ))
            }
          </div>
        </SectionSingle>
      </section>
    </>
  )
}

export default HowWeWorks