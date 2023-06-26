import React, { useEffect } from 'react'
import './Skill.css'
import ProgressBar from "@ramonak/react-progress-bar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    // AOS
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])

    return (
        <>
            <section id='skill' className='skill'>
                <div className="container top">
                    <div
                        data-aos="fade-up"
                        data-aos-mirror="true"
                        data-aos-easing="linear"
                        className="heading text-center">
                        <h4>2+ YEARS OF EXPERIENCE</h4>
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-content">
                        <div
                            data-aos="fade-right"
                            data-aos-mirror="true"
                            data-aos-easing="linear"

                            className="design">
                            <div className="skill-span">
                                <p>HTML</p>
                                <ProgressBar
                                    completed={95}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>CSS</p>
                                <ProgressBar
                                    completed={89}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>JavaScript</p>
                                <ProgressBar
                                    completed={83}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Bootstrap</p>
                                <ProgressBar
                                    completed={80}
                                    bgColor='#ff014f'
                                />
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-mirror="true"
                            data-aos-easing="linear"

                            className="development">
                            <div className="skill-span">
                                <p>React</p>
                                <ProgressBar
                                    completed={80}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Material UI</p>
                                <ProgressBar
                                    completed={60}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Tailwind CSS</p>
                                <ProgressBar
                                    completed={78}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Redux Toolkit</p>
                                <ProgressBar
                                    completed={53}
                                    bgColor='#ff014f'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
