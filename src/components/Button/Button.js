import React from 'react'

const Button = ({label}) => {
  return (
    <button className='bg-indigo-500 py-4 px-10 rounded-full text-white text-2xl'>{label}</button>
  )
}

export default Button