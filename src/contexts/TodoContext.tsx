import React, {
  createContext,
  FC,
  useContext,
  useReducer,
  ReactNode,
} from "react";
import { Todo, TodoAction } from "../types/TodoTypes";
import todoReducer from "../store/todoReducer";

export interface TodoContextProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextProps => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

const initialTodos: Todo[] = [
  { id: 1703767143287, text: "Learn React", completed: false },
  { id: 1703767168695, text: "Build a ToDo app", completed: true },
];
