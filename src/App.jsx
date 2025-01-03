import Intro from './components/intro.jsx';
import Projects from './components/projectSection.jsx';
import './styling/App.css';
import React from 'react';
function App() {

  return (
    <div className = "App">
      <Intro />
      <Projects />
    </div>
  );
};

export default App;
