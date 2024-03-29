import { Todo, TodoAction, TodoActionTypes } from "../types/TodoTypes";

export const initialTodos: Todo[] = [
  { id: 1703767143287, text: "Learn React", completed: false },
  { id: 1703767168695, text: "Build a ToDo app", completed: true },
];

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case TodoActionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case TodoActionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
