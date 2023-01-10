import React from 'react'

const Button = ({label}) => {
  return (
    <button className='bg-indigo-500 py-5 px-10 rounded-full text-white'>{label}</button>
  )
}

export default Button