import React,{ useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Headers from './Header';
import './About.css'
import CardSkill from './CardSkill'
import CardServices from './CardServices'
import Modal from './Modal';
import CardSocial from './CardSocial';
import CardCert from './CardCert';
import AboutMe from './AboutMe';
import { useSpring, animated } from 'react-spring';


function About() {

    const text = useSpring({transform: 'translateX(0px)', from: {transform: 'translateX(-400px)'}});

    const [tabIndex, setTabIndex] = useState(0);
    const [selectedImg, setSelectedImg] = useState(null);

    
    return (
        <div className="about">
            <Headers color="black" active="about"/>
            <div className="about__headers">
                <animated.div style={text} className="about__text">
                    <h1>About Me</h1>
                </animated.div>
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>Skills</Tab>
                        <Tab>Services</Tab>
                        <Tab>Social Media</Tab>
                        <Tab>Certificates</Tab>
                    </TabList>
                    <TabPanel>
                        <AboutMe/>
                    </TabPanel>
                    <TabPanel>
                        <div class="about__panelSkill">
                            <div className="about__skill">
                                <CardSkill logo="logo/html.png" title="HTML"/>
                                <CardSkill logo="logo/css.png" title="CSS"/>
                                <CardSkill logo="logo/javascript.png" title="Javascript"/>
                                <CardSkill logo="logo/bootstrap.png" title="Bootstrap"/>
                                <CardSkill logo="logo/materialize.png" title="Materialize CSS"/>
                                <CardSkill logo="logo/jquery.png" title="JQuery"/>
                                <CardSkill logo="logo/react.png" title="React JS"/>
                                <CardSkill logo="logo/express.png" title="Express JS"/>
                                <CardSkill logo="logo/node-js.png" title="Node JS"/>
                                <CardSkill logo="logo/typescript.png" title="Typescript"/>
                                <CardSkill logo="logo/ionic.png" title="Ionic"/>
                                <CardSkill logo="logo/php.png" title="PHP"/>
                                <CardSkill logo="logo/codeigniter.png" title="Code Igniter"/>
                                <CardSkill logo="logo/dart.png" title="Dart"/>
                                <CardSkill logo="logo/flutter.png" title="Flutter"/>
                                <CardSkill logo="logo/java.png" title="Java"/>
                                <CardSkill logo="logo/mongodb.png" title="MongoDB"/>
                                <CardSkill logo="logo/sql.png" title="SQL"/>
                                <CardSkill logo="logo/git.png" title="Git"/>
                                <CardSkill logo="logo/github.png" title="GitHub"/>
                                <CardSkill logo="logo/gitlab.png" title="GitLab"/>
                                <CardSkill logo="logo/firebase.png" title="Firebase"/>
                                <CardSkill logo="logo/heroku.png" title="Heroku"/>
                                <CardSkill logo="logo/adobe.png" title="Photoshop"/>
                                <CardSkill logo="logo/figma.png" title="Figma"/>
                                <CardSkill logo="" title=""/>
                                <CardSkill logo="" title=""/>
                                <CardSkill logo="" title=""/>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="about__panelService">
                            <div className="about__service">
                                <CardServices logo="logo/ui-design.png" title="Multimedia Editor" 
                                    text="I can create logos and edit photos and videos."
                                />
                                <CardServices logo="logo/web-development.png" title="Web Designer"
                                    text="As a designer who loves modern arts, I can create an attractive, responsive and good-looking website."
                                />
                                <CardServices logo="logo/development.png" title="Web Developer" 
                                    text="As a developer, I can make your website functionable, secure and interactive to the users."
                                />
                                <CardServices logo="logo/profile.png" title="Mobile Developer"
                                    text="As mobile developer, I can build an android application for your website"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="about__panelSocial">
                            <div className="about__social">
                                <CardSocial logo="logo/facebook.png" title="Facebook" color="fb" link="https://www.facebook.com/AIYUUU.03.31.19.Yanny/"/>
                                <CardSocial logo="logo/instagram.png" title="Instagram" color="insta" link="https://www.instagram.com/idestura033119/"/>
                                <CardSocial logo="logo/youtube.png" title="Youtube" color="yt" link="https://www.youtube.com/channel/UCAk00EuqB-6lsQUV8rqNkSg"/>
                                <CardSocial logo="logo/github.png" title="GitHub" color="github" link="https://github.com/Aiyuuu033119"/>
                                <CardSocial/>
                                <CardSocial/>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div class="about__panelCert">
                            <div className="about__cert">
                                <CardCert 
                                    logo="cert/e-Certificates - Website building 101.png"
                                    title="WebsitesAdvice: Website Building 101"
                                    setSelectedImg={setSelectedImg}
                                />
                                {selectedImg && <Modal src={selectedImg} setSelectedImg={setSelectedImg}/>}
                                <CardCert 
                                    logo="cert/e-Certificates - Web Hosting_ All You Need to Know Re-Run.png"
                                    title="WebsitesAdvice: Web Hosting: All You Need to Know"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Top 3 Demo Picks by WEBSITESADVICE 2021.png"
                                    title="WebsitesAdvice: Top 3 Demo Picks by WEBSITESADVICE 2021"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Web Hosting Providers_ Discovering What's Best for You! eCertificates.png"
                                    title="WebsitesAdvice: Web Hosting Providers: Discovering What The Most Suitable For You"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - WordPress Explained_ An Introduction 2021 Re-run.png"
                                    title="WebsitesAdvice: WordPress Explained An Introduction"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - WordPress Explained_ Dashboard Navigation 2021.png"
                                    title="WordPress Explained Dashboard Navigation"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Cybersecurity Fundamentals.png"
                                    title="DECODE: Cybersecurity Fundamentals"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Data Processing A Skill Everyone Needs.png"
                                    title="DECODE: Data Processing A Skill Everyone Needs"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Introduction to Email Threats and Security Attacks.png"
                                    title="DECODE: Introduction to Email Threats and Security Attacks"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Cybersecurity Essentials.png"
                                    title="CISCO: Cybersecurity Essentials"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Introduction to Cybersecurity.png"
                                    title="CISCO: Introduction to Cybersecurity"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Get Connected - Certificate.png"
                                    title="CISCO: Get Connected"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Introduction to Packet Tracer.png"
                                    title="CISCO: Introduction to Packet Tracer"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - Introduction to IoT.png"
                                    title="CISCO: Introduction to IoT"
                                    setSelectedImg={setSelectedImg}
                                />
                                <CardCert 
                                    logo="cert/e-Certificates - NDG Linux Unhatched.png"
                                    title="CISCO: NDG Linux Unhatched"
                                    setSelectedImg={setSelectedImg}
                                />
                                <div className="about__certCard">
                                    
                                </div>
   
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        
    );
}

export default About
