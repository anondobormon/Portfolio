import React from 'react';
import './Service.css';



const services = [
    {
        name: 'Consultation',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.',
        icon: 'https://img.icons8.com/nolan/50/web.png'
    },
    {
        name: 'Web Development',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.',
        icon: 'https://img.icons8.com/cute-clipart/50/000000/web.png'
    },
    {
        name: 'Logo Design',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.',
        icon: 'https://img.icons8.com/nolan/50/designer.png'
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
                                <div><img src={service.icon}/></div>
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