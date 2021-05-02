import React from 'react';
import './About.css'
import image from '../../../image/Banana.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG, faLinkedin, faPinterest, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div id='about' className='about-me'>
            <div className="about">
                <div className="image">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <button className="btn-resume">Download resume</button>
                </div>
                <div className="me">
                    <h1>About me Anondo Bormon</h1>
                    <h2>Web Developer and Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus officiis distinctio expedita dignissimos vitae labore explicabo quos atque minima doloribus sed voluptatum dolores aspernatur et quasi asperiores debitis tenetur nesciunt aliquid odit eligendi nemo, sunt amet. Mollitia nemo numquam ullam molestiae fugit nostrum laboriosam molestias dignissimos iure, sapiente reprehenderit eos itaque id asperiores vitae impedit accusantium voluptatibus sequi exercitationem recusandae beatae totam. Est, nihil. Amet, dolorem explicabo rerum quas reprehenderit id aut adipisci, possimus cupiditate nisi quos quaerat molestiae, nulla minima voluptas ab mollitia deserunt eum doloremque unde veritatis eius odio. Blanditiis dolore ducimus reiciendis quae provident accusamus incidunt?</p>
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
                    <button className="btn-pro">Hire me</button>
                    <ul className='icon'>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faTwitter} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faGooglePlusG} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faReact} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faPinterest} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                    <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;