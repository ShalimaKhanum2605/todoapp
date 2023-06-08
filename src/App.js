// import logo from './logo.svg';
import React, { useState } from "react";
// // import {'button'}
// // import {button} from "/home/shalima/my-app/src/Components/button.js"

import TodoForm from "./Components/TodoForm/TodoForm";

import CompletedTodolist from "./Components/CompletedTodoList/CompletedTodoList";
import IncompletedTodolist from "./Components/IncompletedTodoList/IncompletedTodoList";

import { TodoProvider } from "./context/TodoContext";

import "./App.css";

function App() {
  const [todoActiveTab, setTodoActiveTab] = useState("incompleted");

  function handleTabClick(tab) {
    setTodoActiveTab(tab);
  }

  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1> What's the plan for today?</h1>
        <div className="todo-container-content">
          <TodoProvider>
            <TodoForm />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <div className="tab" onClick={() => handleTabClick("incompleted")}>
                Incompleted
              </div>
              <div className="tab" onClick={() => handleTabClick("completed")}>
                Completed
              </div>
            </div>
            <div>
              {todoActiveTab === "incompleted" && <IncompletedTodolist />}
              {todoActiveTab === "completed" && <CompletedTodolist />}
            </div>
          </TodoProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
