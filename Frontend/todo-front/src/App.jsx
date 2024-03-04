import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo"
import { TodoRender } from "./components/TodoRender"
import { DeleteTodo } from "./components/DeleteTodo";


function App() {

  const [ todos , setTodos] = useState([]);


  useEffect(()=>{

    fetch("http://localhost:5000/hlo").then(
      async function(res){
        const json = await res.json();
        setTodos(json.todos)
      }
    )

  },[todos])


  return ( 
  
      <div>
        <CreateTodo></CreateTodo>
        <TodoRender  todos = {todos}/>
        
       



       </div>
  
  )
}

export default App
