import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./todo.css";
import { FaSave } from "react-icons/fa";
import "./todo.css";


function Todo({ todo, completeTodo, removeTodo, updateTodo }) {
  
  const [editMode, setEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(todo.name);  

  
  const submitUpdate = () => {
    updateTodo(todo.id, todoValue);
    setEditMode(false);
  };

  const handleChange = e => {
    setTodoValue(e.target.value);
  };


  // if (editMode.id) {
  //   return <TodoForm edit={edit} onSubmit={submitUpdate}>
  // };
  

  return (
    <>
      <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={todo.id}
      >
            {/* <div 
            key={todo.id} onClick={() => completeTodo(todo.id)}
            className="complete">  
            </div> */}

            {editMode ? <input onChange={handleChange} value={todoValue}/> : <p>{todoValue}</p>}
            

            <div className="icons">
              <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
              />

              {editMode ? <FaSave
                onClick={submitUpdate}
                className="save-icon"
              
              /> : <TiEdit
                onClick={() => setEditMode(true)}
                className="edit-icon"
              />
              }


            </div>
      </div>
    </>
  );
}

export default Todo;
