import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';

function ProjectCard({logo, title, caption, demoLink, githubLink}) {
    return (
        <>
        {
            logo == null ? (
                <div className="projects__skillCard">
                    
                </div>
            ) : 
            (
                <div className="projects__skillCard" style={{backgroundImage:`url(${logo})`}}>
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
                </div>
            ) 
        }
        </>
    )
}

export default ProjectCard
