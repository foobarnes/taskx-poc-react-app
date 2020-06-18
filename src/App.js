import React from 'react';
import memoji from './memoji_smile.png';
import './App.css';
import Tasks from './GetTasks.js';
// import FeedbackForm from './FeedbackForm.js';
import Menu from './Menu.js';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={memoji} className="App-logo" alt="logo" />
        <br/>
        <Tasks />
      </header>
    </div>
  );
}

export default App;
