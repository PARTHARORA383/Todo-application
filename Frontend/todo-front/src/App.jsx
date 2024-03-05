import { useEffect, useState } from "react";
import * as ReactDOM from 'react-dom/client';
import { CreateTodo } from "./components/CreateTodo"
import { TodoRender } from "./components/TodoRender"
import { DeleteTodo } from "./components/DeleteTodo";


function App() {

  const [ todos , setTodos] = useState([]);


  useEffect( ()=>{
     const fetchdata = async ()=>{
      const res =  await fetch("http://localhost:5000/get");
      const json = await  res.json();
      setTodos(json.todos);
  
    }
    fetchdata();
  } , [])

  
  const handleDeleteTodo = (deletedId) => {
    // Update the state by removing the deleted todo
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== deletedId));
  };


  return ( 
  
      <div>
        <CreateTodo></CreateTodo>
        <TodoRender  todos = {todos} onDelete={handleDeleteTodo}/>
  
      


       </div>
  
  )
}

export default App
