import { useEffect, useState } from "react";
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


  return ( 
  
      <div>
        <CreateTodo></CreateTodo>
        <TodoRender  todos = {todos}/>
  
        
       



       </div>
  
  )
}

export default App
