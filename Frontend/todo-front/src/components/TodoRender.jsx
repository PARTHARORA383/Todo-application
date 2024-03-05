import { DeleteTodo } from "./DeleteTodo"


export const TodoRender = ({todos , onDelete}) => {
  return <div>
    {todos.map(function(todo) {
      return <div key={todo.id}>
        <div>
        <div className="Todo-box">
          <h4>{todo.id}</h4>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <DeleteTodo  id = {todo.id}  onDelete ={onDelete}></DeleteTodo>
        </div>
      </div>
      </div>
    })}
  </div> 

}