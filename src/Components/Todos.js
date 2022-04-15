import React from 'react'

export const Todos = ({todoItems, onDelete}) => {
  return (
    <div className="container">
      <h3 className="text-center"> Todos List </h3>
      { todoItems.length===0? "No items to display":
        todoItems.map((items) => (
        <ul key={items.sno}>
          <h4> {items.title} </h4>
          <p> {items.desc} </p>
          <button type="button" class="btn btn-danger btn-sm" onClick={()=>onDelete(items.sno)}>Delete</button>
        </ul>
      ))
      }
    </div>
  )
}