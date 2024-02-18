
import { useState } from 'react';
import './App.css';
import { InputTodos } from './components/InputTodo';
import { IncompleteTodos } from './components/Incomplete';
import { CompleteTodos } from './components/Complete';

const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([])
  const[todoText, settodoText] = useState("")

  const onChangeTodotext = (event) =>{ settodoText(event.target.value)}

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
      <InputTodos
        todoText = {todoText}
        onChange = {onChangeTodotext}
        onClick = {onClickAdd}
      />

      <IncompleteTodos
        incomplete = {incompleteTodos}
        onClickComplete = {onClickComplete}
        onClickDelete = {onClickDelete}

      />

      <CompleteTodos
        complete = {completedTodos}
        onClickRestore = {onClickRestore}
      
      />
      
      
    </>    
  );
}

export default App;
