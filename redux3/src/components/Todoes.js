import React from "react";

//프레젠테이셔널 컴포넌트 : TodoItem, TodoList, Todoes
//이렇게 여러개의 컴포넌트를 만드는 건 리렌더링 성능을 최적화 하기 위함

function TodoItem({ todoes }) {
  return <li>할일목록</li>;
}

function TodoList({ todoes }) {
  return (
    <ul>
      <TodoItem todoes={todoes} />
    </ul>
  );
}

function Todoes({ todoes, onCreate, onToggle }) {
  return (
    <div>
      <TodoList todoes={todoes} />
      <form>
        <input type="text" placeholder="할 일 입력" />
        <button onClick={onCreate}>등록</button>
      </form>
    </div>
  );
}

export default Todoes;
