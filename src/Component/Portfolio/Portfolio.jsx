import React from 'react'
import Card from './Card'
import Portfolio_data from './Portfolio_data'
import './Portfolio.css'

const Portfolio = () => {
  
  return (
    <>
      <section className="Portfolio top" id="#project">
          <div className="container">
              <div className="heading text-center">
                <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h1>My Portfolio</h1>
              </div>
              <div className="content grid">
                {Portfolio_data.map((value, index)=>{
                    return (
                        <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} des={value.des} website={value.website} github={value.github}/>
                    )
                })}
              </div>
          </div>
      </section>
    </>
  )
}

export default Portfolio
