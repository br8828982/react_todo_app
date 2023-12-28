import { Todo, TodoAction, TodoActionTypes } from "../types/TodoTypes";

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
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

export default todoReducer;
