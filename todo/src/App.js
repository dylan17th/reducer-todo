import React, { useState } from 'react';
import './App.css';

function App() {

  const [ input, setInput ] = useState('')

  const handleChanges = e => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>My Personal ToDo List </h1>
      <form>
        <h2>ToDo's:</h2>
        <label htmlFor='todo'></label>
        <input name='todo' id='todo' onChange={handleChanges} value={input}/>
      </form>
      <button>Add ToDo</button>
      <button>Marked as Complete</button>
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
