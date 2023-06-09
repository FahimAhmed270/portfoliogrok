import React, { useState } from 'react'

const Card = (props) => {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      <div
       data-aos="zoom-in"
       data-aos-mirror="true"
       data-aos-easing="linear"
      className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          <label htmlFor="">
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className="title d_flex">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* popup box modal */}

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props.des}</p>
              <div className='button f_flex mtop'>
                <a href={props.website} target='_blank'>
                  <button className='btn_shadow'>
                    LIVE WEBSITE
                    <i className='far fa-thumbs-up'></i>
                  </button>
                </a>
                <a href={props.github} target='_blank'>
                  <button className='btn_shadow'>
                    SEE WEBSITE CODE<i className='fas fa-chevron-right'></i>
                  </button>
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
