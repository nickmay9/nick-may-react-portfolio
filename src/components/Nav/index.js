import React from 'react';
import './nav.css';

function Nav(props) {

    const {section, sectionSelected, setSectionSelected} = props;

    return (
        <header className="flex-row topnav">
            <h2>
                Nick May Portolio
            </h2>
            <nav>
                <ul className="flex-row">
                    {section.map((sec) => (
                        <li className={`${sec === sectionSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setSectionSelected(sec)
                            }}>
                                {sec}
                            </span>
                        </li>
                    ))}
                    <li><a href='https://drive.google.com/file/d/14e8e7ODmAtUiaxqjbthksMEQhKS0x19G/view' target="_blank">Résumé</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;