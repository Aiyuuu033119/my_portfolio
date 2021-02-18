import React from 'react'
import './About.css'
import { useSpring, animated } from 'react-spring';

function Modal({src,setSelectedImg}) {
    
    const cards = useSpring({transform: 'scale(1)',opacity:'1', from: {transform: 'scale(2)',opacity:'0'}})

    return (
        <animated.div style={cards} className="backdrop" onClick={(e) => setSelectedImg(null)}>
            <img src={src} alt=""/>
        </animated.div>
    )
}

export default Modal
