import React, {useState} from 'react'

const Card = (props) => {
  const [modal, setModal] = useState(false)
  
  const toggleModal =()=>{
    setModal(!modal)
  }
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="image" onClick={toggleModal}/>
        </div>
        <div className="categoty d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          <label htmlFor="">
          <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className="title d_flex">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" onClick={toggleModal} className='arrow'>
          <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* popup box */}
      {modal && (
        <div className="madal">
          <div onClick={toggleModal}  className="overlay"></div>
          <div className="madal-content d_flex">
            <div className="left madal-img">
              <img src={props.image} alt="" />
            </div>
            <div className="right madal-text">
            <span>Featured - Design</span>
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
            <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
            <div className="button f_flex mtop">
              <button className="btn_shadow">
                LIKE THIS - <i className='far fa-thumbs-up'></i>
              </button>
              <button className="btn_shadow">
                VIEW PROJECT- <i className='fas fa-chevron-right'></i>
              </button>
            </div>
            <button className="btn_shadow close-modal" onClick={toggleModal}>
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
