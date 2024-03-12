import {  useState } from "react";
import { CreateTodo } from "./components/CreateTodo"
import { TodoRender } from "./components/TodoRender"
import { FetchTodo } from "./components/FetchTodo";


function App() {

  const [ todos , setTodos] = useState([]);

  const handleDeleteTodo = (deletedId) => {
    // Update the state by removing the deleted todo
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== deletedId));
  };

  return ( 
  
      <div>
        <CreateTodo></CreateTodo>
        <TodoRender  todos = {todos} onDelete={handleDeleteTodo}/>
        <FetchTodo todos = {todos}  setTodos = {setTodos}/>
       </div>
  
  )
}

export default App
