import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useTodo } from "../contexts/TodoContext";
import { Todo } from "../types/TodoTypes";

const TodoApp = () => {
  const { todos, dispatch } = useTodo();
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (text: string): void => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const toggleTodo = (id: number): void => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const removeTodo = (id: number): void => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TodoApp;
