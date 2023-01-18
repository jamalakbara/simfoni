import React from 'react'

const Button = ({label, className}) => {
  return (
    <button style={{background: 'linear-gradient(129.09deg, #6E78FF 22.72%, #545EE8 75.25%)'}} className={`py-4 px-10 rounded-full text-white text-2xl ${className?className:''}`}>{label}</button>
  )

}

export default Button