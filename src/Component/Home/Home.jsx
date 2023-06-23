import React from 'react'
import './Home.css'
import hero from "../pic/1.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from 'react-simple-typewriter'
import { TbBrandFiverr } from 'react-icons/tb'
import { SiUpwork } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { home } from '../motion'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <section
      className="home" id="home">
        <div className="container top f_flex">
          <motion.div
           className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>I'm <span>Fahim Ahmed</span></h1>
            <h2> a <span>
              <Typewriter
                words={['Professional Coder', 'React Developer']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            </h2>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
            <div className="home_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a href="https://www.fiverr.com/fahim_ahmed_pro?up_rollout=true">
                  <button className="btn_shadow">
                    <TbBrandFiverr />
                  </button>
                  </a>
                  <button className="btn_shadow">
                    <SiUpwork />
                  </button>
                  <button className="btn_shadow">
                    <BsGithub />
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </motion.div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
