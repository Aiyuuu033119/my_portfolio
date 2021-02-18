import React from 'react'
import Headers from './Header';
import LocationIcon from '@material-ui/icons/LocationCity';
import TelephoneIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Language';
import './Contacts.css';
import { useSpring, animated } from 'react-spring';


function Contacts() {

    const text = useSpring({transform: 'translateX(0px)', from: {transform: 'translateX(-400px)'}});
    const cards = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})

    return (
        <div className="contacts">
            <Headers color="black" active="contact"/>
            <div className="contacts__headers">
                <animated.div style={text} className="about__text">
                    <h1>Contact Me</h1>
                </animated.div>
                <div className="contacts__info">
                    <animated.div style={cards} className="contacts__Card">
                        <h2>Address</h2>
                        <div className="contacts__CardInfos">
                            <LocationIcon/>
                            <p>Las Pinas City</p>
                        </div>
                    </animated.div>
                    <animated.div style={cards}div className="contacts__Card">
                        <h2>Contact Number</h2>
                        <div className="contacts__CardInfos">
                            <TelephoneIcon/>
                            <p>0926-366-5735</p>
                        </div>
                    </animated.div>
                    <animated.div style={cards}div className="contacts__Card">
                        <h2>Email</h2>
                        <div className="contacts__CardInfos">
                            <EmailIcon/>
                            <p>idestura35@gmail.com</p>
                        </div>
                    </animated.div>
                    <animated.div style={cards}div className="contacts__Card">
                        <h2>Website</h2>
                        <div className="contacts__CardInfos">
                            <WebIcon/>
                            <p>www://https:fb.com</p>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
