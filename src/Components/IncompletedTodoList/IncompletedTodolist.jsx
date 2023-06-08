import React from "react";

import Todo from "../Todo/Todo";

import useTodo from "../../hooks";

function IncompletedTodoList() {
  const { todos, updateTodo } = useTodo();
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} todoIndex={index} updateTodo={updateTodo} />
        ))
      ) : (
        <p>No goals available</p>
      )}
    </>
  );
}

export default IncompletedTodoList;
