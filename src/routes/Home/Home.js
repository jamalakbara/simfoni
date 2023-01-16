import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/Title/Title';
import SectionSingle from '../../sections/SectionSingle/SectionSingle';
import SectionSplit from '../../sections/SectionSplit/SectionSplit'
import Blocks from '../../components/Blocks/Blocks'

const Home = () => {
  
  const imageCarousel = [
    {
      key: 1,
      image: "/img/car1.png"
    },
    {
      key: 2,
      image: "/img/car2.png"
    },
  ];

  const data = [
    {
      key: 1,
      icon: "/img/data.png",
      header: "Complete Big Data",
      description: "With data all around the internet, never worried about missing information"
    },
    {
      key: 2,
      icon: "/img/dashboard.png",
      header: "Flexible & Customize Dashboard",
      description: "Customize your dashboard exactly as what you need"
    },
    {
      key: 3,
      icon: "/img/context.png",
      header: "Context based sentiment Analysis",
      description: "Custom sentiment algorithm based on client industry subjective"
    },
    {
      key: 4,
      icon: "/img/data.png",
      header: "Very Intelligence Automation System",
      description: "Accurate and precise AI algorithms according to client objectives"
    },
    {
      key: 5,
      icon: "/img/analytics.png",
      header: "Responsive analytic",
      description: "Adaptation to the latest viral issues/trends on social media."
    },
    {
      key: 6,
      icon: "/img/report.png",
      header: "Automation Reporting",
      description: "Make reporting never that easy. never worried about human error anymore"
    },
  ]

  return (
    <>
      <Navbar />
      <section className='py-16 w-full'>
        <SectionSplit>
          <div className='flex-1'>
            <Title text={'Get Insight, Sees All, Knows All.'} />

            <Button label={'Book Demo Now'} />
          </div>
          <div className='flex-1'>
            <img src='/img/hero.png' alt='hero' />
          </div>
          <figure className='absolute left-0 z-[-1]'>
            <img src='/img/Ellipse 7.png' alt='elips 7' />
          </figure>
          <figure className='absolute left-1/4 translate-x-[-25%] bottom-0 z-[-1]'>
            <img src='/img/half-spiral.png' alt='half spiral' />
          </figure>
        </SectionSplit>

        <SectionSplit reverse={true}>
          <div className='flex-1'>
            <Title className={'text-right'} text={'Intelligence Social Media and Marketplace'} />
          </div>
          <div className='flex-1'>
            <Carousel items={imageCarousel} />
          </div>
          <figure className='absolute right-0 top-1/2 translate-y-[-50%] z-[-1]'>
            <img src='/img/Ellipse 9.png' alt='elips 9' />
          </figure>
          <figure className='absolute right-[10%] bottom-0 z-[-1]'>
            <img src='/img/tabung.png' alt='tabung' />
          </figure>
        </SectionSplit>
        
        <SectionSingle className={'bg-contain bg-center bg-no-repeat'} style={{backgroundImage: 'url("/img/Ellipse 10.png")'}} >
          <Header className={'mb-32'} text={'Our Key Differentiator'} />
          <Blocks blocks={data} />

          <figure className='absolute -bottom-10 z-[-1]'>
            <img src='/img/ulir.png' alt='ulir' />
          </figure>
        </SectionSingle>

      </section>
    </>
  )
}

export default Home