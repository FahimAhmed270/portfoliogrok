import React from 'react'
import './Feature.css'
import data from './Feature-Api'
import Card from './Card'

const Feature = () => {
  return (
    <>
      <section className="feature top" id="feature">
          <div className="container">
              <div className="heading">
                  <h4>Features</h4>
                  <h1>WHAT I DO</h1>
              </div>
              <div className="content grid">
                {data.map(({icon, title, desc}, index)=>{
                    return (
                      <Card key={index} icon={icon} title={title} desc={desc} />  
                    )
                })}
              </div>
          </div>
      </section>
    </>
  )
}

export default Feature
