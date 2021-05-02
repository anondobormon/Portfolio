import React from 'react';
import './Header.css';
import image1 from '../../../image/p2.png';


const Header = () => {
   


    return (
        <div id='home' className='header-main'>
            <div className="header">
                <div className="main-header">
                    <h1 className='name'>Hey! I'm Anondo Bormon</h1>
                    <h2 >I'm a Web Developer
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusantium culpa quia eligendi repellendus cumque hic animi saepe, voluptatem quam doloremque quos necessitatibus facilis impedit nesciunt perspiciatis tempora quis. Quam!</p>
                </div>
                <a href="#footer"><button className="btn-pro">HIRE ME</button></a>
                
                <a href="https://drive.google.com/file/d/1dYP4zwPVeD0MqWzIXzaJkC5CY1wi2XxO/view" target='blank'><button className="btn-pro">DOWNLOAD RESUME</button></a>
                
            </div>
            <div className="p-photo">
                <img src={image1} alt=""/>
            </div>

        </div>
    );
};

export default Header;