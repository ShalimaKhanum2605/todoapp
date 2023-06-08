import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const useTodo = () => useContext(TodoContext);

export default useTodo;
