import { useTodo } from "../contexts/TodoContext";
import { TodoActionTypes, Todo } from "../types/TodoTypes";

const TodoList = () => {
  const { todos, dispatch } = useTodo();

  const toggleTodo = (id: number): void => {
    dispatch({ type: TodoActionTypes.TOGGLE_TODO, payload: id });
  };

  const removeTodo = (id: number): void => {
    dispatch({ type: TodoActionTypes.REMOVE_TODO, payload: id });
  };

  return (
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
  );
};

export default TodoList;
