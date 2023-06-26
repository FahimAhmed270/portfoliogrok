import React, { useEffect } from 'react'
import Card from './Card'
import './Resume.css'
import ResumeApi from './ResumeApi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    // AOS
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])

    return (
        <>
            <section className="Resume" id="resume">
                <div className="container top">
                    <div
                     data-aos="fade-up"
                     data-aos-mirror="true"
                     data-aos-easing="linear"
                    className="heading text-center">
                        <h4>2+ YEARS OF EXPERIENCE</h4>
                        <h1>My Resume</h1>
                    </div>
                    <div className="content-section mtop d_flex">
                        <div
                            data-aos="flip-left"
                            data-aos-mirror="true"
                            data-aos-easing="linear"
                            className="left">
                            <div className='heading'>
                                <h4>2015-2020</h4>
                                <h1>Education Quality</h1>
                            </div>
                            <div className="content">
                                {ResumeApi.map((value, index) => {
                                    if (value.category === 'education') {
                                        return (
                                            <Card key={index} title={value.title} rate={value.rate} year={value.year} desc={value.desc} />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div
                            data-aos="flip-left"
                            data-aos-mirror="true"
                            data-aos-easing="linear"
                            className="left">
                            <div className='heading'>
                                <h4>2007-2010</h4>
                                <h1>Job Experience</h1>
                            </div>
                            <div className="content">
                                {ResumeApi.map((value, index) => {
                                    if (value.category === 'experience') {
                                        return (
                                            <Card key={index} title={value.title} rate={value.rate} year={value.year} desc={value.desc} />
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
