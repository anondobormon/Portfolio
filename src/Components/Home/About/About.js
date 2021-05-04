import React, { useEffect } from 'react';
import './About.css'
import image from '../../../image/p.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faFacebook, faGit, faGithub, faGooglePlusG, faHtml5, faLinkedin, faNodeJs, faPinterest, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000, delay: 100});
    }, [])

    return (
        <div id='about' className='about-me'>
            <div className="about">
                <div data-aos="fade-right" className="image">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <a href="https://drive.google.com/file/d/1dYP4zwPVeD0MqWzIXzaJkC5CY1wi2XxO/view" target='blank'><button className="btn-resume">Download resume</button></a>

                </div>
                <div data-aos="fade-left" className="me">
                    <h1>I'm Anondo Bormon</h1>
                    <h2 style={{ color: 'goldenrod' }}>Web Developer </h2>
                    <p>Creative web developer adept at contributing to the highly collaborative work environment, finding solutions, and determining customer satisfaction. Average analytical skills and strong attention to detail in order to deliver
                    original and efficient web solutions, provide technical knowledge and expertise build a new website from start to finish, and successfully manage a team of web developers and proven experience developing consumer-focused websites, using HTML, CSS, JavaScript, React, Node JS, MongoDB build for a web application.</p>
                    <div className="bio">
                        <div className="phone">
                            <p>Age: 26</p>
                            <p>Address: A.K. Khan, Chittagong</p>
                            <p>Email: a.bormon28@gmail.com</p>
                        </div>
                        <div className="phone">
                            <p>Phone: +01790841023</p>
                            <p>Website</p>
                            <p>Nationality: Bangladeshi</p>
                        </div>
                    </div>
                    {/* <button className="btn-pro">Hire me</button> */}
                    <ul className='icon'>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faGithub} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faHtml5} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faCss3} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faReact} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faBootstrap} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faNodeJs} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faGit} /></li></a>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;