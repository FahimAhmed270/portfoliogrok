import React from 'react'
import './Skill.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from 'framer-motion';

const Skill = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="heading text-center">
                        <h4>7+ YEARS OF EXPERIENCE</h4>
                        <h1>My Skills</h1>
                    </div>
                    <div className="skill-content">
                        <div className="design">
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                        </div>
                        <div className="development">
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
                                    bgColor='#ff014f'
                                />
                            </div>
                            <div className="skill-span">
                                <p>Photoshop</p>
                                <ProgressBar
                                    completed={85}
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