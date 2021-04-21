import React from 'react';
import './nav.css';

function Nav() {

    return (
        <header className="flex-row topnav">
            <h2>
                <a href="/">Nick May Portolio</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li><a href="#aboutMe">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contactMe">Contact Me</a></li>
                    <li><a href='https://drive.google.com/file/d/14e8e7ODmAtUiaxqjbthksMEQhKS0x19G/view' target="_blank">Résumé</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;