import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";


const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <>
      <div className="App"></div>
      <NewTodo onAddTodo={todoAddHandler}></NewTodo>
      <TodoList items={todos}></TodoList>
    </>
  );
};

export default App;
