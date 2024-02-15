
import { useState } from 'react';
import './App.css';

const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([])
  const[todoText, settodoText] = useState("")

  const onChanageTodotext = (event) =>{ settodoText(event.target.value)}

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos,todoText]
    setincompleteTodos(newTodos)
    settodoText("")
  }

  const onClickDelete = (index) =>{
    const newTodos = [...incompleteTodos]
    newTodos.splice(index,1)
    setincompleteTodos(newTodos)
  }

  const onClickComplete = (index) =>{
    onClickDelete(index)
    const newCompleteTodos = [...completedTodos,incompleteTodos[index]]
    setcompletedTodos(newCompleteTodos)
  }

  const onClickRestore = (index) => {
    const newCompleteTodos = [...completedTodos]
    newCompleteTodos.splice(index,1)
    setcompletedTodos(newCompleteTodos)

    const newTodos = [...incompleteTodos,completedTodos[index]]
    setincompleteTodos(newTodos)

  }

  return (
    <>
      <div className='input-area'>
        <input placeholder="Enter what you have to do" type="text" value={todoText} onChange={onChanageTodotext}/>
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>Incomplete tasks</p>

        <ul>
          {incompleteTodos.map((todo,index)=>{
            return(
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>Complete</button>
                  <button onClick={() => onClickDelete(index)}>Delete</button>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
      <div className='complete-area'>
        <p className='title'>Completed tasks</p>
        <ul>
          {completedTodos.map((todo,index)=>{
            return(
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button onClick={()=>{onClickRestore(index)}}>Restore</button>
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
