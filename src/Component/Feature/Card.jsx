import React from 'react'

const Card = ({ icon, title, desc }) => {
  return (
    <>
      <div className="box btn_shadow">
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
