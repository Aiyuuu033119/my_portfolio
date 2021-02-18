import React, { useState } from 'react'
import Headers from './Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Projects.css'
import ProjectCard from './ProjectCard';

function Projects() {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="projects">
            <Headers color="black" active="project"/>
            <div className="projects__headers">
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Prototype</Tab>
                        <Tab>Web Development</Tab>
                        <Tab>Mobile Development</Tab>
                    </TabList>
                    <TabPanel>
                        <div class="projects__panelSkill">
                            <div className="projects__skill">
                                <ProjectCard 
                                    logo="project/whatsapp.png"
                                    title="Whatsapp Clone"
                                    caption="MERN Stack"
                                    demoLink="https://whatsapp-clone-fb8df.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/whatsapp-clone-MERN_STACK"
                                />
                                <ProjectCard 
                                    logo="project/tiktok.png"
                                    title="TikTok Clone"
                                    caption="MERN Stack"
                                    demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/tiktok-clone-MERN-STACK"
                                />
                                <ProjectCard 
                                    logo="project/tinder.png"
                                    title="Tinder Clone"
                                    caption="MERN STACK"
                                    demoLink="https://tinder-clone-d5f17.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/tinder-clone-MERN-STACK"
                                />
                                <ProjectCard 
                                    logo="project/contrac.png"
                                    title="Contact Tracing App"
                                    caption="Mock Up"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/contact-tracing-app-figma"
                                />
                                <ProjectCard 
                                    logo="project/hilotea.png"
                                    title="Ordering System"
                                    caption="Mock Up"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/ordering-system-figma"
                                />
                                <ProjectCard 
                                    logo="project/marvel.png"
                                    title="Marvel Gallery"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/marvel-gallery-flutter"
                                />
                                <ProjectCard 
                                    logo="project/time.png"
                                    title="World Time"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/world-time-flutter"
                                />
                                <ProjectCard 
                                    logo="project/quote.png"
                                    title="Quotes App"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/quotes-app-flutter"
                                />
                                <ProjectCard 
                                    logo="project/profile.png"
                                    title="FB: Profile Clone"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/facebook-profile-app-figma"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="projects__panelSkill">
                            <div className="projects__skill">
                                <ProjectCard 
                                    logo="project/contrac.png"
                                    title="Contact Tracing App"
                                    caption="Mock Up"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/contact-tracing-app-figma"
                                />
                                <ProjectCard 
                                    logo="project/hilotea.png"
                                    title="Ordering System"
                                    caption="Mock Up"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/ordering-system-figma"
                                />
                                <ProjectCard/>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="projects__panelSkill">
                            <div className="projects__skill">
                                <ProjectCard 
                                    logo="project/whatsapp.png"
                                    title="Whatsapp Clone"
                                    caption="MERN Stack"
                                    demoLink="https://whatsapp-clone-fb8df.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/whatsapp-clone-MERN_STACK"
                                />
                                <ProjectCard 
                                    logo="project/tiktok.png"
                                    title="TikTok Clone"
                                    caption="MERN Stack"
                                    demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/tiktok-clone-MERN-STACK"
                                />
                                <ProjectCard 
                                    logo="project/tinder.png"
                                    title="Tinder Clone"
                                    caption="MERN STACK"
                                    demoLink="https://tinder-clone-d5f17.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/tinder-clone-MERN-STACK"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div class="projects__panelSkill">
                            <div className="projects__skill">
                                <ProjectCard 
                                    logo="project/marvel.png"
                                    title="Marvel Gallery"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/marvel-gallery-flutter"
                                />
                                <ProjectCard 
                                    logo="project/time.png"
                                    title="World Time"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/world-time-flutter"
                                />
                                <ProjectCard 
                                    logo="project/quote.png"
                                    title="Quotes App"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/quotes-app-flutter"
                                />
                                <ProjectCard 
                                    logo="project/profile.png"
                                    title="FB: Profile Clone"
                                    caption="Flutter"
                                    // demoLink="https://tiktok-clone-fb911.web.app/"
                                    githubLink="https://github.com/Aiyuuu033119/facebook-profile-app-figma"
                                />
                                <ProjectCard/>
                                <ProjectCard/>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Projects
