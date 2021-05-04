import React, { useEffect } from 'react';
import './Service.css';
import Aos from 'aos';
import 'aos/dist/aos.css'



const services = [
    {
        name: 'Consultation',
        des: 'I believe that in order to deliver a successful web project, the processes and approach must be right. From understanding the project and clients requirements to ensuring I use the most suitable technology.',
        icon: 'https://img.icons8.com/nolan/50/web.png'
    },
    {
        name: 'Web Development',
        des: 'Web development services imply designing, building A full-stack web development company with 21 years of experience in the field, ScienceSoft delivers highly available, functional and visually engaging web products and both platform-based and custom web solutions for enterprises.',
        icon: 'https://img.icons8.com/cute-clipart/50/000000/web.png'
    },
    {
        name: 'Logo Design',
        des: 'Our user-friendly editor will help you create the perfect logo for your business, sports club, organization, etc. in just a few clicks. Simply select a template from a variety of options, edit your logo until you are completely satisfied, and download your logo free of charge.',
        icon: 'https://img.icons8.com/nolan/50/designer.png'
    }
]

const Service = () => {
    useEffect(() => {
        Aos.init({duration: 2000, delay: 0});
    }, [])
    return (
        <section id='service' className='service-section'>
            <div className="service-container">
                <h1  data-aos="fade-down">My Services</h1>
                <p  data-aos="zoom-in">As a developer, one of the hardest tasks is to create a successful web application that gets the attention of potential service, especially when users use this application feel comfortable.</p>
            </div>
            <div className='services'>

                {
                    services.map(service =>
                        <div  className='service-details'>
                            <div className="service-icon">
                                <div data-aos="zoom-in"><img src={service.icon}/></div>
                            </div>
                            <div data-aos="zoom-in" className="service">
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