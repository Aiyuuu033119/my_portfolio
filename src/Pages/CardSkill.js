import React from 'react';
import './About.css'

function CardSkill({logo, title}) {
    return (
        <>
            {
                logo != '' ? 
                (<div className="about__skillCard active">
                    <img src={logo} alt=""/>
                    <p>{title}</p>
                </div>)
                :
                (<div className="about__skillCard">
                    
                </div>)
            }
            
        </>
        
    )
}

export default CardSkill
