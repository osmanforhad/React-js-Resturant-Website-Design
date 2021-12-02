import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                    <button>Read More</button>
                </p>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
        </div>
    )
}

export default About
