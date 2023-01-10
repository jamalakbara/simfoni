import React from 'react'
import Description from '../Description/Description'
import Header from '../Header/Header'

const BlockItem = ({src,header,desc}) => {
  return (
    <div className='h-96 shadow-md rounded-md p-5'>
      <figure>
        <img src={src} alt={src} />
      </figure>
      <Header text={header} />
      <Description text={desc} />
    </div>
  )
}

export default BlockItem