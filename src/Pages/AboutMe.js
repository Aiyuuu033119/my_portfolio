import React from 'react';
import './About.css'
import { useSpring, animated } from 'react-spring';

function AboutMe() {

    const img = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})
    const h1 = useSpring({transform: 'translateX(0)', from: {transform: 'translateX(500px)'}})
    const p = useSpring({transform: 'translateX(0)', from: {transform: 'translateX(800px)'}})

    return (
        <div class="about__panelAbout">
            <animated.img style={img} src="about_me.png" alt=""/>
            <div class="about__textAbout">
                <animated.h1 style={h1}>I'm a Web/Mobile Developer</animated.h1>
                <animated.p style={p}>
                I'm Ian C. Destura an IT student, one of my skill is programming. I'm interested in building websites and mobile development also in designing with touch of modern arts.
                </animated.p>
            </div>
        </div>

    )
}

export default AboutMe
