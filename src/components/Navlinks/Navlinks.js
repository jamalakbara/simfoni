import React from 'react'
import { NavLink } from 'react-router-dom'

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
      to: "/pricing"
    },
    {
      key: 5,
      label: "Partnership",
      to: "/partnership"
    },
    {
      key: 6,
      label: "About Us",
      to: "/about-us"
    },
  ]

  let activeStyle = {
    "--tw-text-opacity": '1',
    color: 'rgb(99 102 241 / var(--tw-text-opacity))'
  }

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <div className='flex gap-x-10'>
      {
        links.map(link => (
          <NavLink onClick={handleClick} className={`font-bold text-2xl active:text-indigo-500 hover:text-indigo-500`} style={({ isActive }) => isActive ? activeStyle : undefined } key={link.key} to={link.to}>
            {link.label}
          </NavLink>
        ))
      }
    </div>
  )
}

export default Navlinks