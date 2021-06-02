import React from 'react'
import TypedText from './Typed'
import amit from '../img/amit.jpeg'
import Heading from './CurrentTime';

function Header() {
    return (
        <>
            <header>
               
                <div className='overlay' >
                {/* <div className="row">
                <div className="col-6"> */}
                    <div className='greet-block'>
                        <div className="row">
                                <div className="col-6" >
                                            <h1 className='greet'><Heading className="greet"/>
                                                I'm <span className='greet-title_color'>Amit Yadav</span><br />
                                            
                                            </h1>
                                            <div className='typed'>
                                                <TypedText
                                                    strings={[
                                                        "A CS Undergrad at <span style=color:red>NIT AP</span>",
                                                        "I'm a Software Developer",
                                                        "Let's Build Together!"
                                                    ]}
                                                />
                                                
                                            </div>
                                </div>
                            <div className="col-6" >
                                    <img style={{paddingLeft:"5%",width:"70%",height:"100%",borderRadius:"50%"}}src={amit}></img>
                                </div>
                        </div>
                    </div>
                          
                            <div className="header_social" >
                                <a href="mailto:rockamit341@gmail.com"><i className="fas fa-envelope-square" target="_blank" rel="noopener noreferrer"></i></a>
                                <a href="https://www.linkedin.com/in/amit-yadav-08810618b/"><i className="fab fa-linkedin" target="_blank"></i></a>
                                <a href="https://github.com/amityadav341"><i className="fab fa-github" target="_blank"></i></a>
                            </div>
                   
                </div> 
                    
            </header>
        </>
    )
}

export default Header;
