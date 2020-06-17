import React from 'react';
import logo from './logo.svg';
import memoji from './memoji_smile.png';
import './App.css';
import Tasks from './GetTasks.js';
import Emoji from './Emoji.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={memoji} className="App-logo" alt="logo" />
        <br/>
        <Tasks />
      </header>
    </div>
  );
}

export default App;
