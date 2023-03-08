import React, { useCallback } from "react";
import Todoes from "../components/Todoes";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todoes";

function TodoesContainer() {
  //useSelector(), store의 state값을 조회하는 것
  const todoes = useSelector((state) => state.todoes);
  //useDispatch 처리
  const dispatch = useDispatch();
  const onCreate = (text) => {
    console.log(text);
    dispatch(addTodo(text));
  };
  //체크 미체크 => 할일은 여러개 map()으로 처리될 예정
  //할일 한개에 함수가 사용될때, 다른 할일에도 리렌더링되는것을 방지하기 위해 useCallback 사용
  //const onToggle = (id) => dispatch(toggleTodo(id));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  return (
    <div>
      <Todoes todoes={todoes} onCreate={onCreate} onToggle={onToggle} />
    </div>
  );
}

export default TodoesContainer;
