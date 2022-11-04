import React, { useState } from "react";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import NewTodo from "./NewTodo";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos((filteredTodos))
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemovoTodo={handleRemoveTodo} />
    </div>
  );
}
