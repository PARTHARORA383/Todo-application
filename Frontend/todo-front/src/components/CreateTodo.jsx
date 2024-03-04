import { useState } from "react";

 export function CreateTodo  (){

  const[id , setId]=useState(0);
  const [title,setTitle] = useState("")
  const [ description , setDescription] = useState("")
  return <div>
       <div style={{background : "green"}}>
       <input id = "id"  style={{ padding : 10 , margin : 10}} placeholder = "No. of Todo" onChange={function(e){
        const value = e.target.value;
        setId(value);     
}}></input><br>
</br>
    <input id ="title" style={{ padding : 10 , margin : 10}} type = "text" placeholder="Title" onChange={function(e){
      const value = e.target.value;
      setTitle(e.target.value)
    }}></input><br>
    </br>
    <input  id = "description" style={{ padding : 10 , margin : 10}} type = "text" placeholder = "Description" onChange={function(e){
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
        id : id,
        title : title,
        description : description
        }),
        headers : {
          "Content-type":"application/json"
        }}).then(function(res){
        const json = res.json();
        console.log(json);
      }
    )}}> Add a Todo</button>
    {/* <button>Delete Todo</button> */}
    </div>
    </div>
  
  

}
