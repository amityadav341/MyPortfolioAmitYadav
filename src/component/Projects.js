import React from 'react'
import home from '../img/home.jpg'
import main from '../img/covid.JPG'
import portfolio from '../img/portfolio.JPG'
import MLwork from '../img/Ml.JPG'
function Projects() {
    return (
        <>
            <section id="projects" className="projects-container">
                <div className="container">
                    <h2 className="section-title" data-title="Projects"> Projects </h2>
                    <div className="projects">
                        <div className="project">
                            <div className="cover">
                                <img src={home} alt=""></img>
                                <div className="name">
                                    <h2>ammy</h2>
                                    <div className="links">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/amityadav341/E-commerce-Website">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>E-commerce website </p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="cover">
                                <img src={main} alt=""></img>
                                <div className="name">
                                    <h2>LiveCovidStatsTracker</h2>
                                    <div className="links">
                                    <a target="_blank" rel="noopener noreferrer" href="https://amityadav341.github.io/LiveCovidStatsTracker/">See live</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>Covid stats live update</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="cover">
                                <img src={portfolio} alt=""></img>
                                <div className="name">
                                    <h2>Portfolio Website</h2>
                                    <div className="links">
                                    <a target="_blank" rel="noopener noreferrer" href="https://amityadav341.github.io/MyportfolioAmitYadav">See Live</a>
                                    {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/amityadav341/MyportfolioAmitYadav">Github</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>My portfolio website</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="cover">
                                <img src={MLwork} alt=""></img>
                                <div className="name">
                                    <h2>ML</h2>
                                    <div className="links">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/amityadav341/MachineLearning">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>Basic work with ML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
