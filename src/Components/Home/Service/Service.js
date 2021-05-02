import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



const services = [
    {
        name: 'Consultation',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.',
        icon: 'icon'
    },
    {
        name: 'Web Development',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.',
        icon: 'icon'
    },
    {
        name: 'Logo Design',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.',
        icon: 'icon'
    }
]

const Service = () => {
    return (
        <section id='service' className='service-section'>
            <div className="service-container">
                <h1>My Services</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, rerum temporibus. Veritatis, facilis molestias quae dignissimos eveniet aperiam dolore reprehenderit!</p>
            </div>
            <div className='services'>

                {
                    services.map(service =>
                        <div className='service-details'>
                            <div className="service-icon">
                                <div><FontAwesomeIcon icon={faFacebook} /></div>
                            </div>
                            <div className="service">
                                <h2>{service.name}</h2>
                                <p>{service.des}</p>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Service;