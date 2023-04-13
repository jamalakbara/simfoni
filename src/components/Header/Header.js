import React from 'react'

const Header = ({text, className}) => {
  return (
    <p className={`text-center font-semibold 
                    sm:mb-6 sm:text-2xl 
                    xl:text-4xl xl:mb-12 
                    ${className?className:''}`}
    >
      {text}
    </p>
  )
}

export default Header