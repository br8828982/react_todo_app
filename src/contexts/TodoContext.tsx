import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { Todo, TodoAction } from "../types/TodoTypes";
import { initialTodos, todoReducer } from "../store/todoReducer";
import useLocalStorage from "../hooks/useLocalStorage";

export interface TodoContextProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [storedTodos, setStoredTodos] = useLocalStorage({
    key: "todos",
    initialValue: initialTodos,
  });

  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  useEffect(() => {
    setStoredTodos(todos);
  }, [todos, setStoredTodos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
