import React from 'react';
import './About.css'
import { useSpring, animated } from 'react-spring';

function CardSocial({logo, title, color,link}) {

    const cards = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})

    return (

        <>
            {
                logo == null ?
                (<div className="about__socialCard hideSocialCard">
                    
                </div>)
                :
                (<animated.div style={cards} className="about__socialCard cursor" onClick={(e)=>{
                    window.open(link);
                }}>
                    <div className={"about__icon " + color}>
                        <img src={logo} alt=""/>
                    </div>
                    <h1>{title}</h1>
                </animated.div>)
            }
        </>

    )
}

export default CardSocial
