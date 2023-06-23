import React, { useState } from 'react'
import { header } from '../motion'
import { motion } from 'framer-motion'

import './Header.css'
import logo from "../pic/2.png"

const Header = () => {
  //fixed header

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 80)
  })

  //mobile toggle 

  const [mobile, setMobile] = useState(false)

  return (
    <>
      <motion.header
        initial="hidden"
        whileInView="show"
        variants={header}
        viewport={{ once: true, amount: 0.25 }}
        className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navlink">
            <ul className={mobile ? 'nav-link-mobile' : 'link f_flex uppercase'} onClick={() => setMobile(false)}>
              <li><a href="#home">home</a></li>
              <li><a href="#features">features</a></li>
              <li><a href="#project">project</a></li>
              <li><a href="#resume">resume</a></li>
              <li><a href="#skill">skill</a></li>
              <li><a href="#contact">contact</a></li>
              <li><button className='home-btn'>HIRE ME</button></li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? <i className='fa-solid fa-x close home-btn '></i> : <i className='fa-solid fa-bars open'></i>}
            </button>
          </div>
        </div>
      </motion.header>
    </>
  )
}

export default Header
