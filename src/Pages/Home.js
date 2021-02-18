import React from 'react';
import './Home.css';
import Header from './Header';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="home" style={{backgroundImage:'url(bg4.jpg)'}}>
        <Header color="white" active="home"/>
        <div className="home__headers">
            <div className="home__container">
                <img src="picture1.png" alt=""/>
                <div className="home__headersText">
                    <h1>I'm Ian C. Destura</h1>
                    <p>Freelance Web/Mobile Developer</p>
                    <Button variant="contained">Download Resume</Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
