import "./App.css";
import TodoApp from "./components/TodoApp";
import { TodoProvider } from "./contexts/TodoContext";

const App = () => (
  <TodoProvider>
    <TodoApp />
  </TodoProvider>
);

export default App;
