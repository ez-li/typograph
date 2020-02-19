import React, { useState } from 'react';
import './App.css';
import Search from './Search.js';
import FontList from './FontList.js';

function App() {

  const [{ fonts }, setState] =
    useState({ 
      fonts: ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia','Garamond', 'Comic Sans', 'Impact']
    });

  const updateList = (name) => {
    var list = fonts;
    list.push(name);
    setState(prevState => ({
      ...prevState, fonts: list
    }))
  }

  return (
    <div className="App">
      <div className="main">
        <Search updatelist={updateList}/>
        <FontList fonts={fonts} />
      </div>
    </div>
  );
}

export default App;
