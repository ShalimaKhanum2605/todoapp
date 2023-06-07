import React, { useState } from 'react';
import Todo from '../Todo/todo';
import TodoForm from '../TodoForm/todoform';
import "./todolist.css";
import CompletedTodolist from '../CompletedTodoList/CompletedTodolist';
import IncompletedTodolist from '../IncompletedTodoList/IncompletedTodolist';




function Todolist() {
    
    const [todos, setTodos] = useState([]);
    const [todoActiveTab, setTodoActiveTab] = useState("incompleted");
    
    const addTodo = todo => {   
        if(!todo || /^\s*$/.test(todo)) {
            return;
        }
        const newTodo = {name:todo, id: Date.now(), isComplete:false}
        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);

    };

    function handleTabClick (tab) {

        setTodoActiveTab(tab);
        let filteredTodos;
        if(tab === "incompleted") {
        filteredTodos= todos.filter((todo, index)=> todo.isComplete === false);

        } else {
            filteredTodos = todos.filter((todo, index)=> todo.isComplete === true);
        }
        setTodos(filteredTodos);
        
    };


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };



    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
        
    };

    return (
        <div className='todo-container'>

            <h1> What's the plan for today?</h1>
            <div className='todo-container-content'> 
                <TodoForm addTodo={addTodo} />
                <div style={{display: "flex", justifyContent: "center", marginBottom: 20}}>
                    <div className='tab' onClick={()=>handleTabClick("incompleted")}>Incompleted</div>
                    <div className='tab' onClick={()=>handleTabClick("completed")} >Completed</div>
                </div>
                <div>
                  {todoActiveTab === "incompleted" && <IncompletedTodolist todos={todos} updateTodo={updateTodo}/>}
                  {todoActiveTab === "completed" && <CompletedTodolist/>}
                </div>
            </div>
        </div>
    );

    // return (<div>
    //     <h1>
    //     hello world
    //     </h1>
    //     <p>dfghjg</p>
    //     </div>
    //     );
};

export default Todolist;