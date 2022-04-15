import React, {useState} from 'react'

export default function AddTodo({addTodo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function onChange(event){
    if (event.id === "title") setTitle(event.value);
    else setDesc(event.value);
  }

  const submit = (e) =>{
    e.preventDefault();
    addTodo(title, desc);
  }

  return (
    <div className="container">
    <h3> Add a Todo </h3>
      <form onSubmit={submit}>
        <div clasName="mb-3">
          <label for="title">Todo title</label>
          <input type="text" className="form-control" value={title} id="title" placeholder="Add a Todo" onChange={(e) => onChange(e.target)} />
       </div>
        <div className="mb-3">
          <label for="descr">Todo Decription</label>
          <input type="text" class="form-control" value={desc} id="descr" placeholder="Todo description" onChange={(e) => onChange(e.target)} />
        </div>
        <button type="submit" class="btn btn-sm btn-success">Submit</button>
      </form>
    </div>
  )
}
