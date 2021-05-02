import React from 'react';
import './Header.css'
import Typical from 'react-typical'
import { CircleProgress } from 'react-gradient-progress'

const Header = () => {
    const steps = [
        ' a Web Developer', 1000,
        ' a Designer ', 1000,

    ];
    return (
        <div id='home' className='header-main'>
            <div className="header">
                <div className="main-header">
                    <h1 className='name'>Hey! I'm Anondo Bormon</h1>
                    <h2 >I'm
                    <span className='animate'>
                            <Typical wrapper="span" steps={steps} loop={10000} className={'caca'} />
                        </span>
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusantium culpa quia eligendi repellendus cumque hic animi saepe, voluptatem quam doloremque quos necessitatibus facilis impedit nesciunt perspiciatis tempora quis. Quam!</p>
                </div>
                <button className="btn-pro">HIRE ME</button>
                <button className="btn-pro">DOWNLOAD RESUME</button>
            </div>

        </div>
    );
};

export default Header;