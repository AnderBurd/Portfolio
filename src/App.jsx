import Intro from './components/intro.jsx';
import Projects from './components/projectSection.jsx';
import Contact from './components/contactMe.jsx';
import './styling/App.css';
import React from 'react';
function App() {

  return (
    <div className = "App">
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
