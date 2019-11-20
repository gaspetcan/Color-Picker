import React from 'react';
import './App.css';
import Button from './Button';


function App() {

  const createTable = (n) => {
     let table = []
     for (let i = 0; i < n; i++) {
         table.push(<Button/>)
     }
     return table
  }

  return (
    <div className="App">
        <h1>Color Picker</h1>
        {createTable(30)}
    </div>
  );
}

export default App;
