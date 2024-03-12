
import { useEffect } from "react"
export function FetchTodo({todos , setTodos}){

  useEffect(()=>{
    const fetchdata = async ()=>{
     const res =  await fetch("http://localhost:5000/get");
     const json = await  res.json();
     setTodos((prevTodos) => {
      // Use a callback to update state based on the previous state
      if (JSON.stringify(prevTodos) !== JSON.stringify(json.todos)) {
        // Only update state if the todos have changed
        return json.todos;
      }
      return prevTodos;
    });
 
   }
   fetchdata();
  
 } , [todos])
  
  return <div>
  
  </div>

}