import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo"
import { TodoRender } from "./components/TodoRender"
import { DeleteTodo } from "./components/DeleteTodo";


function App() {

  const [ todos , setTodos] = useState([]);

  useEffect(()=>{
    const fetchdata = async ()=>{
     try{
       const res = await fetch("http://localhost:5000/get");
        const json =  res.json();
        setTodos(json.todos)
     }
     catch(error){
      console.error("Error detected" , error);
     }
    }
    fetchdata();
  },[todos])
  return ( 
      <div>
        <CreateTodo></CreateTodo>
        <TodoRender  todos = {todos}/>
        {/* <DeleteTodo prop = {todos}/> */}
        

       </div>
  
  )
}

export default App
