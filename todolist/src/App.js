import "./App.css";
import TodoBox from "./TodoBox";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoBox>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoBox>
    </div>
  );
}

export default App;
