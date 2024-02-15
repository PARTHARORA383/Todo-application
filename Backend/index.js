
const express = require('express');
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup",async function(req,res){
  
  const title = req.body.title
  const description = req.body.description


  //Put in database 
  await todo.create({
    title : title,
    description:description
  })

  res.json({
    msg : "todo created"
  })


})

app.get("/hlo",async function(req,res){
 const todos =  await todo.find({})

 res.json({
  todos
 })
})

app.listen(5000,()=>{
   console.log("Hello bitch")
})