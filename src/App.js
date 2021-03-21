import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const section = ['About Me', 'Projects', 'Contact Me'];
  const [sectionSelected, setSectionSelected] = useState(section[0]);

  return (
    <div>
      <Nav
        section={section}
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      ></Nav>
      <main>
        {sectionSelected === section[0] && (
          <About></About>
        )}
        {sectionSelected === section[1] && (
          <Projects></Projects>
        )}
        {sectionSelected === section[2] && (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
