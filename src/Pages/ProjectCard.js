import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function ProjectCard({logo, title, caption, demoLink, githubLink}) {

    const cards = useSpring({transform: 'scale(1)', backgroundImage:`url(${logo})`, from: {transform: 'scale(0)'}})

    // const style = {{backgroundImage:`url(${logo})`}}
    return (
        <>
        {
            logo == null ? (
                <div className="projects__skillCard">
                    
                </div>
            ) : 
            (
                <animated.div className="projects__skillCard" style={cards}>
                    {/* <img src={logo} alt=""/> */}
                    <div className="projects__text">
                        <h2>{title}</h2>
                        <p>{caption}</p>
                        <div>
                            <div>
                                {
                                    demoLink && <a onClick={(e) => {
                                        e.preventDefault();
                                        window.open(demoLink)
                                    }}>Demo</a>
                                }
                            </div>
                            <div>
                                <Link to={githubLink}>Github</Link>
                            </div>
                        </div>
                    </div>
                </animated.div>
            ) 
        }
        </>
    )
}

export default ProjectCard
