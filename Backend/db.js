const mongoose = require ('mongoose')
 
mongoose.connect("mongodb+srv://partharora9128:Parth383@cluster0.naz1fvj.mongodb.net/todo_app")

const todoSchema = mongoose.Schema({
title : String,
description : String,
})


const todo = mongoose.model('todo',todoSchema);

module.exports= {
  todo 
}


