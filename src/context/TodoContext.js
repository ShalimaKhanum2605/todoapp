import React, { createContext, useState } from "react";

export const TodoContext = createContext([]);

TodoContext.displayName = "Todo";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo || /^\s*$/.test(todo)) {
      return;
    }
    const newTodo = { name: todo, id: Date.now(), isComplete: false };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo, completeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
