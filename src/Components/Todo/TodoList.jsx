import API from "../../Api/TodoApi.js";

import { Link } from "react-router-dom";
import { useQuery } from "react-query";

export default function TodoList() {
  const { data: todos ,isError , isLoading , error , refetch , isFetching} = useQuery(["todos"],API.getAll , {
    refetchOnWindowFocus : false,
    //refetchOnMount : true,
    //enabled : true,
    retry : 2 ,
   cacheTime :5000,
   staleTime : 3000,
   refetchOnReconnect: true,
   //refetchInterval : 3000
    onError : (err)=>{
      console.log(err)
    },
    onSuccess : (data)=>{
      console.log(data)
    }
  });
 

  if (isLoading) {
    return <h6>Loading ...</h6>
}

if (isError) {
    return <div className="alert alert-danger" role="alert">
        <strong>Error: </strong> {error.message}
    </div>
}


  const deleteCallback = async (e) => {
    e.preventDefault();

    const id = parseInt(e.currentTarget.dataset.id);
    await API.delete(id).then(() => {});
  };
  return (
    <>

    <button disabled={isFetching} className="btn btn-primary" onClick={refetch}>refetch</button>
      <h2 className="text-primary">Todo List</h2>
      <hr />
      {
        <table className="table table-responsive text-center">
          <thead className="thead-inverse">
            <tr>
              <th>#id</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos?.data?.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <span
                    className={`badge bg-${
                      todo.completed ? "success" : "danger"
                    } rounded-5 border-1`}
                  >
                    &nbsp;
                  </span>
                </td>
                <td>
                  <Link
                    className={"btn btn-sm mx-1 btn-primary rounded-1"}
                    to={`todo/${todo.id}/update`}
                  >
                    Update
                  </Link>
                  <button
                    data-id={todo.id}
                    className={"btn btn-sm mx-1 btn-danger rounded-1"}
                    onClick={deleteCallback}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}
