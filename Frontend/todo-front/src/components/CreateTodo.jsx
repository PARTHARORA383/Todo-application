import { useState } from "react";

 export function CreateTodo  (){

  const [title,setTitle] = useState("")
  const [ description , setDescription] = useState("")
  return <div>
       <div style={{background : "green"}}>
    <input id ="title" style={{ padding : 10 , margin : 10}} type = "text" placeholder="Title" onChange={function(e){
      const value = e.target.value;
      setTitle(e.target.value)
    
    }}></input><br>
    </br>
    <input  id = " description" style={{ padding : 10 , margin : 10}} type = "text" placeholder = "Description" onChange={function(e){
      const value = e.target.value;
      setDescription(e.target.value)

    }}></input><br>
    </br>
    <button style={{ padding : 10 , margin : 10}} onClick={()=>{fetch("http://localhost:5000/signup",

    {
      method : 
        "POST"
      ,
      body:JSON.stringify({
        title : title,
        description : description

        }),
        headers : {
          "Content-type":"application/json"
        }}).then(
      async function(res){
        const json = res.json();
        

      }
    )}}> Add a Todo</button>
    </div>
    </div>
  
  

}