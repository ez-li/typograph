import React, { useState } from 'react';
import './App.css';
import Search from 'FontItem.js';
import FontList from 'FontItem.js';

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
