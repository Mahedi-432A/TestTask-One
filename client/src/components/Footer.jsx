import React from 'react'
import footerImage from '../assets/header.json'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col md:flex-row justify-around items-center gap-4'>
        <div>
          <img src={footerImage.logo} alt="Logo" />
          <h2>Espresso Emporium</h2>
          <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <div>
            <img src="images/Links/facebook-3-2 1.png" alt="Social media link - facebook" />
            <img src="images/Links/instagram-2016-51.png" alt="Social media link - instagram" />
            <img src="images/Links/linkedin-icon-21.png" alt="Social media link - linkedin" />
            <img src="images/Links/twitter24.png" alt="Social media link - twitter" />
          </div>
          <h3>Get in Touch</h3>
          <div>
            <div>
              <img src="images/Links/Phone.png" alt="icon of phone" />
              <p>+880 1234 56789</p>
            </div>
            <div>
              <img src="images/Links/Message.png" alt="icon of message" />
              <p>info@bmail.com</p>
            </div>
            <div>
              <img src="images/Links/Location.png" alt="icon of location" />
              <p>123, ABC Road, XYZ Building, City Name</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Connect with Us</h3>
          <form>
            <input type="text" name='Name' value='Name' />
            <input type="email" name='E-mail' value='E-mail'/>
            <textarea name="Message" cols="30" rows="10" value='Message'></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>
      <div className='footer-bg py-3 text-center'>
        <p className='text-white lg:text-xl font-rancho'>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer