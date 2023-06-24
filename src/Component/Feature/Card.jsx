import React from 'react'

const Card = ({ icon, title, desc }) => {
  return (
    <>
      <div
        data-aos="fade-right"
        // data-aos-delay="60"
        // data-aos-duration="1200"
        data-aos-mirror="true"
        data-aos-easing="linear"
        className="box btn_shadow">
        <h3>{icon}</h3>
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href="/">
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Card
