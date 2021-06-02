import React from 'react'

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills ">
                <div className="container">
                    <h2 className="section-title" data-title="Skills"> Skills </h2>
                    <div className="skills_container">
                        <h3 className="skills_heading">Front End</h3>
                        <ul className="skills_list">
                            <li className="skills_item"><span><i className="fab fa-html5"></i>HTML</span></li>
                            <li className="skills_item"><span><i className="fab fa-css3-alt"></i>CSS</span></li>
                            <li className="skills_item"><span><i className="fab fa-js"></i>Javascript</span></li>
                            <li className="skills_item"><span><i className="fab fa-react"></i>React</span></li>
                            <li className="skills_item"><span><i className="fab fa-bootstrap"></i>Bootstrap</span></li>
                        </ul>
                        <h3 className="skills_heading">Back End</h3>
                        <ul className="skills_list">
                            <li className="skills_item"><span><i className="fab fa-node"></i>Nodejs</span></li>
                            <li className="skills_item"><span><i className="devicon-express-original"></i>Express</span></li>
                            <li className="skills_item"><span><i className="devicon-mongodb-plain"></i>MongoDB</span></li>
                            <li className="skills_item"><span><i className="devicon-mysql-plain"></i>MySql</span></li>
                        </ul>
                    
                        <h3 className="skills_heading">Tools</h3>
                        <ul className="skills_list">
                            <li className="skills_item"><span><i className="devicon-visualstudio-plain"></i>VS Code</span></li>
                            <li className="skills_item"><span><i className="fab fa-git-alt"></i>Git</span></li>
                            <li className="skills_item"><span><i className="fab fa-github"></i>GitHub</span></li>
                            <li className="skills_item"><span><i className="fab fa-npm"></i>NPM</span></li>
                        </ul>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
