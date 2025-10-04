import React from 'react'
import footerImage from '../assets/header.json'

const Footer = () => {
  return (
    <footer>
      <div className='flex footer-bg flex-col md:flex-row justify-center items-center gap-4 lg:pt-24 lg:pb-11 md:pb-9 pb-7 md:pt-16 pt-8 px-3'>
        <div className=''>
          <img className='w-16' src={footerImage.logo} alt="Logo" />
          <h2 className='text-[#331A15] mt-6 lg:text-4xl md:text-3xl text-2xl font-rancho'>Espresso Emporium</h2>
          <p className='text-[#1B1A1A] lg:text-xl mt-8 font-raleway max-w-xl'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <div className='flex gap-4 my-8'>
            <img className='w-10' src="images/Links/facebook-3-2 1.png" alt="Social media link - facebook" />
            <img className='w-10' src="images/Links/instagram-2016-51.png" alt="Social media link - instagram" />
            <img className='w-10' src="images/Links/linkedin-icon-21.png" alt="Social media link - linkedin" />
            <img className='w-10' src="images/Links/twitter24.png" alt="Social media link - twitter" />
          </div>
          <h3 className='text-[#331A15] font-rancho lg:text-4xl md:text-3xl text-2xl my-8'>Get in Touch</h3>
          <div>
            <div className='flex gap-4 my-4 items-center'>
              <img className='w-6' src="images/Links/Phone.png" alt="icon of phone" />
              <p className='text-[#1B1A1A] font-raleway lg:text-xl'>+880 1234 56789</p>
            </div>
            <div className='flex gap-4 my-4 items-center'>
              <img className='w-6' src="images/Links/Message.png" alt="icon of message" />
              <p className='text-[#1B1A1A] font-raleway lg:text-xl'>info@bmail.com</p>
            </div>
            <div className='flex gap-4 my-4 items-center'>
              <img className='w-6' src="images/Links/Location.png" alt="icon of location" />
              <p className='text-[#1B1A1A] font-raleway lg:text-xl'>123, ABC Road, XYZ Building, City Name</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-[#331A15] font-rancho lg:text-4xl md:text-3xl text-2xl'>Connect with Us</h3>
          <form className='mt-8 max-w-md'>
            <input className='w-full bg-white text-[#1b1a1a99] font-raleway rounded-md pl-2 my-3 focus:outline-none focus:ring-2 focus:ring-[#E3B577]' type="text" name='Name' value='Name' />
            <input className='w-full bg-white text-[#1b1a1a99] font-raleway rounded-md pl-2 focus:outline-none focus:ring-2 focus:ring-[#E3B577]' type="email" name='E-mail' value='E-mail'/>
            <textarea className='w-full bg-white text-[#1b1a1a99] font-raleway rounded-md pl-2 my-3 focus:outline-none focus:ring-2 focus:ring-[#E3B577]' name="Message" cols="20" rows="6" value='Message'></textarea>
            <button className='font-rancho lg:text-2xl text-xl text-[#331A15] border-2 border-[#331A15] rounded-2xl py-2 px-4 cursor-pointer hover:bg-amber-500 hover:border-transparent' type='submit'>Send Message</button>
          </form>
        </div>
      </div>
      <div className='footer-copy-bg py-3 text-center'>
        <p className='text-white lg:text-xl font-rancho'>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer