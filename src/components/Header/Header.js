import React from 'react'

const Header = ({text, className}) => {
  return (
    <p className={`text-4xl text-center font-semibold mb-12 ${className?className:''}`}>
      {text}
    </p>
  )
}

export default Header