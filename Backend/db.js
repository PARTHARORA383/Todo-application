const mongoose = require ('mongoose')
 
mongoose.connect("mongodb+srv://partharora9128:Parth383@cluster0.naz1fvj.mongodb.net/todo_app"
)


const todoSchema = mongoose.Schema({
  /*_id :{
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto : true
  },*/
  id :{
    type : Number,
    unique : true 
  } ,
  title : String,
description : String,
}) 


todoSchema.set('timestamps',true)
const todo = mongoose.model('todo',todoSchema);

module.exports= {
  todo 
}


