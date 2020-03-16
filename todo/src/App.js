import React, { useState, useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/reducer-todo';


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
        {state.todo.map( task => (
          <div key={task.id} onClick={ ()=> dispatch({type:'MARKING_AS_COMPLETE', payload: task.id })} className={`${task.completed === true ? 'completed' : ''}`}>
            <div >{task.task}</div>
          </div>
        ))}
      </div>
      <button onClick={ () => dispatch({ type: 'ADD_TODO' , payload: {
        task: input,
        id: new Date(),
        Completed: false 
      }},
       setInput(''))}>Add ToDo</button>
      <button onClick={()=> dispatch({type:'CLEARING_COMPLETED'})}>Clear Completed</button>
    </div>
  );
}

export default App;

