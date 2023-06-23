import React from 'react'
import './Skill.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="heading text-center">
                        <h4>2+ YEARS OF EXPERIENCE</h4>
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-content">
                        <div className="design">
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
                        <div className="development">
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


// initial = {{ x: "-100%", opacity: 0 }}
// animate = {{ x: 0, opacity: 1 }}
// transition = {{ duration: 0.5, delay: 0.5 }}