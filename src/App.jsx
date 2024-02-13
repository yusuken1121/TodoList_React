
import { useState } from 'react';
import './App.css';

const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState(["test1","test2"]);
  const [completedTodos, setcompletedTodos] = useState(["test3","test4"])
  return (
    <>
      <div className='input-area'>
        <input placeholder="Enter what you have to do" type="text" />
        <button>Add</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>Incomplete tasks</p>
        <ul>
          {incompleteTodos.map((todo)=>{
            return(
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>Complete</button>
                  <button>Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>Completed tasks</p>
        <ul>
          {completedTodos.map((todo)=>{
            return(
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>Restore</button>
                </div>
              </li>
            )
          })}
            
            
        </ul>
      </div>


    </>

    
  );
}

export default App;
