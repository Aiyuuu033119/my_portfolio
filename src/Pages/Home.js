import React from 'react';
import './Home.css';
import Header from './Header';
import { Button } from '@material-ui/core';
import {useSpring, animated, config} from 'react-spring';

function App() {

  const a = useSpring({transform: 'translateY(0)',opacity: '1' ,from: {transform: 'translateY(-50px)',opacity: '0',}})
  const img = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})
  const h1 = useSpring({transform: 'translateX(0)', from: {transform: 'translateX(500px)'}})
  const p = useSpring({transform: 'translateX(0)', from: {transform: 'translateX(800px)'}})
  
  return (
    <div className="home" style={{backgroundImage:'url(bg4.jpg)'}}>
        <Header color="white" active="home"/>
        <div className="home__headers">
            <div className="home__container">
                <animated.img style={img} src="picture1.png" alt=""/>
                <div className="home__headersText">
                    <animated.h1 style={h1}>I'm Ian C. Destura</animated.h1>
                    <animated.p style={p}>Freelance Web/Mobile Developer</animated.p>
                    <animated.a style={a} href="file/ian destura- resume.docx" download>Download Resume</animated.a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
