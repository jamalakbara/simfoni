import React from 'react'

const Title = ({text, className}) => {
  return (
    <h1 className={`font-bold text-6xl my-10 ${className ? className : ''}`}>{text}</h1>
  )
}

export default Title