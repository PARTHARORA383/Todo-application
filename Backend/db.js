const mongoose = require ('mongoose')
 
mongoose.connect("mongodb+srv://partharora9128:Parth383@cluster0.naz1fvj.mongodb.net/todo_app"
)


const todoSchema = mongoose.Schema({
  
  id :{
    type : Number,
    unique : true 
  } ,
  title : String,
description : String,
}) 

const userSchema = mongoose.Schema({
  username : {
    type : String,
  
  },
  password : String
})

todoSchema.set('timestamps',true)
const todo = mongoose.model('todo',todoSchema);
const user = mongoose.model('user' , userSchema);
module.exports= {
  todo ,
  user
}


