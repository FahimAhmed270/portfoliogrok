import React from 'react'
import Card from './Card'
import './Resume.css'
import ResumeApi from './ResumeApi'

const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
          <div className="container top">
              <div className="heading text-center">
                <h4>7+ YEARS OF EXPERIENCE</h4>
                <h1>My Resume</h1>
              </div>
              <div className="content-section mtop d_flex">
                  <div className="left">
                    <div className='heading'>
                        <h4>2007-2010</h4>
                        <h1>Education Quality</h1>
                    </div>
                    <div className="content">
                        {ResumeApi.map((value,index)=>{
                            if(value.category === 'education'){
                                return (
                                    <Card key={index} title={value.title} rate={value.rate} year={value.year} desc={value.desc}/> 
                                )
                            }
                        })}
                    </div>
                  </div>
                  <div className="left">
                    <div className='heading'>
                        <h4>2007-2010</h4>
                        <h1>Job Experience</h1>
                    </div>
                    <div className="content">
                        {ResumeApi.map((value,index)=>{
                            if(value.category === 'experience'){
                                return (
                                    <Card key={index} title={value.title} rate={value.rate} year={value.year} desc={value.desc}/>
                                )
                            }
                        })}
                    </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Resume
