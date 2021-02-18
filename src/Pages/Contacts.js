import React from 'react'
import Headers from './Header';
import LocationIcon from '@material-ui/icons/LocationCity';
import TelephoneIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Language';
import './Contacts.css';



function Contacts() {
    return (
        <div className="contacts">
            <Headers color="black" active="contact"/>
            <div className="contacts__headers">
                <div className="about__text">
                    <h1>Contact Me</h1>
                </div>
                <div className="contacts__info">
                    <div className="contacts__Card">
                        <h2>Address</h2>
                        <div className="contacts__CardInfos">
                            <LocationIcon/>
                            <p>Las Pinas City</p>
                        </div>
                    </div>
                    <div className="contacts__Card">
                        <h2>Contact Number</h2>
                        <div className="contacts__CardInfos">
                            <TelephoneIcon/>
                            <p>0926-366-5735</p>
                        </div>
                    </div>
                    <div className="contacts__Card">
                        <h2>Email</h2>
                        <div className="contacts__CardInfos">
                            <EmailIcon/>
                            <p>idestura35@gmail.com</p>
                        </div>
                    </div>
                    <div className="contacts__Card">
                        <h2>Website</h2>
                        <div className="contacts__CardInfos">
                            <WebIcon/>
                            <p>www://https:fb.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
