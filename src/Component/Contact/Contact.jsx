import React, { useEffect, useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-easing="linear"
            className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div
              data-aos="fade-left"
              data-aos-mirror="true"
              data-aos-easing="linear"
              className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Fahim Ahmed</h1>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.facebook.com/fahimahmed54270/" target='_blank'>
                      <button className='btn_shadow'>
                        <FaFacebookF />
                      </button>
                    </a>
                    <a href="https://www.linkedin.com/in/md-fahim-ahmed-87a928246/" target='_blank'>
                      <button className='btn_shadow'>
                        <FaLinkedinIn />
                      </button>
                    </a>
                    <a href="mailto:fahimahmed54270@gmail.com">
                      <button className='btn_shadow'>
                        <SiGmail />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-easing="linear"
              className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact