import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoComplete } from './components/auto-complete';
import data from './data/data.json';
function App() {
  return (
    <div className="App">
     <h2>Auto Complete Using Simple React AutoComplete Tsx</h2>
    <AutoComplete
        iconColor="blue" data={data}    />
    </div>
  );
}

export default App;
