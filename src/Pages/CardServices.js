import React from 'react';
import './About.css'

function CardServices({logo, title, text}) {
    return (
        <div className="about__serviceCard">
            <img src={logo} alt=""/>
            <div className="about_serviceText">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>

    )
}

export default CardServices
