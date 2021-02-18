import React from 'react';
import './About.css'
import { useSpring, animated } from 'react-spring';

function CardCert({logo, title, setSelectedImg}) {

    const cards = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})

    return (
        <animated.div style={cards} className="about__certCard" onClick={(e)=>setSelectedImg(logo)}>
            <img src={logo} alt=""/>
            <p>{title}</p>
        </animated.div>

    )
}

export default CardCert
