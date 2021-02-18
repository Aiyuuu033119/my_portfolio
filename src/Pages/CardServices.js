import React from 'react';
import './About.css'
import { useSpring, animated } from 'react-spring';

function CardServices({logo, title, text}) {

    const cards = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})

    return (
        <animated.div style={cards} className="about__serviceCard">
            <img src={logo} alt=""/>
            <div className="about_serviceText">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </animated.div>

    )
}

export default CardServices
