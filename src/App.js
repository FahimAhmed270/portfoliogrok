import React from 'react'
import Header from './Component/Header/Header'
import './App.css'
import Home from './Component/Home/Home'
import Feature from './Component/Feature/Feature'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Skill from './Component/Skill/Skill'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Feature/>
      <Portfolio/>
      <Resume/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
