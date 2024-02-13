
import './App.css';

function App() {
  return (
    <>
      <div className='input-area'>
        <input placeholder="Enter what you have to do" type="text" />
        <button>Add</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>Incomplete tasks</p>
        <ul>
            <li className='list-row'>
              <p className='todo-item'>create a todo list</p>
              <button>Complete</button>
              <button>Delete</button>
            </li>
            <li className='list-row'>
              <p className='todo-item'>create a todo list</p>
              <button>Complete</button>
              <button>Delete</button>
            </li>
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>Completed tasks</p>
        <ul>
            <li className='list-row'>
              <p className='todo-item'>create a todo list</p>
              <button>Restore</button>
            </li>
            <li className='list-row'>
              <p className='todo-item'>create a todo list</p>
              <button>Restore</button>
              
            </li>
        </ul>
      </div>


    </>

    
  );
}

export default App;
