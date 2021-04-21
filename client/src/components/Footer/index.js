import React from 'react';
import './footer.css';

import linkedInSVG from '../../assets/svg/iconmonstr-linkedin-3.svg';
import githubSVG from '../../assets/svg/iconmonstr-github-1.svg';
import instagramSVG from '../../assets/svg/iconmonstr-instagram-8.svg';
import facebookSVG from '../../assets/svg/iconmonstr-facebook-3.svg';
import twitterSVG from '../../assets/svg/iconmonstr-twitter-3.svg';

function Footer() {
    return(
        <footer className="bottomNav">
            <nav>
                <a href="https://www.linkedin.com/in/nickmay9/" target="_blank">
                    <img src={linkedInSVG} alt='linkedin' style={{width:"40px", height:"40px"}}/>
                </a>
                <a href="https://github.com/nickmay9" target="_blank">
                    <img src={githubSVG} alt='github' style={{width:"40px", height:"40px"}}/>
                </a>
                <a href="https://www.instagram.com/nickmay9/" target="_blank">
                    <img src={instagramSVG} alt='instagram' style={{width:"40px", height:"40px"}}/>
                </a>
                <a href="https://www.facebook.com/nmay3" target="_blank">
                    <img src={facebookSVG} alt='facebook' style={{width:"40px", height:"40px"}}/>
                </a>
                <a href="https://twitter.com/nickmay93" target="_blank">
                    <img src={twitterSVG} alt='twitter' style={{width:"40px", height:"40px"}}/>
                </a>
            </nav>  
        </footer>
    );
}

export default Footer;