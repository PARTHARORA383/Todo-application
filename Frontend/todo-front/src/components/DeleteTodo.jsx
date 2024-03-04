

export function DeleteTodo(prop , prop1 , prop2){

  return<>

  <button style={{padding : 10 , margin : 10}} onClick={()=>{(fetch(`http://localhost:5000/delete/${prop}`,
  {method: 'DELETE',
  body:JSON.stringify({
      id : prop,
      // title : prop1,
      // description : prop2
  }),
  headers:{
    'Content-Type': 'application/json'
  }
} )).then(function(res){
    console.log("hello");
    res.json().then((result)=>{
      console.log(result); 
    })
    })
   }}>
  </button>
  </>
}