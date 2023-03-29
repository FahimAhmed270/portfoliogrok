import React, { useState } from 'react'

import './Header.css'
import logo from "../pic/logo.png"

const Header = () => {
  //fixed header

  window.addEventListener('scroll', function(){
    const header = this.document.querySelector('.header')
    header.classList.toggle('active', this.window.screenY > 100)
  })

  //mobile toggle 

  const [mobile, setMobile] = useState(false)

  return (
    <>
      <header className="header">
          <div className="container d_flex">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlink">
              <ul className={mobile ? 'nav-link-mobile' : 'link f_flex uppercase'} onClick={()=> setMobile(false)}>
                    <li><a href="#home">home</a></li>
                    <li><a href="#features">features</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#clients">clients</a></li>
                    <li><a href="#blog">blog</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><button className='home-btn'>BUY NOW</button></li>
                </ul>
                  <button className="toggle" onClick={()=> setMobile(!mobile)}>
                    {mobile ? <i className='fa-solid fa-x close home-btn '></i> : <i className='fa-solid fa-bars open'></i>}
                  </button>
            </div>
          </div>
      </header>
    </>
  )
}

export default Header
