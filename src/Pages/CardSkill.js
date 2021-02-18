import React, { useState } from 'react';
import './About.css'
import { useSpring, animated } from 'react-spring';

function CardSkill({logo, title}) {

    const cards = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})
    const [isShown, setIsShown] = useState(cards);

    return (
        <>
            {
                logo != '' ? 
                (<animated.div style={isShown} className="about__skillCard active" onMouseLeave={() => setIsShown({trasition: 'all .4s'})}
                onMouseEnter={() => setIsShown({ boxShadow: "0 4px 13px -7px rgb(0 0 0 / 50%)",
                    borderTop: '10px solid var(--bittersweet)',
                    transform: 'scale(1.2)'})}>
                    <img src={logo} alt=""/>
                    <p>{title}</p>
                </animated.div>)
                :
                (<div className="about__skillCard" >
                    
                </div>)
            }
            
        </>
        
    )
}

export default CardSkill
