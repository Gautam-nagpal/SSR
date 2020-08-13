import React from 'react';
import './App.css';
import { Homepage } from './container';

function App(props) {
  return (
    <div className="App">
      <Homepage {...props} />
    </div>
  );
}

export default App;
