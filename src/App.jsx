import Intro from './components/intro.jsx';
import Projects from './components/projects.jsx';
import './styling/App.css';
import React from 'react';
function App() {

  return (
    <div className = "App">
      <header className="App-header">My Portfolio</header>
      <Intro />
      <Projects />
    </div>
  );
};

export default App;
