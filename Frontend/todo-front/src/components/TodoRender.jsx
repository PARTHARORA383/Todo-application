import { DeleteTodo } from "./DeleteTodo"


export const TodoRender = ({todos}) => {
  return <div>
    {todos.map(function(todo) {
      return <div>
        <div className="Todo-box">
          <h4>{todo.id}</h4>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          {/*<DeleteTodo  prop = {todo.id} ></DeleteTodo>*/}
        </div>
      </div>
    })}
  </div> 

}