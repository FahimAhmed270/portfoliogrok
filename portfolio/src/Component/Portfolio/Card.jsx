import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="categoty d_flex">
          <span>{props.category}</span>
          <label htmlFor="">
          <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <a href="">
          <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* popup box */}

      
    </>
  )
}

export default Card
