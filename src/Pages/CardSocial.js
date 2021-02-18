import React from 'react';
import './About.css'

function CardSocial({logo, title, color}) {
    return (
        <div className="about__socialCard">
            <div className={"about__icon " + color}>
                <img src={logo} alt=""/>
            </div>
            <h1>{title}</h1>
        </div>

    )
}

export default CardSocial
