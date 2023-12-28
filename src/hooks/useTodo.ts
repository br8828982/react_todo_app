import { useContext } from "react";
import { TodoContext, TodoContextProps } from "../contexts/TodoContext";

export const useTodo = (): TodoContextProps => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
