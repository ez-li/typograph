import React, { useState } from 'react';
import './App.css';
import Search from './Search.js';
import FontList from './FontList.js';

function App() {

  const [{ fonts }, setState] =
    useState({ 
      fonts: []
    })

  return (
    <div className="App">
        <p>hello world</p>
      <div className="main">
        <Search />
        <FontList fonts={fonts} />
      </div>
    </div>
  );
}

export default App;
