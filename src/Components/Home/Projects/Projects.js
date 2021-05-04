import React, { useEffect } from 'react';
import './Project.css'
import img1 from '../../../image/lesopabeauty.png'
import img2 from '../../../image/bdriders.png'
import img3 from '../../../image/league.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 2000, delay: 0});
    }, [])
    return (
        <section id='projects'>
            <div className="project-heading">
                <h1 data-aos="fade-down">Projects</h1>
                <p data-aos="zoom-out">Web development is the most important if you have a plan to enter in the online world. Website is considered like a window to the world of internet. In today’s business environment totally depend on virtual communication and to beat your competition large or small companies definitely you need to develop a good and Responsive Website.</p>
            </div>
            <div className="work">
                <div className="project">
                    <div  className="project-image">
                        <img src={img1} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="details">
                            <small>01</small>
                            <h1>Lesopa Beauty</h1>
                            <p>This is single page website. User can book appointment easily and see all booking list. User must be face login page and have an admin panel there admin can update anything</p>
                            <button className="project-btn">React JS</button>
                            <button className="project-btn">Node JS</button>
                            <button className="project-btn">Express JS</button>
                            <button className="project-btn">MongoDB</button>
                            <div className="project-link">
                            <a className='link' target='blank' href="https://github.com/anondobormon/Lesopa-Beauty-Client"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className='link' target='blank' href="https://leospa-beauty.web.app/"><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="details">
                            <small>02</small>
                            <h1>BD Riders</h1>
                            <p>Ride shearing related app. User can share ride easily. Enter destination page first face login page and then give form and to destination and then confirm share</p>
                            <button className="project-btn">React JS</button>
                            <button className="project-btn">Node JS</button>
                            <button className="project-btn">Express JS</button>
                            <button className="project-btn">MongoDB</button>
                            <div className="project-link">
                            <a className='link' target='blank' href="https://github.com/anondobormon/BD-Riders"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className='link' target='blank' href="https://bd-rider-aff06.web.app/"><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="details">
                            <small>03</small>
                            <h1>Champion League</h1>
                            <p>Football related web application there is show team and details of team.</p>
                            <button className="project-btn">React JS</button>
                            <button className="project-btn">Node JS</button>
                            <button className="project-btn">Express JS</button>
                            <div className="project-link">
                            <a className='link' target='blank' href="https://github.com/anondobormon/Champion-League"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className='link' target='blank' href="https://sharp-leakey-5bb830.netlify.app/"><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Projects;