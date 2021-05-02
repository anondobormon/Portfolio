import React from 'react';
import './About.css'
import image from '../../../image/p.png'
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
                    <a href="https://drive.google.com/file/d/1dYP4zwPVeD0MqWzIXzaJkC5CY1wi2XxO/view" target='blank'><button className="btn-resume">Download resume</button></a>
                    
                </div>
                <div className="me">
                    <h1>I'm Anondo Bormon</h1>
                    <h2 style={{color:'goldenrod'}}>Web Developer </h2>
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
                    {/* <button className="btn-pro">Hire me</button> */}
                    <ul className='icon'>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faTwitter} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faGooglePlusG} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faReact} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faPinterest} /></li></a>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;