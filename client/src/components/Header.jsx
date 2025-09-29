import React from 'react'
import headerImage from '../assets/header.json'


const Header = () => {
  return (
    <nav className={`flex navbar-bg items-center gap-3 text-white text-6xl justify-center py-5`}>
        <img className='w-20' src={headerImage.logo} alt="logo" />
        <h1 className='font-rancho'>Espresso Emporium</h1>
    </nav>
  )
}

export default Header