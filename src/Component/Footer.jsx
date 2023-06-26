import React, { useEffect } from "react"
import logo1 from "./pic/2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 500
    })
  }, [])
  return (
    <>
      <footer>
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-easing="linear"
          className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2023. All rights reserved by Fahim Ahmed.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer