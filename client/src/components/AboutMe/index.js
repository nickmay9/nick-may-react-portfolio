import React from 'react';
import './about.css';

import aboutImg from '../../assets/aboutImages/D5B0A064-DFA2-4456-AF5E-DAFAD7F17196_1_105_c.jpeg'


function About() {

    return (
        <section id="aboutMe"className="sectionMargin" >
            <img src={aboutImg} className="imgContainer"></img>
            <div className="aboutContainer">
                <div className="title">
                    <h1>About Me</h1>
                </div>
                <p className="aboutContent">
                    I graduated from the University of North Florida with a degree in Electrical Engineering and a minor in Computer Science. While at UNF, I was a student athlete playing for the soccer team. In my Senior season I helped the team to it's first ever division 1 conference title and NCAA tournament birth.
                    <br></br>
                    <br></br>
                    After college, I stumbled around doing a test engineering job and most recently a sales engineering job. During that time, a couple things remained true: 1) I really like software, programming, and everything to do with it. and 2) I love fitness and health.
                    <br></br>
                    <br></br>
                    I am now training for my first Ironman and looking for a way to bring my passion for fitness and software together to be able help people pursue their own goals. I have extensive knowledge in Javascript, MySQL, SQL, MERN Stack, and much more.
                </p>
            </div>
        </section>
    );
}

export default About;