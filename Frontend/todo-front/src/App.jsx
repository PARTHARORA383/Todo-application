import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo"
import { TodoUpdate } from "./components/TodoUpdate"


function App() {

  const [ todos , setTodos] = useState([]);

  fetch("http://localhost:5000/hlo").then(
    async function(res){
      const json = await res.json();
      setTodos(json.todos)
    }
  )

  return ( 
  
      <div>
        <CreateTodo></CreateTodo>
        <TodoUpdate  todos = {todos}/>
       



       </div>
  
  )
}

export default App
