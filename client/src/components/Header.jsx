import React from 'react'
import headerImage from '../assets/header.json'


const Header = () => {
  return (
    <nav className={`flex navbar-bg items-center gap-3 text-white lg:text-6xl md:text-4xl text-2xl justify-center lg:py-5 py-4`}>
        <img className='lg:w-20 md:min-w-14 w-10' src={headerImage.logo} alt="logo" />
        <h1 className='font-rancho'>Espresso Emporium</h1>
    </nav>
  )
}

export default Header