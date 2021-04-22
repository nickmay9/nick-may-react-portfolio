import React, { useState } from 'react';
import './projects.css';

function Projects(){
    //object array to hold project info
    const [projects] = useState([
        {
            source: "BootCamp-Project2.png",
            title: "Travel Blog",
            link: "https://travel-blog-project2.herokuapp.com/"
        },
        {
            source: "Image 12-4-20 at 2.49 PM.jpeg",
            title: "Movie App",
            link: "https://nickmay9.github.io/MovieApp-TeamProject1/"
        },
        {
            source: "Image 12-4-20 at 3.01 PM.jpeg",
            title: "What's the Weather",
            link: "https://nickmay9.github.io/weatherApp-challenge6/"
        },
        {
            source: "project-3.jpeg",
            title: "ReadMe Generator",
            link: "https://github.com/nickmay9/proReadme-challenge9"
        },
        {
            source: "project-4.jpeg",
            title: "Portfolio Generator",
            link: "https://github.com/nickmay9/portfolio-generator"
        },
        {
            source: "project-5.jpeg",
            title: "Taskmaster Pro",
            link: "https://nickmay9.github.io/taskmaster-pro/"
        }
    ]);

    return(
        <section id="projects" className="sectionMargin">
            <div className="title projectTitle">
                <h1>Projects</h1>
            </div>
            <div className="projectFlex">
                {projects.map(project => ( 
                    <div>
                        <img
                            src={require(`../../assets/projectImages/${project.source}`).default}
                            alt={project.title}
                            key={project.title}
                        />
                        <h3>{project.title}</h3>
                        <button className="projectBtn" onClick={() => {window.open(project.link)}}>View Deployed Project</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;