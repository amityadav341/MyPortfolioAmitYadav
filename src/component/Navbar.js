import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [section, setsection] = useState(['Home','About', 'Skills', 'Projects', 'Contact']);

    const handleScroll = () =>{
        if (window.scrollY > 100) {
            document.querySelector(".nav").className = "nav scroll";
          } else {
            document.querySelector(".nav").className = "nav";
          }
    };

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll');
        }
    }, [handleScroll]);

    


    return (
        <>
            <nav id="nav" className="nav">
                <div className="nav_content">
                    <div className="nav_inner_wrapper">
                       <ul className='nav_list'>
                            {section.map((link, index) => {
                                return (
                                    <li key={link} className="nav_item">
                                        <Link 
                                        spy={true}
                                        duration={1000}
                                        activeClass="active-section"
                                        offset={-60} 
                                        className="nav_link" 
                                        to={link.toLowerCase()}><span>{link}</span></Link>
                                    </li>
                                )

                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
