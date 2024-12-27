import React, { useRef } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';
import './App.css';

function App() {
  const aboutRef = useRef(null); // Create a ref for About component
  const projectsRef = useRef(null); // Create a ref for Projects component
  const contactRef = useRef(null); // Create a ref for Contact

  return (
    <>
      {/* Pass the ref as a prop to Intro */}
      <Intro aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Pass the ref as a prop to Projects */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      {/* Pass the ref as a prop to Contact */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;