import React from 'react'

import Todo from '../Todo/todo' 

function IncompletedTodolist({todos, updateTodo}) {

  return (
    <>
    {todos.length > 0 ? todos.map((todo, index)=> (<Todo key={todo.id} todo={todo} todoIndex={index} updateTodo={updateTodo} />)): <pa>No goals available</pa>}
</>
  )
}

export default IncompletedTodolist