import { faFacebook, faGithub, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-section">
                <div className="copyright">
                    <p>Copyright 2021, <FontAwesomeIcon icon={faCopyright} /> All Rights are Reserved</p>
                </div>
                <div className="footer-icon">
                    <ul>
                        <a target='blank' href="https://web.facebook.com/anondobormon.bijoy/"><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faTwitter} /></li></a>
                        <a target='blank' href=""><li><FontAwesomeIcon icon={faGoogle} /></li></a>
                        <a target='blank' href="https://www.linkedin.com/in/anondo-bormon-32b84a210/"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                        <a target='blank' href="https://github.com/anondobormon"><li><FontAwesomeIcon icon={faGithub} /></li></a>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;