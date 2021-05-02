import React from 'react';
import './Project.css'
import img from '../../../image/bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id='projects'>
            <div className="project-heading">
                <h1>Projects</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolores fugit, alias minus possimus tempora sit! Ea error accusantium facilis!</p>
            </div>
            <div className="work">
                <div className="project">
                    <div className="project-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="details">
                            <small>01</small>
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae?. Incidunt, illum.</p>
                            <button className="project-btn">React JS</button>
                            <button className="project-btn">Node JS</button>
                            <button className="project-btn">Express JS</button>
                            <button className="project-btn">MongoDB</button>
                            <div className="project-link">
                            <a className='link' target='blank' href="https://www.google.com/"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className='link' target='blank' href=""><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="details">
                            <small>01</small>
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae?. Incidunt, illum.</p>
                            <button className="project-btn">React JS</button>
                            <button className="project-btn">Node JS</button>
                            <button className="project-btn">Express JS</button>
                            <button className="project-btn">MongoDB</button>
                            <div className="project-link">
                            <a className='link' target='blank' href="https://www.google.com/"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className='link' target='blank' href=""><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="project-details">
                        <div className="details">
                            <small>01</small>
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quae?. Incidunt, illum.</p>
                            <button className="project-btn">React JS</button>
                            <button className="project-btn">Node JS</button>
                            <button className="project-btn">Express JS</button>
                            <button className="project-btn">MongoDB</button>
                            <div className="project-link">
                            <a className='link' target='blank' href="https://www.google.com/"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className='link' target='blank' href=""><FontAwesomeIcon icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Projects;