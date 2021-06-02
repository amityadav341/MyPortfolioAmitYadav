import React from 'react'
function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title" data-title="Contact"> Get In Touch </h2>
                    <p>If you want to get started with me, think you need my help with something so just fancy saying hey, then get in touch.</p>
                    <div style={{margin:"2rem"}}>
                    <a className="link_button" title="rockamit341@gmail.com" href="mailto:rockamit341@gmail.com?subject=Say Hello&amp;body=Hi Amit, How you doing?">Say Hello!</a>
                    {/* <a className="link_button" href={resume} target="_blank" rel="noopener noreferrer">View Resume </a> */}
                    </div>
                    <div className="contact_social">
                        <a href="mailto:rockamit341@gmail.com"><i className="fas fa-envelope-square" target="_blank" rel="noopener noreferrer"></i></a>
                        <a href="https://www.linkedin.com/in/amit-yadav-08810618b/"><i className="fab fa-linkedin" target="_blank"></i></a>
                        <a href="https://github.com/amityadav341"><i className="fab fa-github" target="_blank"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
