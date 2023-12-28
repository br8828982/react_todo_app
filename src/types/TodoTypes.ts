export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: string;
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number;
}

interface RemoveTodoAction {
  type: TodoActionTypes.REMOVE_TODO;
  payload: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction;

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
