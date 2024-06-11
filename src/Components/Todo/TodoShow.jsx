
//import TodoForm from './TodoForm'

import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import API from "../../Api/TodoApi"
import TodoCompleted from "./TodoCompleted"

const TodoShow = () => { 
    const {id}= useParams()
    console.log(id)
    const {data : todo , isLoading , isError  ,error }= useQuery(['todo', id] ,()=> API.get(id))

    console.log(todo)
  if (isLoading) {
    return <h6>Loading ...</h6>
}

if (isError) {
    return <div className="alert alert-danger" role="alert">
        <strong>Error: </strong> {error.message}
    </div>
}
  return (
   
   
    <div className="card">
            <div className="card-body">
                <h5 className="card-title">{id}  {todo.title}  <TodoCompleted completed = {todo.completed}/></h5> 
    </div>
    </div>
  )
}

export default TodoShow