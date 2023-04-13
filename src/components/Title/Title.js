import React from 'react'

const Title = ({text, className}) => {
  return (
    <h1 className={`font-bold my-10 
                    sm:text-3xl 
                    xl:text-6xl 
                    ${className ? className : ''}`}
    >
      {text}
    </h1>
  )
}

export default Title