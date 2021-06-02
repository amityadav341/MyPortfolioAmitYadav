import React from 'react'
import pdf from '../amit.pdf'

const About = () => {
    return (
        <>
        <section id="about" className="about ">
            <div className="container">
                <h2 className="section-title" data-title="About"> Get to know me </h2>
                <div className="about_description">
                    <p>Hi, I'm Amit Yadav, I will be graduating with a B.Tech in CSE from National Insititute of Technology(NIT), Arunachal Pradesh in May 2022</p>
                    <p>In addition to my knowledge, I am actively learning and expanding my knowledge every day and staying up to date with trends and current standards in the industry</p>
                </div>
                <a className="link_button" href={pdf} target="_blank" rel="noopener noreferrer">View Resume</a>
            </div>
        </section>
        </>
    )
}

export default About;
