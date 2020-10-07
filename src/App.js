import React,{useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';

function App() {
  const [todos, setState] = useState([
    {title:'finishup todo app assignment', id:uuidv4}
  ]);
  const addTodo = (title) =>{
    setState([...todos,{title,id:uuidv4 }])
  }
  return (
    <div className="App container">
      <h1>To-do APP</h1>
      <ol>
        {todos.map(todo => {
          return(<li key={todo.id}>{todo.title}</li>)
        })}
      </ol>
   <Todo addTodo={addTodo}/>
    </div>
  );
}

export default App;
