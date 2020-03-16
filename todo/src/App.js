import React, { useState, useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/reducer-todo';
import ToDo from './components/ToDoList.js'

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)
  const [ input, setInput ] = useState('');

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
      <div>
        <ToDo task={state.todo}/>
      </div>
      <button onClick={ () => dispatch({ type: 'ADD_TODO' , payload: {
        task: input,
        id: new Date(),
        Completed: false
      }
      }, setInput(''))}>Add ToDo</button>
      <button>Marked as Complete</button>
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
