import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
