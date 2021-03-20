import React from 'react';

function Nav() {

    return (
        <header className="flex-row topnav">
            <h2>
                <a href="/">Nick May Portolio</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                    <li>Résumé</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;