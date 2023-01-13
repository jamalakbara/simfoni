import React from 'react'
import Description from '../Description/Description'
import Header from '../Header/Header'

const BlockItem = ({src,header,desc, className}) => {
  return (
    <div className={`h-72 shadow-lg rounded-3xl p-5
                    flex flex-col bg-white
                    ${className?className:''}`}>
      <figure className='w-16 h-16'>
        <img src={src} alt={src} />
      </figure>
      <div className='mt-5'>
        <h1 className='font-semibold text-2xl mb-5 capitalize' >
          {header}
        </h1>
        <Description className={'text-xl'}>
          <p>
            {desc}
          </p>
        </Description>
      </div>
    </div>
  )
}

export default BlockItem