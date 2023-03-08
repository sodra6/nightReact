import React, { useState } from "react";

//프레젠테이셔널 컴포넌트 : TodoItem, TodoList, Todoes
//이렇게 여러개의 컴포넌트를 만드는 건 리렌더링 성능을 최적화 하기 위함

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  console.log(todo);
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.check ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todoes, onToggle }) {
  console.log(todoes);
  return (
    <ul>
      {todoes.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todoes({ todoes, onCreate, onToggle }) {
  //state 선언 - redux를 사용한다고 하여 모든 state를 store가 관리할 필요가 없다.
  const [input, setInput] = useState("");

  //change 함수
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    onCreate(input); //새롭게 데이터를 store에 추가
    e.preventDefault();
    setInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일 입력"
          onChange={onChange}
          value={input}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todoes={todoes} onToggle={onToggle} />
    </div>
  );
}

export default Todoes;
