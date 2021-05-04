import React, { useEffect } from 'react';
import './Header.css';
import image1 from '../../../image/p2.png';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Header = () => {

    useEffect(() => {
        Aos.init({duration: 2000, delay: 0});
    }, [])

    return (
        <div id='home' className='header-main'>
            <div data-aos="fade-right" className="header">
                <div  className="main-header">
                    <h1 className='name'>Hey! I'm Anondo Bormon</h1>
                    <h2 >I'm a Web Developer
                    </h2>
                    <p>Creative web developer adept at contributing to the highly collaborative work environment, finding solutions, and determining customer satisfaction.</p>
                </div>
                <a href="#footer"><button className="btn-pro">HIRE ME</button></a>

                <a href="https://drive.google.com/file/d/1dYP4zwPVeD0MqWzIXzaJkC5CY1wi2XxO/view" target='blank'><button className="btn-pro">DOWNLOAD RESUME</button></a>

            </div>
            <div data-aos="fade-left" className="p-photo">
                <img src={image1} alt="" />
            </div>

        </div>
    );
};

export default Header;