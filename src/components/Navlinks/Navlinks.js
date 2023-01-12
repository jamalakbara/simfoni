import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  const links = [
    {
      key: 1,
      label: "Home",
      to: "/"
    },
    {
      key: 2,
      label: "How We Works",
      to: "/how-we-works"
    },
    {
      key: 3,
      label: "Use Case",
      to: "/usecase"
    },
    {
      key: 4,
      label: "Pricing",
      to: "/"
    },
    {
      key: 5,
      label: "Partnership",
      to: "/"
    },
    {
      key: 6,
      label: "About Us",
      to: "/"
    },
  ]
  return (
    <div className='flex gap-x-10'>
      {
        links.map(link => (
          <Link className='font-bold text-2xl' key={link.key} to={link.to}>
            {link.label}
          </Link>
        ))
      }
    </div>
  )
}

export default Navlinks