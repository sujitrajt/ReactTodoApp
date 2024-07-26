import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([]);
  const addTodo = () => {
    if(todo !== '') {
      setTodos([...todos,todo])
      console.log(todos)
      setTodo("");
    }
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <div>
        <input type='text' name='todo' value={todo} placeholder='Create a new todo' onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' onClick={addTodo}>Add</button>
      </div>
      {todos?.length > 0 ? (
              <ul>
              {todos.map((todo,index)=> (
                <div>
                  <li key={index}>{todo}</li>
                  <button onClick={() => deleteTodo(todo)}>Delete</button>
                </div>
              ))}
            </ul>
      ) : (
        <div><p>No Task Found</p></div>
      )}

    </div>
  );
}

export default App;
