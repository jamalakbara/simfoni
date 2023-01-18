import React from 'react'
import Button from '../Button/Button'
import Description from '../Description/Description'
import Header from '../Header/Header'

const PriceCard = ({plan, price, desc, features, isMostPopular}) => {
  return (
    <div className='flex flex-col w-96'>
      <div className={!isMostPopular && 'invisible'}>
        <h1 className='text-center text-4xl bg-indigo-400 text-white rounded-t-3xl py-4 border-2 border-solid border-indigo-500'>Most Popular</h1>
      </div>
      <div className={`flex flex-col gap-4 justify-between p-8 border-2 border-solid h-full ${!isMostPopular ? 'border-gray-100 rounded-3xl bg-white-transparent' : 'border-indigo-500 rounded-b-3xl border-t-0 bg-indigo-100'}`}>
        <div>
          <Header text={plan} />
          <Header className={'text-6xl'} text={`IDR ${price}K`} />
          <Description className={'text-xl text-center'}>
            <p>
              {desc}
            </p>
          </Description>
        </div>
        <div>
          <ul className='mb-12'>
            {
              features.map((feature,idx) => (
                <li key={idx} className='flex items-center mb-5 last:mb-0'>
                  <figure>
                    <img src='/img/ceklis.png' alt='ceklis' />
                  </figure>
                  <p>
                    {feature}
                  </p>
                </li>
              ))
            }
          </ul>
          <Button className={'w-full mb-12'} label={'Start Free Trial'} />
        </div>
      </div>
    </div>
  )
}

export default PriceCard