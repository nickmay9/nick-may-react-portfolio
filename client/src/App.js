import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
