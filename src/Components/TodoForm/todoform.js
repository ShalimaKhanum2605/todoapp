import React, { useState } from "react";

import useTodo from "../../hooks";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo } = useTodo();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="What needs to be done"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button" onClick={() => addTodo(input)}>
        Add todo
      </button>
    </div>
  );
}

export default TodoForm;
