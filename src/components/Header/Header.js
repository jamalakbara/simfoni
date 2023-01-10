import React from 'react'

const Header = ({text, className}) => {
  return (
    <p className={`text-3xl text-center ${className?className:''}`}>
      {text}
    </p>
  )
}

export default Header