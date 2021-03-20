import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './about.css';

import cfImage from '../../assets/images/0E2D6474-F560-4EFD-899A-31E4F9C6A190.jpeg';
import surfImage from '../../assets/images/58EB85D3-3812-4221-BE02-77E0C26656BA_1_105_c.jpeg';
import hikeImage from '../../assets/images/EF33746B-78CC-403E-9EE4-80961DE77034_1_105_c.jpeg';

function About() {
    const slideImages = [
        hikeImage,
        surfImage,
        cfImage
    ];

    return (
        <section>
            <div className="title">
                <h1>About Me</h1>
            </div>
            <p className="aboutMe">
                I'm a graduate of the University of North Florida where I earned my Bachelor's in Electrical
                Engineering and minor in Computer Science. While attending UNF, I was a member of D1 Men's Soccer
                Program. I played central midfield there and was a key part of the team that brought home the first
                conference title for the program and earned the program's first birth into the NCAA tournament.

                I love to live a very active lifestyle. I spent the majority of my life up until I was 23 playing
                soccer competetively. Since then I've started to find other things I'm passionate about. I learned how to surf and
                fell in love with it and now travel the world to surf. I also found crossfit and I am now getting into doing
                triathlon's.
            </p>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)}
                </Slide>
            </div>
        </section>
    );
}

export default About;