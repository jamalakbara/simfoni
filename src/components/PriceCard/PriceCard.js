import React from 'react'
import Button from '../Button/Button'
import Description from '../Description/Description'
import Header from '../Header/Header'

const PriceCard = ({plan, price, desc, features, isMostPopular}) => {
  return (
    <div className='flex flex-col'>
      <div className={!isMostPopular && 'invisible'}>
        <h1 className='text-center text-4xl bg-indigo-400 text-white rounded-t-3xl py-4 border-2 border-solid border-indigo-500'>Most Popular</h1>
      </div>
      <div className={`p-8 border-2 border-solid ${!isMostPopular ? 'border-gray-100 rounded-3xl bg-white-transparent' : 'border-indigo-500 rounded-b-3xl border-t-0 bg-indigo-100'}`}>
        <Header text={plan} />
        <Header className={'text-6xl'} text={`IDR ${price}K`} />
        <Description className={'text-xl mb-12'}>
          <p>
            {desc}
          </p>
        </Description>
        <ul className='mb-12'>
          {
            features.map((feature,idx) => (
              <li key={idx} className='flex items-center'>
                <figure>
                  <img src='/img/ceklis.png' />
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
  )
}

export default PriceCard