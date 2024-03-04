
const express = require('express');
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());




app.post("/signup",async function(req,res){
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body. description;
  //Put in database 
  await todo.create({
    id  : id,
    title : title,
    description:description
  })
  res.json({
    msg : "todo created"
  })
})

app.get("/get",async function(req,res){
 const todos =  await todo.find({})
 res.json({
  todos
 })
})

app.delete('/delete/:id', async (req,res)=>{
 let delid = req.params.id;
await todo.deleteOne({id : delid}).then(result=>{
  res.json({
    msg : "todo - deleted"
  });
})

})
app.listen(5000,()=>{
   console.log("Hello bitch")
})



