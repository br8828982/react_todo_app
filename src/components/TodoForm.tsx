import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useTodo } from "../contexts/TodoContext";
import { TodoActionTypes } from "../types/TodoTypes";

const TodoForm = () => {
  const { dispatch } = useTodo();
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (text: string): void => {
    if (text.trim() === "") return;
    dispatch({ type: TodoActionTypes.ADD_TODO, payload: text });
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

export default TodoForm;
