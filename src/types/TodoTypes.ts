export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "REMOVE_TODO"; payload: number };
