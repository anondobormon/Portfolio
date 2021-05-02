import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Skill.css'
const Skill = () => {




    return (
        <div>
            <div className="my-skill">
                <h1>MY SKILLS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum odio earum reiciendis saepe consequatur sunt aspernatur pariatur ipsum, magni rerum.</p>
            </div>
            <div className="progress-bar">
                <div class="progress ">
                    <div class="progress-bar bg-info" role="progressbar" style={{ width: " 80%", ariaValuenow: "50", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                </div>
                <p>this is </p>
                <div class="progress ">
                    <div class="progress-bar bg-danger" role="progressbar" style={{ width: " 50%", ariaValuenow: "50", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                </div>
            </div>



            {/* <div id="circleBar">
                <h1>CIRCLE progress bar</h1>
                <p>
                    Animated circle bar design
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="round" defaultValue='0.87' >
                                <strong></strong>
                                <span><FontAwesomeIcon icon={faHtml5} />HTML SKILLS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Skill;